import { useContext } from "react";
import  AuthContext  from "../Contexts/AuthContexts";

const UseAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("UseAuth must be used within an authprovider")
  }
}

export default UseAuth
