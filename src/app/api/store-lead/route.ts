import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

// Initialize Notion client only if API key is available
let notion: Client | null = null;
if (process.env.NOTION_API_KEY) {
  notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });
} else {
  console.error('Missing required environment variable: NOTION_API_KEY');
}

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    // Check if environment variables are available
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { error: 'Notion API configuration is missing on the server' },
        { status: 500 }
      );
    }
    
    // Check if Notion client is initialized
    if (!notion) {
      return NextResponse.json(
        { error: 'Notion client could not be initialized' },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: name } }]
        },
        Email: {
          email: email
        },
        Message: {
          rich_text: [{ text: { content: message } }]
        },
        Status: {
          select: { name: 'New' }
        },
        'Submission Date': {
          date: { start: new Date().toISOString() }
        }
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error storing lead:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to store lead' },
      { status: 500 }
    );
  }
}