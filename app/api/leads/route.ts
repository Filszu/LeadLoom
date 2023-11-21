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

    return NextResponse.json({ message: 'posted' })






}

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from /api/leads' })


}
