import { toast } from "react-toastify";  
import GlobalConfiguration from "./GlobalConfiguration";

export const WarningMessage = (message:string): void =>{
    toast.warning(message, GlobalConfiguration)
}

export default WarningMessage