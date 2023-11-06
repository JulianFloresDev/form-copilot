import { NextRequest, NextResponse } from 'next/server';
import { Contact } from '@/interfaces/interfaces';

const API_URL = process.env.API_URL || '';

export async function POST(req: NextRequest, res: NextResponse) {
    const reqBody = await req.json();
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            },
            body: JSON.stringify(reqBody)
        });
        const result = await response.json();
        res.json(result, { status: 200 });
    } catch (error) {
        res.json({ error: 'Error creating user' }, { status: 500 });
    }
}