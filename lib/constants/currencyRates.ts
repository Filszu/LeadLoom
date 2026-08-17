export const CURRENCY_UNITS_PER_USD = {
    USD: 1,
    PLN: 4,
    EUR: 0.92,
} as const

export type SupportedCurrency = keyof typeof CURRENCY_UNITS_PER_USD

function normalizeCurrency(currency?: string | null): SupportedCurrency {
    const code = (currency ?? 'USD').trim().toUpperCase()

    if (code in CURRENCY_UNITS_PER_USD) {
        return code as SupportedCurrency
    }

    return 'USD'
}

export function convertToUsd(amount: number, currency?: string | null): number {
    const unitsPerUsd = CURRENCY_UNITS_PER_USD[normalizeCurrency(currency)]
    const usd = amount / unitsPerUsd

    return Math.round(usd * 100) / 100
}
