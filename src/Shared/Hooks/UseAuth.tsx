import { useContext } from "react";
import  AuthContext  from "../Contexts/AuthContexts";
import type { AuthContexType } from "../Utils/types/AuthContextType";

const UseAuth = (): AuthContexType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("UseAuth must be used within an authprovider")
  }

  return context;
}

export default UseAuth
