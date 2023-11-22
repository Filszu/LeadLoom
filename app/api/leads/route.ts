import postLead from '@/lib/dbOperations/postNewLead';
import { NextResponse, type NextRequest } from 'next/server'
 


export async function POST(request: Request) {
  try{
    
    const res = await request.json()

    console.log('------req.json----->res', res)
    await postLead(res)
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