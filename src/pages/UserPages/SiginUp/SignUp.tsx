import { useEffect, useState } from 'react';
import {  message } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  signUp } from '../../../api/user';
import { account } from '../../../interface/user';

const SignUpPage = () => {
   const [email, setEmail] = useState<string>('');
   const [password, setpassword] = useState<string>('');
   const [repassword,setRepassword] = useState<string>('');
   const [messageApi, contextHolder] = message.useMessage();
   const ApiSignUp = async (account:account)=>{
    const {data} = await signUp(account)
    return data
}
const navigate = useNavigate()
useEffect(()=>{
 const user =  localStorage.getItem('user')
 if(user){
navigate("/")
 }
})
   const onFinish = async () => {

      try {
        if(repassword!=password){
            messageApi.open({
                type: 'error',
                content: "Xác nhận mật khẩu không đúng !",
              });  
              return
        }
        const account = {
            email:email,
            password:password
        }
        const {data,accessToken} = await ApiSignUp(account)
         messageApi.open({
            type: 'success',
            content: 'Đăng Ký thành công',
          }); 
           localStorage.setItem('user',JSON.stringify(data))
           localStorage.setItem('token',JSON.stringify(accessToken))
           window.location.href = "/"
      } catch (error) {
        messageApi.open({
            type: 'error',
            content: error.response?.data.message,
          });   
      }
   };
   return (
      <>
        {contextHolder}
         <div className='main'>
            <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
               <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
                  <span>
                     <Link to={'/'}>Trang chủ </Link> / Đăng Ký
                  </span>
               </div>
            </section>
            <section className='section-login lg:py-[100px] md:py-[80px] max-md:py-[60px]'>
               <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] '>
                  <div className='login-header text-center md:mb-[50px] max-md:mb-[30px]'>
                     <span className='login-title text-[#333333] sm:text-[30px] max-sm:text-[24px] font-bold'>
                        Đăng ký tài khoản
                     </span>
                     <p className='login-sub-title mt-[18px]'>Vui lòng điền thông tin tài khoản</p>
                  </div>
                  <div className='login-content xl:w-[50%] lg:w-[60%] md:w-[70%] max-md:w-[100%] m-auto'>
                     <form action='' className='login-form'>
                        <div className='login-mail mt-[25px]'>
                           <label htmlFor='mail' className='block cursor-pointer mb-[10px]'>
                              Email
                           </label>
                           <input
                              className='input-mail w-full outline-none bg-[#f7f7f7] rounded-[5px] px-[15px] py-[10px] border-[#e2e2e2] border-[1px] placeholder:text-[#6f6f6f]'
                              placeholder='Vui lòng nhập Email'
                              value={email}
                              id='mail'
                              type='text'
                              onChange={(e) => {
                                 setEmail(e.target.value);
                              }}
                           />
                        </div>
                        <div className='login-password mt-[25px]'>
                           <label htmlFor='password' className='block cursor-pointer mb-[10px]'>
                              Mật khẩu
                           </label>
                           <input
                              className='input-password w-full outline-none bg-[#f7f7f7] rounded-[5px] px-[15px] py-[10px] border-[#e2e2e2] border-[1px]  placeholder:text-[#6f6f6f]'
                              placeholder='Vui lòng nhập Mật khẩu'
                              value={password}
                              id='password'
                              type='password'
                              onChange={(e) => {
                                 setpassword(e.target.value.trim());
                              }}
                           />
                        </div>
                        <div className='login-password mt-[25px]'>
                           <label htmlFor='password' className='block cursor-pointer mb-[10px]'>
                             Xác nhận mật khẩu
                           </label>
                           <input
                              className='input-password w-full outline-none bg-[#f7f7f7] rounded-[5px] px-[15px] py-[10px] border-[#e2e2e2] border-[1px]  placeholder:text-[#6f6f6f]'
                              placeholder='Vui lòng nhập Mật khẩu'
                              value={repassword}
                              id='repassword'
                              type='password'
                              onChange={(e) => {
                                 setRepassword(e.target.value.trim());
                              }}
                           />
                        </div>
                        <div className='action-btn flex items-center justify-between sm:mt-[30px] max-sm:mt-[20px] gap-2 gap-y-[20px]'>
                           <button
                              type='button'
                              onClick={onFinish}
                              className='w-[100%] text-white bg-[#333333] text-center px-[40px] py-[15px] rounded-[5px] font-bold transition-colors duration-300 hover:bg-[#51A55C] '
                           >
                              Đăng ký
                           </button>
                        </div>
                       
                        
                     </form>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};
export default SignUpPage;
