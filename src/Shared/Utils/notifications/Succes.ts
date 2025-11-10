import { toast } from "react-toastify";
import GlobalConfiguration from "./GlobalConfiguration";

export const SuccesMessage = (message:string): void =>{
    toast.success(message, GlobalConfiguration)
}

export default SuccesMessage