// import { sql, connectDB } from "@/lib/db";

// export async function GET(req) {
//   await connectDB();
//   try {
//     const result = await sql.query("SELECT * FROM CMS_user");
//     return new Response(JSON.stringify(result.recordset), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: "Database query failed", details: err }),
//       { status: 500 }
//     );
//   }
// }
