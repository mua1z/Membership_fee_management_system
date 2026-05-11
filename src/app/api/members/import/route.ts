import { NextRequest, NextResponse } from 'next/server'
import Member from '@/models/Member'
import Receipt from '@/models/Receipt'
import Payment from '@/models/Payment'
import Contribution from '@/models/Contribution'
import Setting from '@/models/Setting'
import { validateAuth } from '@/lib/api-middleware'
import ClassificationEngine from '@/utils/classificationEngine'
import { flattenMemberData, generatePaymentSchedule } from '@/utils/memberHelpers'

export async function POST(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin' && auth.user.role !== 'sector_officer') {
    return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
  }

  try {
    const { members, mode } = await req.json() // mode: 'replace' | 'append'
    if (!Array.isArray(members) || members.length === 0) {
      return NextResponse.json({ success: false, message: 'No members provided.' }, { status: 400 })
    }

    if (mode === 'replace') {
      if (auth.user.role !== 'admin') {
        return NextResponse.json({ success: false, message: 'Only admins can replace all members.' }, { status: 403 })
      }
      await Receipt.destroy({ where: {} })
      await Payment.destroy({ where: {} })
      await Contribution.destroy({ where: {} })
      await Member.destroy({ where: {} })
    }

    const createdMembers = []
    const errors = []
    let settings = await Setting.findOne()
    if (!settings) settings = await Setting.create({})

    for (let i = 0; i < members.length; i++) {
      try {
        const memberData = members[i]
        
        if (!memberData.phone || memberData.phone.trim() === '') {
          memberData.phone = `NOPHONE-${Date.now()}-${i}-${Math.floor(Math.random() * 100000)}`
        }
        
        // @ts-ignore
        const classification = ClassificationEngine.autoClassifyAndCalculate(memberData, settings)
        const currentYear = new Date().getFullYear()
        const paymentSchedule = generatePaymentSchedule(currentYear, memberData.paymentDay || 1)

        const flat = flattenMemberData({
          ...memberData,
          subType: classification.subType,
          classificationRuleId: classification.classificationRuleId,
          cluster: classification.cluster || memberData.cluster || 'N/A',
          contribution: {
            monthlyFee: classification.monthlyFee,
            percentage: classification.percentage,
            annualFee: classification.annualFee,
            hqShare: classification.hqShare,
            branchShare: classification.branchShare
          },
          netSalary: classification.netSalary,
          paymentSchedule
        })

        const member = await Member.create(flat)
        createdMembers.push(member)
      } catch (err: any) {
        errors.push({ index: i, name: members[i].fullName, error: err.message })
      }
    }

    return NextResponse.json({
      success: true,
      message: `${mode === 'replace' ? 'Replaced' : 'Added'} ${createdMembers.length} members successfully.`,
      data: { count: createdMembers.length },
      errors: errors.length > 0 ? errors : undefined
    }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
