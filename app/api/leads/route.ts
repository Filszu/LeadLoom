import { Lead } from '@/database.types';
import {IAdmitadLead } from '@/types';
import postLead from '@/lib/dbOperations/postNewLead';
import { NextResponse, type NextRequest } from 'next/server'
import postUserLead from '@/lib/dbOperations/postUserLead';

 


export async function POST(request: Request) {

  //use form data in the FURURE 
  try{
    
    // const requestBody = await request.json()

    // console.log('------req.json----->', requestBody)
    // Search Params
    const { searchParams } = new URL(request.url)

    console.log('------searchParams----->', searchParams??"")
    
    // console.log('------searchParamsValues----->', searchParams.values())

    console.log("request.url", request.url)

    const lead: IAdmitadLead = {
      action: searchParams.get('action') || '',
      action_id: searchParams.get('action_id') || '',
      admitad_id: searchParams.get('admitad_id') || '',
      
      country_code: searchParams.get('country_code') || '',
      currency: searchParams.get('currency') || '',
      offer_id: searchParams.get('offer_id') || '',
      offer_name: searchParams.get('offer_name') || '',
     
     
      payment_status: searchParams.get('payment_status') || '',

    
      subid: searchParams.get('subid') || '',
      subid1: searchParams.get('subid1') || '',
      subid2: searchParams.get('subid2') || '',
      subid3: searchParams.get('subid3') || '',
      subid4: searchParams.get('subid4') || '',
      type: searchParams.get('type') || '',
      user_agent: searchParams.get('user_agent') || '',
      user_referer: searchParams.get('user_referer') || '',
      website_name: searchParams.get('website_name') || '',
      // time: searchParams.get('time') || '',
      // click_time: searchParams.get('click_time') || '',
      // conversion_time: searchParams.get('conversion_time') || '',
      // order_id: searchParams.get('order_id') || '',
      // order_sum: searchParams.get('order_sum') || '',
      // payment_sum: searchParams.get('payment_sum') || '',
      // reward_ready: searchParams.get('reward_ready') || '',
      // website_id: searchParams.get('website_id') || '',





  };
   


    await postLead(lead)
  }catch(e){
    console.log('------req.json----->res', e)
    return new Response(`Error ${e}`, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        })

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


// -------------------------------------------

export async function GET(request: Request) {
   //use form data
   try{
    
    // const requestBody = await request.json()

    // console.log('------req.json----->', requestBody)
    // Search Params
    const { searchParams } = new URL(request.url)

    console.log('------searchParams----->', searchParams??"")
    
    // console.log('------searchParamsValues----->', searchParams.values())

    console.log("request.url", request.url)

    const lead: IAdmitadLead = {
      action: searchParams.get('action') || '',
      action_id: searchParams.get('action_id') || '',
      admitad_id: searchParams.get('admitad_id') || '',
      
      country_code: searchParams.get('country_code') || '',
      currency: searchParams.get('currency') || '',
      offer_id: searchParams.get('offer_id') || '',
      offer_name: searchParams.get('offer_name') || '',
     
     
      payment_status: searchParams.get('payment_status') || '',

    
      subid: searchParams.get('subid') || '',
      subid1: searchParams.get('subid1') || '',
      subid2: searchParams.get('subid2') || '',
      subid3: searchParams.get('subid3') || '',
      subid4: searchParams.get('subid4') || '',
      type: searchParams.get('type') || '',
      user_agent: searchParams.get('user_agent') || '',
      user_referer: searchParams.get('user_referer') || '',
      website_name: searchParams.get('website_name') || '',
      // time: searchParams.get('time') || '',
      // click_time: searchParams.get('click_time') || '',
      // conversion_time: searchParams.get('conversion_time') || '',
      // order_id: searchParams.get('order_id') || '',
      // order_sum: searchParams.get('order_sum') || '',
      // payment_sum: searchParams.get('payment_sum') || '',
      // reward_ready: searchParams.get('reward_ready') || '',
      // website_id: searchParams.get('website_id') || '',





  };
   

  // implement on production

  // if(lead.subid === "leadloom"){
  //   await postLead(lead)
  // }else{
  //   return new Response(`Forbidden`, {
  //     status: 403,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //       },
  //       })
  // }


    

    
  }catch(e){
    console.log('------req.json----->res', e)
    return new Response(`Error ${e}`, {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
        })

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


