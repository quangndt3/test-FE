import instance from '.';

export const logIn =(account)=>{
    const uri = "/api/user"
    return instance.post(uri+"/login",account);
}
export const signUp =(account)=>{
    const uri = "/api/user"
    return instance.post(uri+"/signup",account);
}