
import {  AiOutlineMenu } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { Link } from 'react-router-dom';

import { Badge, Popover } from 'antd';
import { GoHeart } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { showMenuReponsive } from '../../js/reponsive';

const Header = ()=>{
      const [user,setUser] = useState({})
      useEffect(()=>{
         setUser(JSON.parse(localStorage.getItem('user')));
      },[])
      const logout = ()=>{
         localStorage.removeItem("user")
         localStorage.removeItem("token")
         setUser({})
         window.location.href = "/"
      }

    return(
        <div className='main-header'>
        <header className='header  top-0 right-0 left-0 z-[5] transition-all duration-500 border-b-[1px] bg-white border-[#e2e2e2]  shadow-[0px_0px_10px_rgba(51,51,51,0.15)]'>
           <section className='mx-auto px-[30px] w-full relative max-w-[1520px] m-auto'>
              <div className='header-content flex items-center max-xl:justify-between  max-xl:h-[70px]'>
                 <div className='header-logo xl:w-[10%] max-xl:[w-auto] '>
                    <Link to='/'>
                       <img className='logo-img max-w-[100px] aspect-square' src={""} alt='' />
                    </Link>
                 </div>
                 <div
                    onClick={showMenuReponsive}
                    className='overlay-menu-homepage xl:hidden fixed w-[100%] top-0 bottom-0 left-0 right-0 z-[7] opacity-0 bg-[#333333]   invisible'
                 ></div>
                 <div className='header-menu max-xl:overflow-scroll  xl:w-[60%] max-xl:fixed  max-xl:transition-all max-xl:duration-500 max-xl:translate-x-[-100%]  max-xl:bottom-0 top-0 left-0 w-[320px] max-xl:z-[8] max-xl:bg-white'>
                    <ul className='main-menu  flex max-xl:flex  max-xl:flex-col'>
                       <li className='cursor-pointer main-menu-item text-[20px] flex justify-end xl:hidden  xl:py-[40px] xl:px-[15px] font-extrabold group  max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[10px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2]'>
                          <span onClick={showMenuReponsive} className='cursor-pointer'>
                             <FaXmark className='text-[20px]'></FaXmark>
                          </span>
                       </li>
                       <li
                          onClick={showMenuReponsive}
                          className=' cursor-pointer main-menu-item group/menu-item text-[17px] xl:py-[40px] xl:px-[15px] font-bold group  max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative'
                       >
                          <Link
                             to='/'
                             className='group-hover:text-[#51A55C] block after:content-[""] after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px] '
                          >
                             Trang chủ
                          </Link>
                       </li>
                         <li
                          onClick={showMenuReponsive}
                          className='cursor-pointer  main-menu-item text-[17px] xl:py-[40px] xl:px-[15px] font-bold group max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative group/menu-item'
                       >
                        
                        {user == null &&  
                          
                          <Link
                             to='/signup'
                             className='group-hover:text-[#51A55C] block after:content-[""] after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px]'
                          >
                            Đăng ký
                          </Link>
                        }
                          
                       </li>
                       <li
                          onClick={showMenuReponsive}
                          className='cursor-pointer  main-menu-item text-[17px] xl:py-[40px] xl:px-[15px] font-bold group max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative group/menu-item'
                       >
                        
                         {user == null &&  
                          
                           <Link
                             to='/login'
                             className='group-hover:text-[#51A55C] block after:content-[""] after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px]'
                          >
                            Đăng nhập
                          </Link>
                         }
                          
                       </li>
  
                    </ul>
                 </div>
                 <div className='header-icon xl:w-[25%]'>
                    <ul className='list-header-icon flex justify-end items-center'>
                       <li
                          onClick={showMenuReponsive}
                          className='header-icon-item header-search-icon text-[20px] ml-[30px] hidden max-xl:block transition-colors duration-300 cursor-pointer hover:text-[#d2401e]'
                       >
                          <AiOutlineMenu></AiOutlineMenu>
                       </li>

                          <>
                           
                             
                             {user != null && <>
                              <span className='text-[14px] mr-[10px]'>Chào <strong>{user.email}</strong></span>
                               <Popover className='flex items-center' content={<>
                              {user.role == "admin" &&  <Link to={"/manage"} className='flex items-center gap-[5px] py-[5px]'>
                                           Quản lý
                                       </Link>}
                              <button onClick={logout}  className='flex items-center gap-[5px] py-[5px]'>
                                           Đăng Xuất
                                       </button>
                                             
                             </>} > <li className='max-sm:hidden header-icon-item header-search-icon text-[20px]  transition-colors duration-300 cursor-pointer hover:text-[#d2401e]'>
                                <Popover
                                className=' text-center'
                                   placement='bottom'
                                   trigger='hover'
                                >   
                               
                                   <img
                                      src={"data:image/png;base64,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"}
                                      className='w-7  aspect-square m-0 rounded-full cursor-pointer'
                                   />
                                </Popover>
                             </li></Popover>
                             </>}
                                       
                          </>

                       <Badge className='max-sm:hidden' count={10} showZero={false}>
                          <li className='max-sm:hidden header-icon-item header-search-icon  ml-[30px] relative transition-colors duration-300    '>
                             <Link
                                to='/wishList'
                                className='text-black text-[20px] font-thin cursor-pointer hover:text-[#d2401e]'
                             >
                                <GoHeart />
                             </Link>
                          </li>
                       </Badge>
                       <Badge className='max-sm:hidden' count={10} showZero={false}>
                          <li
                             className='max-sm:hidden header-icon-item header-search-icon text-[20px] ml-[30px] relative transition-colors duration-300 cursor-pointer hover:text-[#d2401e]   '
                          >
                             <HiOutlineShoppingBag></HiOutlineShoppingBag>
                          </li>
                       </Badge>
                      
                      
                    </ul>
                 </div>
              </div>
           </section>
        </header>
     </div>
    )
}
export default Header