'use client'

import { useMemo, useState } from 'react'
import { IAdmitadLead } from '@/types'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import SubmitButton from '@/components/ui/custom/SubmitButton'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import postSystemLead from '@/lib/dbOperations/postSystemLead'

type LeadForm = Required<IAdmitadLead>

const PAYMENT_STATUSES = ['new', 'approved', 'declined'] as const
const CURRENCIES = ['PLN', 'USD', 'EUR'] as const

const EXTRA_FIELDS: { key: keyof LeadForm; label: string }[] = [
    { key: 'action_id', label: 'action_id' },
    { key: 'admitad_id', label: 'admitad_id' },
    { key: 'offer_id', label: 'offer_id' },
    { key: 'country_code', label: 'country_code' },
    { key: 'type', label: 'type' },
    { key: 'order_id', label: 'order_id' },
    { key: 'order_sum', label: 'order_sum' },
    { key: 'reward_ready', label: 'reward_ready' },
    { key: 'subid2', label: 'subid2' },
    { key: 'subid4', label: 'subid4' },
    { key: 'click_time', label: 'click_time' },
    { key: 'conversion_time', label: 'conversion_time' },
    { key: 'time', label: 'time' },
    { key: 'website_id', label: 'website_id' },
    { key: 'website_name', label: 'website_name' },
    { key: 'user_agent', label: 'user_agent' },
    { key: 'user_referer', label: 'user_referer' },
]

function pad(value: number) {
    return String(value).padStart(2, '0')
}

function nicknameDate(nickname: string) {
    if (!nickname.trim()) return ''
    const now = new Date()
    return `${nickname.trim()}_${pad(now.getDate())}_${pad(now.getMonth() + 1)}_${String(now.getFullYear()).slice(-2)}`
}

function unixNow() {
    return String(Math.floor(Date.now() / 1000))
}

function createDefaultLead(nickname = ''): LeadForm {
    const now = unixNow()
    const systemId = `system-${Date.now()}`

    return {
        action: 'step1',
        action_id: systemId,
        admitad_id: "1",
        click_time: now,
        conversion_time: now,
        country_code: 'PL',
        currency: 'USD',
        offer_id: '1',
        offer_name: 'welcomeBonus',
        order_id: '',
        order_sum: '1',
        payment_status: 'new',
        payment_sum: '1',
        reward_ready: '1',
        subid: 'LL',
        subid1: nickname,
        subid2: '',
        subid3: nicknameDate(nickname),
        subid4: '',
        time: now,
        type: 'lead',
        user_agent: 'admin-dashboard',
        user_referer: 'admin-dashboard',
        website_id: '',
        website_name: 'LeadLoom',
    }
}

function Field({
    id,
    label,
    hint,
    children,
}: {
    id: string
    label: string
    hint?: string
    children: React.ReactNode
}) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            {children}
            {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
        </div>
    )
}

