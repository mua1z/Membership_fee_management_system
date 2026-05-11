import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'
import { validateAuth } from '@/lib/api-middleware'

export async function PUT(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  try {
    const { currentPassword, newPassword } = await req.json()
    if (!currentPassword || !newPassword) {
      return NextResponse.json({ success: false, message: 'Both current and new password are required.' }, { status: 400 })
    }
    if (newPassword.length < 6) {
      return NextResponse.json({ success: false, message: 'New password must be at least 6 characters.' }, { status: 400 })
    }

    const user = await User.findByPk(auth.user.id)
    if (!user) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })

    // @ts-ignore
    const isMatch = await user.comparePassword(currentPassword)
    if (!isMatch) {
      return NextResponse.json({ success: false, message: 'Current password is incorrect.' }, { status: 401 })
    }

    user.password = newPassword
    await user.save()
    return NextResponse.json({ success: true, message: 'Password changed successfully.' })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
