// pages/api/aboutus.js
import clientPromise from '../../../lib/mongodb';
// import HospitalID from '../../(components)/Global'; // Ensure this is correctly set
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('HIMS'); // Replace with your actual database name
    const collection = db.collection('NewsAndEvents');
    const { searchParams } = new URL(req.url);
    const HospitalID = searchParams.get('HospitalID');

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
