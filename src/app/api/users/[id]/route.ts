import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'
import SectorUnit from '@/models/SectorUnit'
import { validateAuth } from '@/lib/api-middleware'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    const user = await User.findByPk(params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: SectorUnit, as: 'assignedSectorUnit', attributes: ['id', 'name'] }]
    })
    if (!user) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })
    return NextResponse.json({ success: true, data: user })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    const user = await User.findByPk(params.id)
    if (!user) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })

    const { username, email, fullName, role, sectorUnitId, isActive, password } = await req.json()

    if (username) user.username = username
    if (email) user.email = email.toLowerCase()
    if (fullName) user.fullName = fullName
    if (role) user.role = role
    if (sectorUnitId !== undefined) user.sectorUnitId = sectorUnitId || null
    if (isActive !== undefined) user.isActive = isActive
    if (password) user.password = password

    await user.save()

    const fresh = await User.findByPk(user.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: SectorUnit, as: 'assignedSectorUnit', attributes: ['id', 'name'] }]
    })
    return NextResponse.json({ success: true, message: 'User updated successfully.', data: fresh })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    if (Number(params.id) === auth.user.id) {
      return NextResponse.json({ success: false, message: 'You cannot delete your own account.' }, { status: 400 })
    }
    const deleted = await User.destroy({ where: { id: params.id } })
    if (!deleted) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })
    return NextResponse.json({ success: true, message: 'User deleted successfully.' })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
