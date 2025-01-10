import { Lead } from '@/database.types';
import { IAdmitadLead } from '@/types';
import postLead from '@/lib/dbOperations/postNewLead';
import { NextResponse, type NextRequest } from 'next/server';
import postUserLead from '@/lib/dbOperations/postUserLead';
import supabase from '@/config/supaBaseClient';

export async function GET(request: Request) {
    //use form data
    let resMsg = '';
    try {
        const { searchParams } = new URL(request.url);

        console.log('------searchParams----->', searchParams ?? '');

        // console.log('------searchParamsValues----->', searchParams.values())

        const url = new URL(request.url);
        console.log('request.url ->', url);

        const validDomains = [
            'https://store.admitad.com',
            '91.228.155.91',
            '91.228.155.13',
        ];

        // x-forwarded-for'] || req.connection.remoteAddress;
        const requestFromUrl =
            request.headers.get('x-forwarded-for') ||
            request.headers.get('referer') ||
            request.headers.get('origin') ||
            request.headers.get('host');

        console.log('requestFromUrl ->', requestFromUrl);

        const isValidDomain = validDomains.includes(requestFromUrl || '');

        console.log('isValidDomain ->', isValidDomain);
        if (!isValidDomain) {
            resMsg = ' -> Forbidden😿';
        }

        const requestFromRef =
            request.headers.get('referer') || request.headers.get('origin');

        console.log('requestFromUrl ->', requestFromRef);

        // const lead: IAdmitadLead = {
        //     action: searchParams.get('action') || '',
        //     action_id: searchParams.get('action_id') || '',
        //     admitad_id: searchParams.get('admitad_id') || '',

        //     country_code: searchParams.get('country_code') || '',
        //     currency: searchParams.get('currency') || '',
        //     offer_id: searchParams.get('offer_id') || '',
        //     offer_name: searchParams.get('offer_name') || '',

        //     payment_status: searchParams.get('payment_status') || '',

        //     subid: searchParams.get('subid') || '',
        //     subid1: searchParams.get('subid1') || '',
        //     subid2: searchParams.get('subid2') || '',
        //     subid3: searchParams.get('subid3') || '',
        //     subid4: searchParams.get('subid4') || '',
        //     type: searchParams.get('type') || '',
        //     user_agent: searchParams.get('user_agent') || '',
        //     user_referer: searchParams.get('user_referer') || '',
        //     website_name: searchParams.get('website_name') || '',
        //     // ----
        //     time: searchParams.get('time') || '',
        //     click_time: searchParams.get('click_time') || '',
        //     conversion_time: searchParams.get('conversion_time') || '',
        //     order_id: searchParams.get('order_id') || '',
        //     order_sum: searchParams.get('order_sum') || '',
        //     payment_sum: searchParams.get('payment_sum') || '',
        //     reward_ready: searchParams.get('reward_ready') || '',
        //     website_id: searchParams.get('website_id') || '',
        // };

        // ...here

        const lead: any = {
            sub1: searchParams.get('sub1') || '',
            sub2: searchParams.get('sub2') || '',
            sub3: searchParams.get('sub3') || '',
            sub4: searchParams.get('sub4') || '',
            sub5: searchParams.get('sub5') || '',
            affiliate_id: searchParams.get('affiliate_id') || '',
            affiliate_name: searchParams.get('affiliate_name') || '',
            payout_amount: searchParams.get('payout_amount') || '',
            geo_country_name: searchParams.get('geo_country_name') || '',
            affiliate_source_id: searchParams.get('affiliate_source_id') || '',
            app_id: searchParams.get('app_id') || '',
            conversion_id: searchParams.get('conversion_id') || '',
            device_brand: searchParams.get('device_brand') || '',
            offer_currency: searchParams.get('offer_currency') || '',
            offer_name: searchParams.get('offer_name') || '',
            offer_id: searchParams.get('offer_id') || '',
            origin: searchParams.get('origin') || '',
            user_ip: searchParams.get('user_ip') || '',
            user_id: searchParams.get('user_id') || '',
        };

        const { data, error: insertError } = await supabase
        .from('userLeads')
        .insert([
            {
                userId: "03c774e4-62ac-4279-a5c3-7d222e3d9fbb",
                programmId: "753ee345-93e7-491b-9862-f5f686dd26bd",
                userRef1: lead.sub1,
                userRef2: "",
                status: 'pending',
                leadId: null,
                // currency: leadData.currency??null,
                currency: "USD",
                value: 0,
                offer_name: "0",
                description: JSON.stringify(lead),
            },
        ])
        .select();

        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('userLead', data);
        
    } catch (e) {
        console.log('------req.json----->res', e);
        return new Response(`Error ${e}`, {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':
                    'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
    return new Response('🐈LeadLoom - MEOW 😽' + resMsg, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}
