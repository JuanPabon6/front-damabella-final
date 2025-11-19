import {createContext } from "react";
import type{ AuthContexType } from "../Utils/types/AuthContextType";

const AuthContext = createContext<AuthContexType | undefined> (undefined);

export default AuthContext


