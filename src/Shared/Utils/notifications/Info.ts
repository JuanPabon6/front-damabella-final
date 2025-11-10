import { toast } from "react-toastify";
import GlobalConfiguration from "./GlobalConfiguration";

export const InfoMessage = (message:string): void =>{
    toast.info(message, GlobalConfiguration)
}

export default InfoMessage