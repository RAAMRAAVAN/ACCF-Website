// app/api/hospital/route.js
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';
// import HospitalID from "../../(components)/Global";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('HIMS'); // Replace with your actual database name
    const collection = db.collection('Hospital');
    const { searchParams } = new URL(req.url);
    const HospitalID = searchParams.get('HospitalID');

    const result = await collection.findOne({ id: Number(HospitalID) });

    if (result) {
      return NextResponse.json({ result });
    } else {
      return NextResponse.json({ error: 'No hospital found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Error fetching hospital data' }, { status: 500 });
  }
}
