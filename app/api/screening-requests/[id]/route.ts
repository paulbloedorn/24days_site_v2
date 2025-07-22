import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';

// GET /api/screening-requests/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'Invalid ID' },
        { status: 400 }
      );
    }

    const screeningRequest = await storage.getScreeningRequest(id);
    if (!screeningRequest) {
      return NextResponse.json(
        { message: 'Screening request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(screeningRequest);
  } catch (error) {
    console.error('Error fetching screening request:', error);
    return NextResponse.json(
      { message: 'Failed to fetch screening request' },
      { status: 500 }
    );
  }
}