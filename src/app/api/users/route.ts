import { NextRequest, NextResponse } from 'next/server'
import { auth, createClerkClient } from '@clerk/nextjs/server'

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

export async function GET(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  try {
    const users = await clerk.users.getUserList()
    const formattedUsers = users.data.map(u => ({
      id: u.id,
      username: u.username || u.emailAddresses[0].emailAddress.split('@')[0],
      email: u.emailAddresses[0].emailAddress,
      fullName: `${u.firstName} ${u.lastName}`.trim(),
      role: u.publicMetadata.role || 'expert',
      sectorUnitId: u.publicMetadata.sectorUnitId || null,
      isActive: true, // Clerk handles this via banned state if needed
      createdAt: u.createdAt,
      profilePic: u.imageUrl
    }))

    return NextResponse.json({ success: true, data: formattedUsers })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  try {
    const data = await req.json()
    
    const newUser = await clerk.users.createUser({
      emailAddress: [data.email],
      username: data.username,
      firstName: data.fullName.split(' ')[0],
      lastName: data.fullName.split(' ').slice(1).join(' ') || '',
      password: data.password,
      publicMetadata: {
        role: data.role,
        sectorUnitId: data.sectorUnitId,
        onboardingComplete: true // Admins bypass onboarding
      }
    })

    return NextResponse.json({ success: true, data: newUser })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
