// Prompt 5: Refactor to use POST method based on Next 13 docs
import { NextApiRequest, NextApiResponse } from 'next';
import { Contact } from '@/interfaces/interfaces';

const API_URL = process.env.API_URL || '';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const data: Contact = req.body;
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
}