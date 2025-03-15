// app/api/home_text/route.js
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';
import HospitalID from "../../(components)/Global";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('HIMS'); // Replace with your actual database name
    const collection = db.collection('home_text');

    const result = await collection.find({ HospitalID: HospitalID }).toArray();

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