export default function PostNewSystemLeadForm({
    nicknames,
}: {
    nicknames: string[]
}) {
    const { toast } = useToast()
    const [form, setForm] = useState<LeadForm>(() => createDefaultLead())
    const [subid3Manual, setSubid3Manual] = useState(false)
    const [message, setMessage] = useState<string | null>(null)

    const nicknameOptions = useMemo(
        () => nicknames.filter(Boolean).sort((a, b) => a.localeCompare(b)),
        [nicknames],
    )

    const setField = (key: keyof LeadForm, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }

    const handleNicknameChange = (value: string) => {
        setForm((prev) => ({
            ...prev,
            subid1: value,
            subid3: subid3Manual ? prev.subid3 : nicknameDate(value),
        }))
    }

    const resetForm = () => {
        setSubid3Manual(false)
        setForm(createDefaultLead())
        setMessage(null)
    }

    async function handleSubmit() {
        setMessage(null)

        const lead: IAdmitadLead = { ...form }
        const result = await postSystemLead(lead)

        if (!result.ok) {
            setMessage(result.error)
            toast({
                title: 'Lead not posted',
                description: result.error,
                variant: 'destructive',
            })
            return
        }

        const successText = `Lead posted with id ${result.id}`
        setMessage(successText)
        toast({
            title: 'Lead posted',
            description: successText,
            variant: 'success',
        })
        setSubid3Manual(false)
        setForm(createDefaultLead())
    }

    return (
        <form action={handleSubmit} className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Main fields</CardTitle>
                    <CardDescription>
                        Defaults for a system welcome bonus. Nickname is stored
                        as subid1.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                    <Field
                        id="subid1"
                        label="nickname (subid1)"
                        hint="Must match an existing profile nickname to attach a user lead."
                    >
                        <Input
                            id="subid1"
                            list="nickname-options"
                            required
                            placeholder="nickname"
                            value={form.subid1}
                            onChange={(event) =>
                                handleNicknameChange(event.target.value)
                            }
                        />
                        <datalist id="nickname-options">
                            {nicknameOptions.map((nickname) => (
                                <option key={nickname} value={nickname} />
                            ))}
                        </datalist>
                    </Field>

                    <Field id="offer_name" label="offer_name">
                        <Input
                            id="offer_name"
                            value={form.offer_name}
                            onChange={(event) =>
                                setField('offer_name', event.target.value)
                            }
                        />
                    </Field>

                    <Field id="subid" label="subid">
                        <Input
                            id="subid"
                            value={form.subid}
                            onChange={(event) =>
                                setField('subid', event.target.value)
                            }
                        />
                    </Field>

                    <Field id="action" label="action">
                        <Input
                            id="action"
                            value={form.action}
                            onChange={(event) =>
                                setField('action', event.target.value)
                            }
                        />
                    </Field>

                    <Field
                        id="subid3"
                        label="subid3 (nicknameDate)"
                        hint="Auto-fills from nickname + date. Edit to override."
                    >
                        <Input
                            id="subid3"
                            value={form.subid3}
                            onChange={(event) => {
                                setSubid3Manual(true)
                                setField('subid3', event.target.value)
                            }}
                        />
                    </Field>

                    <Field id="payment_sum" label="payment_sum">
                        <Input
                            id="payment_sum"
                            type="number"
                            min="0"
                            step="0.01"
                            value={form.payment_sum}
                            onChange={(event) =>
                                setField('payment_sum', event.target.value)
                            }
                        />
                    </Field>

                    <Field id="payment_status" label="payment_status">
                        <Select
                            value={form.payment_status}
                            onValueChange={(value) =>
                                setField('payment_status', value)
                            }
                        >
                            <SelectTrigger id="payment_status">
                                <SelectValue placeholder="payment status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {PAYMENT_STATUSES.map((status) => (
                                        <SelectItem key={status} value={status}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>

                    <Field id="currency" label="currency">
                        <Select
                            value={form.currency}
                            onValueChange={(value) =>
                                setField('currency', value)
                            }
                        >
                            <SelectTrigger id="currency">
                                <SelectValue placeholder="currency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {CURRENCIES.map((currency) => (
                                        <SelectItem
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                </CardContent>
            </Card>

            <Accordion type="single" collapsible>
                <AccordionItem value="extra-fields">
                    <AccordionTrigger>
                        Other lead fields (defaults, editable)
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-4 pt-2 md:grid-cols-2">
                            {EXTRA_FIELDS.map(({ key, label }) => (
                                <Field key={key} id={key} label={label}>
                                    <Input
                                        id={key}
                                        value={form[key]}
                                        onChange={(event) =>
                                            setField(key, event.target.value)
                                        }
                                    />
                                </Field>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {message ? (
                <p className="text-sm text-muted-foreground">{message}</p>
            ) : null}

            <div className="flex flex-wrap gap-3">
                <SubmitButton submittingText="Posting lead...">
                    Post lead
                </SubmitButton>
                <Button type="button" variant="outline" onClick={resetForm}>
                    Reset defaults
                </Button>
            </div>
        </form>
    )
}
