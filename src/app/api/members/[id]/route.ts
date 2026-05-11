import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import Payment from '@/models/Payment';
import Receipt from '@/models/Receipt';
import Contribution from '@/models/Contribution';
import Setting from '@/models/Setting';
import ClassificationEngine from '@/utils/classificationEngine';
import { validateAuth, authorize } from '@/middleware/apiAuth';
import { flattenMemberData, generatePaymentSchedule } from '@/utils/memberHelpers';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  try {
    const member = await Member.findByPk(params.id);
    if (!member) return NextResponse.json({ success: false, message: 'Member not found.' }, { status: 404 });

    // Scope check
    if (user.role === 'sector_officer' && user.sectorUnitId && member.sectorUnitId !== user.sectorUnitId) {
      return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
    }

    return NextResponse.json({ success: true, data: member });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const member = await Member.findByPk(params.id);
    if (!member) return NextResponse.json({ success: false, message: 'Member not found.' }, { status: 404 });

    // Scope check
    if (user.role === 'sector_officer' && user.sectorUnitId && member.sectorUnitId !== user.sectorUnitId) {
      return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
    }

    const updateData = await request.json();
    let settings = await Setting.findOne();
    if (!settings) settings = await Setting.create({});

    // If financial data or membership type changed, re-classify
    if (updateData.financial || updateData.membershipType || updateData.sector) {
      const classification = ClassificationEngine.autoClassifyAndCalculate(updateData, settings);
      updateData.subType = classification.subType;
      updateData.classificationRuleId = classification.classificationRuleId;
      updateData.cluster = classification.cluster || updateData.cluster || 'N/A';
      updateData.contribution = {
        monthlyFee: classification.monthlyFee,
        percentage: classification.percentage,
        annualFee: classification.annualFee,
        hqShare: classification.hqShare,
        branchShare: classification.branchShare
      };
      updateData.netSalary = classification.netSalary;
    }

    // If paymentDay changed, regenerate schedule if no payments made
    if (updateData.paymentDay) {
      const hasPayments = (member.paymentSchedule || []).some((s: any) => s.status === 'Paid');
      if (!hasPayments) {
        updateData.paymentSchedule = generatePaymentSchedule(new Date().getFullYear(), updateData.paymentDay);
      }
    }

    const flat = flattenMemberData(updateData);
    await Member.update(flat, { where: { id: params.id } });

    const updated = await Member.findByPk(params.id);
    return NextResponse.json({ success: true, message: 'Member updated successfully', data: updated });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const user = await validateAuth(request);
  if (!user || !authorize('admin', 'sector_officer')(user)) {
    return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
  }

  try {
    const member = await Member.findByPk(params.id);
    if (!member) return NextResponse.json({ success: false, message: 'Member not found.' }, { status: 404 });

    // Scope check
    if (user.role === 'sector_officer' && user.sectorUnitId && member.sectorUnitId !== user.sectorUnitId) {
      return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
    }

    const whereMember = { memberDbId: member.id };
    await Receipt.destroy({ where: whereMember });
    await Payment.destroy({ where: whereMember });
    await Contribution.destroy({ where: whereMember });
    
    await member.destroy();
    return NextResponse.json({ success: true, message: 'Member deleted successfully' });

  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
