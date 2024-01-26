import instance from '.';
import { account } from '../interface/user';

export const logIn =(account:account)=>{
    const uri = "/api/user"
    return instance.post(uri+"/login",account);
}
export const signUp =(account:account)=>{
    const uri = "/api/user"
    return instance.post(uri+"/signup",account);
}