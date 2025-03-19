import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('HIMS'); // Replace with your actual database name
    const collection = db.collection('Facilities');

    // Extract HospitalID from query parameters
    const { searchParams } = new URL(req.url);
    const HospitalID = searchParams.get('HospitalID'); // Get HospitalID from URL
    // console.log("HospitalID =", HospitalID);
    if (!HospitalID) {
      return NextResponse.json({ error: 'HospitalID is required' }, { status: 400 });
    }

    const result = await collection.find({ HospitalID: Number(HospitalID) }).toArray();

    if (result.length > 0) {
      return NextResponse.json({ result });
    } else {
      return NextResponse.json({ error: 'No records found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
