import { NextRequest, NextResponse } from 'next/server'
import { createClerkClient } from '@clerk/nextjs/server'
import mysql from 'mysql2/promise'

export async function POST(req: NextRequest) {
  const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

  try {
    console.log('Connecting to MySQL...', { host: process.env.DB_HOST, database: process.env.DB_NAME });
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
      database: process.env.DB_NAME || 'mcms'
    })
    console.log('Connected to MySQL.');

    // 2. Fetch users
    const [localUsers]: any = await connection.execute('SELECT * FROM users')
    await connection.end()

    console.log(`Found ${localUsers.length} local users.`);
    const results = []

    for (const localUser of localUsers) {
      try {
        console.log(`Migrating user: ${localUser.email}`);
        
        // Generate a unique dummy phone number (e.g. +1 followed by padded ID)
        const dummyPhone = `+1${String(localUser.id).padStart(10, '0')}`;

        // Create user in Clerk
        const clerkUser = await clerk.users.createUser({
          emailAddress: [localUser.email],
          username: localUser.username,
          phoneNumber: [dummyPhone],
          firstName: localUser.fullName.split(' ')[0],
          lastName: localUser.fullName.split(' ').slice(1).join(' ') || '',
          password: 'Mx-92#KzLp_81Qv' + Math.random().toString(36).substring(7), 
          publicMetadata: {
            role: localUser.role,
            sectorUnitId: localUser.sectorUnitId,
            legacyId: localUser.id,
            onboardingComplete: true
          },
        })
        console.log(`Successfully migrated: ${localUser.email}`);
        results.push({ email: localUser.email, status: 'Migrated', clerkId: clerkUser.id })
      } catch (error: any) {
        console.error(`Failed to migrate ${localUser.email}:`, error);
        results.push({ email: localUser.email, status: 'Failed', error: error.message })
      }
    }

    return NextResponse.json({ success: true, migrated: results })
  } catch (error: any) {
    console.error('CRITICAL MIGRATION ERROR:', error);
    return NextResponse.json({ success: false, message: error.message || 'Unknown Error', error: error }, { status: 500 })
  }
}
