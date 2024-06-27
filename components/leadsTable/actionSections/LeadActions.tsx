import { Button } from '@/components/ui/button';
import SubmitButton from '@/components/ui/custom/SubmitButton';
import updateUserLeads from '@/lib/dbOperations/putUserLeads';
import React from 'react';

type Props = {
    leadId: string;
};

const LeadActions = (props: Props) => {
    async function handleSubmit(status: string) {
        // console.log(status);
        // console.log(props.leadId, status);
        await updateUserLeads({
            leadId: props.leadId,
            updates: { status: status },
        });
    }
    return (
        <section className="flex gap-1">
            <form
                action={() => (handleSubmit)}
                //   onSubmit={(e) => {e.preventDefault();}}
                className="flex gap-1"
            >
                <Button
                    variant="outline"
                    className="bg-green-500 text-white"
                    type="button"
                    onClick={() => handleSubmit('accepted')}
                >
                    Approve
                </Button>
                <Button
                    variant="outline"
                    className="bg-red-500 text-white"
                    type="button"
                    onClick={() => handleSubmit('declined')}
                >
                    Decline
                </Button>
                <Button
                    variant="outline"
                    className="bg-yellow-500 text-white"
                    type="button"
                    onClick={() => handleSubmit('pending')}
                >
                    Pending
                </Button>
                <Button
                    variant="outline"
                    className="bg-blue-500 text-white"
                    type="button"
                    onClick={() => console.log('Edit button clicked')}
                >
                    Edit
                </Button>
                <Button
                    variant="outline"
                    className="bg-purple-500 text-white"
                    type="button"
                    onClick={() => handleSubmit('paidout')}
                >
                    Paid Out
                </Button>
                
                {props.leadId}
            </form>
        </section>
    );
};

export default LeadActions;
