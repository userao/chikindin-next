import { NextResponse } from "next/server";
import projects from '@/projects.json';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));

    if (!id) return NextResponse.json(projects);
    
    const foundProject = projects.find(p => p.id === id);
    return NextResponse.json(foundProject);
}