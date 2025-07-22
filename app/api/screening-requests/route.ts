import { NextRequest, NextResponse } from 'next/server';
import { storage } from '@/lib/storage';
import { insertScreeningRequestSchema } from '@shared/schema';
import { z } from 'zod';

// GET /api/screening-requests
export async function GET() {
  try {
    const requests = await storage.getAllScreeningRequests();
    return NextResponse.json(requests);
  } catch (error) {
    console.error('Error fetching screening requests:', error);
    return NextResponse.json(
      { message: 'Failed to fetch screening requests' },
      { status: 500 }
    );
  }
}

// POST /api/screening-requests
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertScreeningRequestSchema.parse(body);
    const newRequest = await storage.createScreeningRequest(validatedData);
    return NextResponse.json(newRequest, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Invalid request data', 
          errors: error.errors 
        },
        { status: 400 }
      );
    } else {
      console.error('Error creating screening request:', error);
      return NextResponse.json(
        { message: 'Failed to create screening request' },
        { status: 500 }
      );
    }
  }
}