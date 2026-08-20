import { NextResponse, type NextRequest } from 'next/server'

function getClientIp(request: NextRequest) {
    const forwarded = request.headers.get('x-forwarded-for')
    if (forwarded) {
        return forwarded.split(',')[0]?.trim() || null
    }

    return (
        request.headers.get('cf-connecting-ip') ||
        request.headers.get('x-real-ip') ||
        request.headers.get('x-vercel-forwarded-for') ||
        null
    )
}

function getCountryFromHeaders(request: NextRequest) {
    return (
        request.headers.get('x-vercel-ip-country') ||
        request.headers.get('cf-ipcountry') ||
        request.headers.get('x-country-code') ||
        null
    )
}

function isLocalIp(ip: string) {
    return (
        ip === '::1' ||
        ip === '127.0.0.1' ||
        ip.startsWith('127.') ||
        ip.startsWith('10.') ||
        ip.startsWith('192.168.') ||
        ip.startsWith('::ffff:127.')
    )
}

async function lookupCountryCode(ip: string) {
    try {
        const response = await fetch(
            `https://ipwho.is/${encodeURIComponent(ip)}?fields=success,country_code`,
            { cache: 'no-store' },
        )
        if (!response.ok) return null

        const data = (await response.json()) as {
            success?: boolean
            country_code?: string
        }

        if (!data.success || !data.country_code) return null
        return data.country_code.toUpperCase()
    } catch {
        return null
    }
}

export async function GET(request: NextRequest) {
    const ip = getClientIp(request)
    let country_code = getCountryFromHeaders(request)?.toUpperCase() || null

    if (ip && !country_code && !isLocalIp(ip)) {
        country_code = await lookupCountryCode(ip)
    }

    return NextResponse.json(
        {
            ip: ip ?? 'unknown',
            country_code: country_code ?? 'unknown',
        },
        {
            headers: {
                'Cache-Control': 'no-store',
            },
        },
    )
}
