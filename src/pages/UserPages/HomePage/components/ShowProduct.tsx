
import { ConfigProvider, Rate, message } from 'antd';
import { useEffect, useState } from 'react';
import React from 'react';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../../interface/product';

type Props = {
   data : IProduct[]
}
const ShowProducts = ({ data }:Props) => {
   const [user, setUser] = useState({})
   useEffect(() => {
      setUser(localStorage.getItem('user'));
   }, [user])
   return (
      <div>
         <div className='list-products grid xl:grid-cols-3 pt-[30px] lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2  max-md:gap-[12px]'>
            {data?.map((item) => {
               return (
                  <>
                     <div className=' product-item md:p-[10px]  max-xl:mb-[18px]'>
                        <div className='product-wrap h-full overflow-hidden group/product-wrap rounded-[5px] relative flex flex-col justify-between   max-xl:pb-[40px]'>
                           <div className='wrap-product-img overflow-hidden xl:relative max-xl:text-center '>
                              <div className='xl:relative product-img  after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 bg-[#ffffff] after:opacity-0 after:invisible transition-all duration-300 group-hover/product-wrap:visible xl:group-hover/product-wrap:opacity-[0.4] max-xl:group-hover/product-wrap:opacity-[0.5] '>
                                 <img
                                    className='product-main-img text-center m-auto lg:!h-[350px] w-[full] md:!h-[270px] sm:!h-[290px] max-sm:h-[170px] rounded-[5px]  xl:group-hover/product-wrap:invisible  visible transition-all duration-300 opacity-100 object-cover object-center'
                                    src={item?.images[0]?.url}
                                    alt=''
                                 />
                                 <img
                                    className='product-sub-img text-center lg:!h-[350px] w-[full] md:h-[270px] sm:h-[290px] max-sm:h-[170px]  rounded-[5px] max-xl:hidden absolute group-hover/product-wrap:opacity-100 group-hover/product-wrap:visible transition-all duration-300 top-0 left-0 invisible opacity-0  object-cover object-center'
                                    src={item?.images[1]?.url}
                                    alt=''
                                 />
                              </div>
                              <div className='product-action max-xl:w-full max-xl:justify-center  transition-all duration-300 xl:invisible xl:opacity-0 flex absolute xl:bottom-[50%] bottom-0 xl:right-[50%] xl:translate-x-[50%] xl:gap-[15px]  max-xl:gap-[10px] group-hover/product-wrap:opacity-100 group-hover/product-wrap:visible'>
                                 <button
                                    className='add-to-card flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#51A55C] w-[40px] h-[40px] text-[20px] rounded-[100%] text-white bg-[#7aa32a]'
                                 >
                                    <HiOutlineShoppingBag></HiOutlineShoppingBag>
                                 </button>
                                 <button
                                    className='flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#51A55C] w-[40px] h-[40px] text-[20px] rounded-[100%] text-white bg-[#7aa32a]'
                                 >
                                    <AiOutlineEye></AiOutlineEye>
                                 </button>
                                 <button
                                    className='add-to-card flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-[#51A55C] w-[40px] h-[40px] text-[20px] rounded-[100%] text-white bg-[#7aa32a]'
                                 >
                                    <AiOutlineHeart></AiOutlineHeart>
                                 </button>
                              </div>
                           </div>
                           <Link
                              to={'/products/' + item._id}
                              onClick={() => {
                                 window.scrollTo(0, 0);
                              }}
                           >
                              <p className='product-name font-bold md:mt-[10px] text-center md:text-[18px] max-md:text-[16px] line-clamp-2 break-words hover:text-[#51A55C]'>
                                 {item?.name}

                              </p>
                           </Link>
                           <div className=''>
                              <div className='rate text-center '>
                                 <ConfigProvider
                                    theme={{
                                       token: {
                                          controlHeightLG: 34
                                       }
                                    }}
                                 >
                                    <Rate
                                       allowHalf
                                       disabled
                                       defaultValue={
                                          4
                                       }
                                    />
                                 </ConfigProvider>
                              </div>
                              <p className='price mt-[9px] flex items-center justify-center  text-center font-bold md:mb-[20px] max-md:mb-[10px] md:text-[18px]  text-[#7aa32a]'>
                                 {user != null ? (item.price).toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                 }) : "Liên hệ"}

                              </p>
                           </div>
                        </div>
                     </div>
                  </>
               );
            })}
         </div>
      </div>
   );
};

export default ShowProducts;
