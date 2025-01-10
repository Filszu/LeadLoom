import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge, badgeVariants } from '@/components/ui/badge';

interface Props {
    // variant?: typeof badgeVariants;
    variant?: "default" | "secondary" | "destructive" | "outline" | "warning";
  
    tooltipContent?: string | React.ReactNode;
    tooltipText?: string | React.ReactNode;
}

const TooltipBadge = (props: Props) => {

    const { variant, tooltipContent, tooltipText } = props;

    return (
        <TooltipProvider>
            <Tooltip >
                <TooltipTrigger>
                    <Badge variant={variant??"default"}>{tooltipText}</Badge>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltipContent}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipBadge;
