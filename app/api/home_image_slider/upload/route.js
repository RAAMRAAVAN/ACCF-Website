import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const ALLOWED_ORIGIN = "http://localhost:3000"; // Set allowed frontend URL

// Function to set CORS headers
function setCorsHeaders(response) {
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN); // Allow frontend domain
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
}

// Handle preflight (OPTIONS) requests
export async function OPTIONS() {
    return setCorsHeaders(new NextResponse(null, { status: 204 }));
}

// Handle file upload (POST request)
export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("image");

        if (!file) {
            return setCorsHeaders(
                NextResponse.json({ success: false, message: "No image uploaded" }, { status: 400 })
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Define file path
        const filePath = path.join(process.cwd(), "public/slider", file.name);

        // Save file
        await fs.writeFile(filePath, buffer);

        return setCorsHeaders(
            NextResponse.json({
                success: true,
                message: "Image uploaded successfully!",
                filePath: `/slider/${file.name}`,
            })
        );
    } catch (error) {
        return setCorsHeaders(
            NextResponse.json({ success: false, message: error.message }, { status: 500 })
        );
    }
}
