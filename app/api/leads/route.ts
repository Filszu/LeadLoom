import postLead from '@/lib/dbOperations/postNewLead';
import { NextResponse, type NextRequest } from 'next/server'
 
export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const leadData = request.body;


    console.log('----------->data', leadData)

    console.log('---==-->requestHeaders', requestHeaders)


    // const res = request.formData()

    // console.log('------formadata----->res', res)

    const res = await request.json()

    console.log('------req.json----->res', res)
    await postLead(res)

    // return NextResponse.json({ message: 'posted' })

  

  return new NextResponse('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })







}

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from /api/leads' })


}
