import { Lead } from '@/database.types';
import postLead from '@/lib/dbOperations/postNewLead';
import { NextResponse, type NextRequest } from 'next/server'
import { json } from 'stream/consumers';
 


export async function POST(request: Request) {
  try{
    
    const requestBody = await request.json()

    console.log('------req.json----->', requestBody)
    // Search Params
    const { searchParams } = new URL(request.url)

    console.log('------searchParams----->', searchParams)
    
    const lead: Lead = {
      action: searchParams.get('action') || null,
      action_id: searchParams.get('action_id') || null,
      admitad_id: searchParams.get('admitad_id') || null,

      // click_time: parseFloat(searchParams.get('click_time')) || null,

      // click_time: searchParams.get('click_time')!== null ? parseFloat(searchParams.get('click_time')) : null

      conversion_time: parseFloat(searchParams.get('conversion_time')) || null,
      country_code: searchParams.get('country_code') || null,
      created_at: new Date().toISOString(), // You may want to use the actual creation time here
      currency: searchParams.get('currency') || null,
     
      info: searchParams.get('info') || null,
      offer_id: searchParams.get('offer_id') || null,
      offer_name: searchParams.get('offer_name') || null,
      order_id: parseFloat(searchParams.get('order_id')) || null,
      order_sum: parseFloat(searchParams.get('order_sum')) || null,
      payment_status: searchParams.get('payment_status') || null,
      payment_sum: parseFloat(searchParams.get('payment_sum')) || null,
      reward_ready: parseInt(searchParams.get('reward_ready') || '0'), // Replace '0' with the default value if needed
      subid: searchParams.get('subid') || null,
      subid1: searchParams.get('subid1') || null,
      subid2: searchParams.get('subid2') || null,
      subid3: searchParams.get('subid3') || null,
      subid4: searchParams.get('subid4') || null,
      time: parseFloat(searchParams.get('time')) || null,
      type: searchParams.get('type') || null,
      user_agent: searchParams.get('user_agent') || null,
      user_referer: searchParams.get('user_referer') || null,
      website_id: parseInt(searchParams.get('website_id') || '0'), // Replace '0' with the default website ID if needed
      website_name: searchParams.get('website_name') || null,
  };
   


    await postLead()
  }catch(e){
    console.log('------req.json----->res', e)
  }
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function GET(request: Request) {
  return new Response('Hello :))!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}