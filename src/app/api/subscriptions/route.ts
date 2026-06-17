import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'subscriptions.json');

async function getSubscriptions() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function GET() {
  const subscriptions = await getSubscriptions();
  return NextResponse.json(subscriptions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const subscriptions = await getSubscriptions();
    
    const newSubscription = {
      id: Date.now().toString(),
      ...body,
      date: new Date().toISOString()
    };
    
    subscriptions.push(newSubscription);
    
    const dataDir = path.dirname(dataFilePath);
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }
    
    await fs.writeFile(dataFilePath, JSON.stringify(subscriptions, null, 2));
    
    return NextResponse.json({ success: true, subscription: newSubscription });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 });
  }
}
