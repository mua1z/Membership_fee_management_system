import { NextRequest, NextResponse } from 'next/server'
import Member from '@/models/Member'
import Setting from '@/models/Setting'
import { validateAuth } from '@/lib/api-middleware'
import ClassificationEngine from '@/utils/classificationEngine'

export async function POST(req: NextRequest) {
  const auth = await validateAuth(req)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  if (auth.user.role !== 'admin') return NextResponse.json({ message: 'Forbidden' }, { status: 403 })

  try {
    const members = await Member.findAll()
    let updated = 0
    let errors = 0

    const settingsInfo = await Setting.findOne()
    for (const member of members) {
      try {
        const raw: any = member.toJSON()
        const memberData = {
          membershipType: raw.membershipType,
          sector: raw.sector,
          branch: raw.branch,
          subType: raw.subType,
          financial: {
            salary: raw.financialSalary || 0,
            employmentType: raw.financialEmploymentType || 'Private',
            occupationType: raw.financialOccupationType || 'Informal',
            income: raw.financialIncome || 0,
            employees: raw.financialEmployees || 0,
            capital: raw.financialCapital || 0
          }
        }
        // @ts-ignore
        const classification = ClassificationEngine.autoClassifyAndCalculate(memberData, settingsInfo)
        await member.update({
          contributionMonthlyFee: classification.monthlyFee,
          contributionPercentage: classification.percentage,
          contributionAnnualFee: classification.annualFee,
          contributionHqShare: classification.hqShare,
          contributionBranchShare: classification.branchShare,
          netSalaryGrossSalary: classification.netSalary?.grossSalary || 0,
          netSalaryPensionDeduction: classification.netSalary?.pensionDeduction || 0,
          netSalaryTaxDeduction: classification.netSalary?.taxDeduction || 0,
          netSalaryTotalDeductions: classification.netSalary?.totalDeductions || 0,
          netSalaryNetSalary: classification.netSalary?.netSalary || 0,
          netSalaryContributionFee: classification.netSalary?.contributionFee || 0,
          netSalaryFinalNetSalary: classification.netSalary?.finalNetSalary || 0
        })
        updated++
      } catch (err) {
        errors++
      }
    }

    return NextResponse.json({
      success: true,
      message: `Recalculated ${updated} members (${errors} errors)`,
      data: { updated, errors }
    })
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
}
