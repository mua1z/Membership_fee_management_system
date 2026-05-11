import { NextRequest, NextResponse } from 'next/server'
import Setting from '@/models/Setting'
import { validateAuth } from '@/lib/api-middleware'
import { v4 as uuidv4 } from 'uuid'

export async function GET(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    let settings = await Setting.findOne()
    if (!settings) {
      settings = await Setting.create({})
    }
    return NextResponse.json({ success: true, data: settings })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    const body = await req.json()
    let settings = await Setting.findOne()

    if (body.branches) {
      body.branches = body.branches.filter((b: any) => b.name && b.name.trim() !== '')
    }

    if (!settings) {
      settings = await Setting.create(body)
    } else {
      if (body.branches) {
        let existingBranches = settings.branches || []
        const updatedBranches = body.branches || []
        const newBranchIds = updatedBranches.filter((b: any) => b._id).map((b: any) => b._id)

        let merged = existingBranches.filter((b: any) => newBranchIds.includes(b._id))

        for (const branchData of updatedBranches) {
          if (branchData._id) {
            const idx = merged.findIndex((b: any) => b._id === branchData._id)
            if (idx !== -1) merged[idx] = { ...merged[idx], ...branchData }
            else merged.push(branchData)
          } else {
            merged.push({ _id: uuidv4(), ...branchData })
          }
        }
        settings.branches = merged
        settings.changed('branches', true)
      }

      if (body.contributionRules) {
        settings.contributionRules = body.contributionRules
        settings.changed('contributionRules', true)
      }
      if (body.distribution) {
        settings.distribution = body.distribution
        settings.changed('distribution', true)
      }
      if (body.system) {
        settings.system = body.system
        settings.changed('system', true)
      }

      await settings.save()
    }

    return NextResponse.json({ success: true, message: 'Settings updated successfully', data: settings })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
