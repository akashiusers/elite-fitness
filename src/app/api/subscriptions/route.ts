import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .order('createdAt', { ascending: false });
      
    if (error) throw error;
    
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    return NextResponse.json({ error: 'Failed to fetch subscriptions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { data, error } = await supabase
      .from('subscriptions')
      .insert([
        {
          fullName: body.fullName,
          email: body.email,
          planName: body.planName,
          planPrice: body.planPrice
        }
      ])
      .select();
      
    if (error) throw error;
    
    return NextResponse.json({ success: true, subscription: data[0] });
  } catch (error) {
    console.error('Error saving subscription:', error);
    return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 });
  }
}
