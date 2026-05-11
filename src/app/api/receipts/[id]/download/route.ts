import { NextRequest, NextResponse } from 'next/server'
import Receipt from '@/models/Receipt'
import Payment from '@/models/Payment'
import Member from '@/models/Member'
import Setting from '@/models/Setting'
import ReceiptPDF from '@/utils/receiptPDF'
import { validateAuth } from '@/lib/api-middleware'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const auth = await validateAuth(req)
  if (!auth) return new NextResponse('Unauthorized', { status: 401 })

  try {
    const receipt = await Receipt.findByPk(params.id, {
      include: [
        { model: Member, as: 'memberInfo' },
        { model: Payment, as: 'paymentInfo' }
      ]
    })
    if (!receipt) return new NextResponse('Receipt not found', { status: 404 })

    const settings = await Setting.findOne()
    const receiptObj: any = receipt.toJSON()
    
    // @ts-ignore
    const pdfBuffer = await ReceiptPDF.generatePDFBuffer(
      receiptObj, 
      receiptObj.paymentInfo, 
      receiptObj.memberInfo, 
      settings
    )

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${receiptObj.receiptId}.pdf"`,
      },
    })
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 })
  }
}
