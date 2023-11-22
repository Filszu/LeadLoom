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
    
    const foo = searchParams.get('foo');

    const offerName = searchParams.get('offer_name');


    await postLead(JSON.stringify({
      searchParams: searchParams,
      requestBody: requestBody,
      offerName: offerName,
    }))
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
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}