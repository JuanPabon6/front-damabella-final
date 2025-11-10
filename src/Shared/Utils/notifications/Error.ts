import { toast } from "react-toastify";
import GlobalConfiguration from "./GlobalConfiguration"

export const ErrorMessage = (message:string): void=>{
    toast.error(message,GlobalConfiguration)
}

export default ErrorMessage