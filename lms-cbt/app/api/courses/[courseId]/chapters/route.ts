import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { courseId: string }}
) {
    try {
        const { userId }
    } catch (error) {
        console.log("[CHAPTERS]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}