import { NextResponse } from 'next/server';
import User from '@/models/User';
import SectorUnit from '@/models/SectorUnit';
import { generateToken } from '@/utils/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Please provide email and password.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await User.findOne({ where: { email: cleanEmail } });
    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials.' }, { status: 401 });
    }

    const isMatch = await (user as any).comparePassword(password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: 'Invalid credentials.' }, { status: 401 });
    }

    if (!user.isActive) {
      return NextResponse.json({ success: false, message: 'Account is deactivated.' }, { status: 403 });
    }

    let assignedSectorUnit = null;
    if (user.sectorUnitId) {
      assignedSectorUnit = await SectorUnit.findByPk(user.sectorUnitId);
    }

    const token = generateToken(user.id);

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        user: { 
          id: user.id, username: user.username, email: user.email, 
          fullName: user.fullName, role: user.role, sectorUnitId: user.sectorUnitId, 
          profilePic: user.profilePic, assignedSectorUnit 
        },
        token
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
