import { IoIosRocket } from "react-icons/io";
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
 
interface AlertBoxProps {
    title: string,
    message: string | React.ReactNode,
    }

export function AlertBox(props: AlertBoxProps) {
  return (
    <Alert variant={"primary"}>
      <IoIosRocket className="h-6 w-6" />
      <AlertTitle>{props.title}</AlertTitle>
      <AlertDescription>
        {props.message}
      </AlertDescription>
    </Alert>
  )
}