import { NextResponse } from 'next/server';
import SectorUnit from '@/models/SectorUnit';
import SectorType from '@/models/SectorType';
import { validateAuth } from '@/middleware/apiAuth';

export async function GET(request: Request) {
  const user = await validateAuth(request);
  if (!user) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    if (type) {
      const sectorType = await SectorType.findOne({ where: { name: type } });
      if (!sectorType) return NextResponse.json([]);
      const units = await SectorUnit.findAll({
        where: { sectorTypeId: sectorType.id },
        order: [['name', 'ASC']]
      });
      return NextResponse.json(units.map(u => ({ ...u.toJSON(), sectorTypeName: sectorType.name })));
    }

    const units = await SectorUnit.findAll({
      include: [{ model: SectorType, as: 'sectorType', attributes: ['id', 'name'] }],
      order: [['name', 'ASC']]
    });
    return NextResponse.json(units.map((u: any) => ({
      ...u.toJSON(),
      sectorTypeName: u.sectorType?.name || ''
    })));
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
