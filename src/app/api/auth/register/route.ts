import { NextResponse } from 'next/server';
import { Op } from 'sequelize';
import User from '@/models/User';
import { generateToken } from '@/utils/auth';

export async function POST(request: Request) {
  try {
    const { username, email, password, fullName, role } = await request.json();

    const existingUser = await User.findOne({
      where: { [Op.or]: [{ email: email.toLowerCase() }, { username }] }
    });
    if (existingUser) {
      return NextResponse.json({
        success: false,
        message: 'User already exists with this email or username.'
      }, { status: 400 });
    }

    const user = await User.create({ username, email, password, fullName, role: role || 'sector_officer' });
    const token = generateToken(user.id);

    return NextResponse.json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: { id: user.id, username: user.username, email: user.email, fullName: user.fullName, role: user.role, sectorUnitId: user.sectorUnitId, profilePic: user.profilePic },
        token
      }
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
