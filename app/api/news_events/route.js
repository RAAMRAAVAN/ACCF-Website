// app/api/news-and-events/route.js
import { sql, poolPromise } from '../../../lib/db';
import { NextResponse } from 'next/server';
import HospitalID from "../../(components)/Global";
export async function GET(request) {
  try {

    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('HospitalID', sql.Int, parseInt(HospitalID, 10))
      .query('SELECT * FROM NewsAndEvents WHERE HospitalID = @HospitalID');

    if (result.recordset.length > 0) {
      return NextResponse.json({ result: result.recordset });
    } else {
      return NextResponse.json({ error: 'No records found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
