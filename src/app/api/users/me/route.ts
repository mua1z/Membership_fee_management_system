import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'
import SectorUnit from '@/models/SectorUnit'
import { validateAuth } from '@/lib/api-middleware'
import { Op } from 'sequelize'

export async function GET(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  try {
    const user = await User.findByPk(auth.user.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: SectorUnit, as: 'assignedSectorUnit', attributes: ['id', 'name'] }]
    })
    if (!user) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })
    return NextResponse.json({ success: true, data: user })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  try {
    const user = await User.findByPk(auth.user.id)
    if (!user) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })

    const { fullName, email, username, profilePic } = await req.json()

    if (fullName) user.fullName = fullName
    if (username) {
      const existing = await User.findOne({ where: { username, id: { [Op.ne]: auth.user.id } } })
      if (existing) return NextResponse.json({ success: false, message: 'Username already taken.' }, { status: 400 })
      user.username = username
    }
    if (email) {
      const existing = await User.findOne({ where: { email: email.toLowerCase(), id: { [Op.ne]: auth.user.id } } })
      if (existing) return NextResponse.json({ success: false, message: 'Email already in use.' }, { status: 400 })
      user.email = email.toLowerCase()
    }
    if (profilePic) user.profilePic = profilePic

    await user.save()

    const fresh = await User.findByPk(auth.user.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: SectorUnit, as: 'assignedSectorUnit', attributes: ['id', 'name'] }]
    })
    return NextResponse.json({ success: true, message: 'Profile updated successfully.', data: fresh })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
