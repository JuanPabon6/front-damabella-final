import type { User } from "./Usertype";

export interface AuthContexType {
    user : User | null
    login : (email:string, password:string) => Promise<boolean>;
    logout : () => void;
    updateProfile : (data : Partial<User>) => void;
    IsAuthenticated : boolean;
}