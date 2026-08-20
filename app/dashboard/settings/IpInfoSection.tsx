'use client'

import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaGlobe } from 'react-icons/fa'

export default function IpInfoSection() {
    const [ip, setIp] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    async function loadIpInfo() {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/ip', { cache: 'no-store' })
            if (!response.ok) {
                throw new Error('Could not read IP info')
            }

            const data = (await response.json()) as {
                ip?: string
                country_code?: string
            }

            setIp(data.ip || 'unknown')
            setCountryCode(data.country_code || 'unknown')
        } catch {
            setError('Could not check your IP right now.')
            setIp('')
            setCountryCode('')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadIpInfo()
    }, [])

    return (
        <section>
            <h1>Your IP & country</h1>
            <h2>Rember VPN is not allowed, you can check your IP and country code by clicking the button below</h2>
            <Input
                className="my-4"
                name="ip"
                value={loading ? 'Checking...' : ip}
                placeholder="IP address"
                disabled
            />
            <Input
                className="my-4"
                name="country_code"
                value={loading ? 'Checking...' : countryCode}
                placeholder="country_code"
                disabled
            />
            {error ? <p className="mb-4 text-red-500">{error}</p> : null}
            <Button
                type="button"
                className="p-6"
                onClick={loadIpInfo}
                disabled={loading}
            >
                <span className="flex items-center justify-center gap-1 text-lg text-white">
                    <FaGlobe size={22} />
                    {loading ? 'Checking...' : 'Check again'}
                </span>
            </Button>
        </section>
    )
}
