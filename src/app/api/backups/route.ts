import { NextRequest, NextResponse } from 'next/server'
import { validateAuth } from '@/lib/api-middleware'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import Member from '@/models/Member'
import Payment from '@/models/Payment'
import Receipt from '@/models/Receipt'
import Contribution from '@/models/Contribution'
import Setting from '@/models/Setting'
import User from '@/models/User'

const BACKUP_DIR = path.join(process.cwd(), 'backups')

if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true })
}

export async function GET(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    const files = fs.readdirSync(BACKUP_DIR)
      .filter(f => f.endsWith('.json'))
      .map(f => {
        const filepath = path.join(BACKUP_DIR, f)
        const stat = fs.statSync(filepath)
        return { filename: f, size: stat.size, createdAt: stat.mtime }
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    return NextResponse.json({ success: true, data: files })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    const [members, payments, receipts, contributions, settings, users] = await Promise.all([
      Member.findAll(),
      Payment.findAll(),
      Receipt.findAll(),
      Contribution.findAll(),
      Setting.findAll(),
      User.findAll({ attributes: { exclude: ['password'] } })
    ])

    const backup = {
      version: '2.0-nextjs',
      createdAt: new Date().toISOString(),
      data: {
        members: members.map(m => m.toJSON()),
        payments: payments.map(p => p.toJSON()),
        receipts: receipts.map(r => r.toJSON()),
        contributions: contributions.map(c => c.toJSON()),
        settings: settings.map(s => s.toJSON()),
        users
      }
    }

    const filename = `backup-${Date.now()}.json`
    const filepath = path.join(BACKUP_DIR, filename)
    fs.writeFileSync(filepath, JSON.stringify(backup, null, 2))

    return NextResponse.json({
      success: true,
      message: 'Backup created successfully',
      data: { filename, size: fs.statSync(filepath).size }
    })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
