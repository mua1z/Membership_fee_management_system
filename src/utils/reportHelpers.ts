import { sequelize } from '@/lib/db';

export function buildScope(sectorId: string | number | null | undefined) {
  if (!sectorId) return { memberWhere: '', mWhere: '', payWhere: '', pWhere: '' };
  const esc = sequelize.escape(sectorId);
  return {
    memberWhere: ` AND sectorUnitId = ${esc} `,
    mWhere:      ` AND m.sectorUnitId = ${esc} `,
    payWhere:    ` AND memberDbId IN (SELECT id FROM members WHERE sectorUnitId = ${esc}) `,
    pWhere:      ` AND p.memberDbId IN (SELECT id FROM members WHERE sectorUnitId = ${esc}) `
  };
}
