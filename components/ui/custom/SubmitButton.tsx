'use client'
import { Button } from '../button';
import LoadingIcon from './loadingIcon';
import { useFormStatus } from "react-dom";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnText: string | React.ReactNode;
    submittingText?: string;
    
};
const SubmitButton = (props: Props) => {
    const { pending } = useFormStatus();
    const { btnText, submittingText, ...buttonProps } = props;
    return (
        <Button
            type="submit"
            variant="outline"
            aria-disabled={pending}
            disabled={pending}
            // className="flex items-center"
            {...buttonProps} 
            
        >
            {pending&&<LoadingIcon  />}
            {pending ? props.submittingText : props.btnText}
        </Button>
    );
};

export default SubmitButton;
