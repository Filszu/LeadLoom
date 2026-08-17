import supabase from '@/config/supaBaseClient';

import { IAdmitadLead } from '@/types';
import { convertToUsd } from '@/lib/constants/currencyRates';

function mapPaymentStatusToUserLeadStatus(paymentStatus?: string | null) {
    const status = (paymentStatus ?? '').toLowerCase();

    if (status === 'approved') return 'accepted';
    if (status === 'declined') return 'declined';
    return 'pending';
}

export default async function postUserLead({
    leadData,
    leadId,
}: {
    leadData: IAdmitadLead;
    leadId: number;
}) {
    const {
        offer_id,
        subid1,
        subid2,
        subid3,
        action,
        payment_status,
        payment_sum,
        currency: leadCurrency,
    } = {
        ...leadData,
    };
    const userLeadStatus = mapPaymentStatusToUserLeadStatus(payment_status);

    const userNickname = subid1;

    console.log("Posting User Lead" );
    // && subid === 'leadloom'
    if (userNickname && offer_id) {
        let { data: profiles, error } = await supabase
            .from('profiles')
            .select('id, nickname')
            .eq('nickname', userNickname)
            .limit(1);

        if (error || !profiles || profiles.length === 0) {
            console.error(error ?? 'no profiles');
            return null;
        }
        console.log('profiles', profiles);

        console.log(offer_id);
        let { data: programms, error: error2 } = await supabase
            .from('programms')
            .select('id, programID, steps, min_steps')
            .eq('admitadID', offer_id)
            .limit(1);

        if (error2 || !programms || programms.length === 0) {
            console.error(error2 ?? 'no programms');
            return null;
        }

        console.log('programms', programms);

        const programId = programms[0].id;
        const programIDName = programms[0].programID;
        const requiredSteps = programms[0].steps ?? programms[0].min_steps ?? 0;

        let { data: userLeads } = await supabase
            .from('userLeads')
            .select('id, programmId, created_at, stepName, leadName')
            .eq('userId', profiles[0].id)
            .order('created_at', { ascending: false });

        const programLeads =
            userLeads?.filter((userLead) => userLead.programmId === programId) ??
            [];

        const existingStepLead =
            action && programLeads
                ? programLeads.find((userLead) => userLead.stepName === action)
                : undefined;

        const sameLeadNameCount = programLeads.filter(
            (userLead) =>
                userLead.leadName === (subid3 ?? null) &&
                userLead.id !== existingStepLead?.id,
        ).length;
        const completedSteps = sameLeadNameCount + 1;
        const leadDescription = `${completedSteps}/${requiredSteps}`;

        const isExtraStep =
            requiredSteps > 0 &&
            !existingStepLead &&
            programLeads.length >= requiredSteps;

        const paymentSum = Number(payment_sum ?? 0) || 0;
        const value = isExtraStep
            ? 0
            : convertToUsd(paymentSum * 0.5, leadCurrency);
        const currency = 'USD';
        const status = isExtraStep ? 'declined' : userLeadStatus;

        if (existingStepLead) {
            const { data, error: updateError } = await supabase
                .from('userLeads')
                .update({
                    status: userLeadStatus,
                    leadName: subid3 ?? null,
                    stepName: action ?? null,
                    leadId,
                    description: leadDescription,
                    value,
                    currency,
                    user_value_points: value * 1000,
                })
                .eq('id', existingStepLead.id)
                .select();

            if (updateError) {
                console.error(updateError);
                return null;
            }
            console.log('updated userLead', data);
            return data;
        }

        const { data, error: insertError } = await supabase
            .from('userLeads')
            .insert([
                {
                    userId: profiles[0].id,
                    programmId: programms[0].id,
                    userRef1: subid1,
                    userRef2: subid2 ?? null,
                    status,
                    leadId: leadId,
                    currency,
                    value,
                    offer_name: programIDName ?? '',
                    description: leadDescription,
                    leadName: subid3 ?? null,
                    stepName: action ?? null,
                    user_value_points: value * 1000,

                },
            ]);

        if (insertError) {
            console.error(insertError);
            return null;
        }
        console.log('userLead', data);
        return data;
    }
}
