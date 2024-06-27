'use client'
import { Button } from '../button';
import LoadingIcon from './loadingIcon';
import {useFormStatus } from "react-dom";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // btnText: string | React.ReactNode;
    submittingText?: string | React.ReactNode;
    children: React.ReactNode;
    
};
const SubmitButton = (props: Props) => {
    const { pending } = useFormStatus();
    const { children, submittingText, ...buttonProps } = props;
    console.log(submittingText)
    
    return (
        <Button
            type="submit"
            // variant="outline"
            aria-disabled={pending}
            disabled={pending}
            // className="flex items-center"
            {...buttonProps} 
            
        >
            {pending&&<LoadingIcon  />}
            {/* {pending ? props.submittingText : props.children} */}
            {pending&&submittingText!=undefined ? submittingText : children}
            
        </Button>
    );
};

export default SubmitButton;
