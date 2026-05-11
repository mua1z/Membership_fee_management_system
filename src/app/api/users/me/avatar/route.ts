import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'
import { validateAuth } from '@/lib/api-middleware'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })

  try {
    const formData = await req.formData()
    const file = formData.get('avatar') as File
    if (!file) return NextResponse.json({ success: false, message: 'No file uploaded.' }, { status: 400 })

    const user = await User.findByPk(auth.user.id)
    if (!user) return NextResponse.json({ success: false, message: 'User not found.' }, { status: 404 })

    // Delete old pic
    if (user.profilePic) {
      const oldPath = path.join(process.cwd(), 'public', user.profilePic)
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath)
    }

    const ext = path.extname(file.name)
    const fileName = `${uuidv4()}${ext}`
    const relativePath = `/uploads/${fileName}`
    const absolutePath = path.join(process.cwd(), 'public', 'uploads', fileName)

    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(absolutePath, buffer)

    user.profilePic = relativePath
    await user.save()

    return NextResponse.json({ success: true, message: 'Profile picture updated.', data: { profilePic: relativePath } })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
