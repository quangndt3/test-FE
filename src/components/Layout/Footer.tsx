import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { BiStore } from 'react-icons/bi';
import { HiOutlineShoppingBag, HiOutlineTrash } from 'react-icons/hi2';
import { FaXmark } from 'react-icons/fa6';
import { FaArrowUp, FaPlus, FaWindowMinimize, FaInstagram } from 'react-icons/fa';
import { FiHeadphones, FiLogIn } from 'react-icons/fi';
import React from 'react';
import { Link} from 'react-router-dom';

import { Badge } from 'antd';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { showSudMenuFooter, showUserTag, toTop } from '../../js/reponsive';

const Footer = ()=>{




    return   <>
    <footer className='bg-[#f8f8f8] '>
       <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px]'>
          <ul className='footer-list flex py-[60px] flex-wrap ml-[-30px]'>
             <li className='footer-if  w-full lg:w-[calc(35%-30px)] ml-[30px]'>
                <div className='logo-ft '>
                   <img className='max-w-[120px]' src="" alt='logo' />
                </div>
                <div className='footer-if-text leading-7 '>
                   <p>
                      <br />
                      <span>
                         Địa chỉ: Lô A2, CN5, Cụm Công nghiệp Từ Liêm, Phường Phương Canh, Quận Nam Từ Liêm, Thành
                         phố Hà Nội, Việt Nam.
                      </span>
                   </p>
                </div>
                <div className='call-line mt-[30px] flex items-center'>
                   <div className='call-icon mr-[15px] text-[50px] text-[#51A55C]'>
                      <FiHeadphones ></FiHeadphones>
                   </div>
                   <div className='call-if'>
                      <p className='call-title text-[#333333] text-[20px] font-bold'>Số HOTLINE:</p>
                      <span className='call-phonenumber text-[16px]'>0888 888 888</span>
                   </div>
                </div>
             </li>
             <li className='footer-if ft-cate list-link ml-[30px] transition-all duration-500  lg:w-[calc(21%-30px)] w-full max-lg:mt-[15px] max-lg:h-[51px]  overflow-hidden max-lg:pb-[10px]'>
                <div className='ft-title  font-bold text-[#6F6F6F] text-[18px] relative max-lg:mb-[30px] '>
                   Danh mục
                   <button
                      onClick={() => showSudMenuFooter('.ft-cate', '.icon-1-ft-cate', '.icon-2-ft-cate')}
                      className='lg:hidden border-b-[1px]  border-[#e2e2e2] w-full h-full pb-[40px] absolute top-0 left-0  cursor-pointer'
                      type='button'
                   >
                      <FaPlus className=' icon-1-ft-cate absolute right-0 top-[8px] text-[12px] '></FaPlus>
                      <FaWindowMinimize className='hidden icon-2-ft-cate absolute right-0 top-[4px] text-[12px]'></FaWindowMinimize>
                   </button>
                </div>

             </li>
             <li className='footer-if list-link ft-policy ml-[30px] transition-all duration-500  lg:w-[calc(21%-30px)] w-full max-lg:mt-[15px] max-lg:h-[45px]  overflow-hidden max-lg:pb-[10px]'>
                <div className='ft-title font-bold text-[#6F6F6F] text-[18px] relative'>
                   Chính sách và dịch vụ
                   <button
                      onClick={() => showSudMenuFooter('.ft-policy', '.icon-1-ft-policy', '.icon-2-ft-policy')}
                      className='lg:hidden border-b-[1px]  border-[#e2e2e2] w-full h-full pb-[40px] absolute top-0 left-0  cursor-pointer'
                      type='button'
                   >
                      <FaPlus className=' icon-1-ft-policy absolute right-0 top-[8px] text-[12px] '></FaPlus>
                      <FaWindowMinimize className='hidden icon-2-ft-policy absolute right-0 top-[4px] text-[12px]'></FaWindowMinimize>
                   </button>
                </div>

                <ul className='ft-sublist'>
                   <li className='text-[16px] mt-[15px] hover:text-[#51A55C] transition-colors duration-300'>
                      <a href='#'>Chính sách bảo mật</a>
                   </li>
                   <li className='text-[16px] mt-[15px] hover:text-[#51A55C] transition-colors duration-300'>
                      <a href='#'>Chính sách hoàn trả</a>
                   </li>
                   <li className='text-[16px] mt-[15px] hover:text-[#51A55C] transition-colors duration-300'>
                      <a href='#'>Điều khoản & Điều kiện</a>
                   </li>
                   <li className='text-[16px] mt-[15px] hover:text-[#51A55C] transition-colors duration-300'>
                      <a href='#'>Chăm sóc khách hàng</a>
                   </li>
                   <li className='text-[16px] mt-[15px] hover:text-[#51A55C] transition-colors duration-300'>
                      <a href='#'>Danh sách yêu thích</a>
                   </li>
                </ul>
             </li>
             <li className='footer-if list-link-instar ml-[30px] w-full lg:w-[calc(23%-30px)] max-lg:mt-[20px] '>
                <div className='ft-title font-bold text-[#6F6F6F] text-[18px] mb-[5px] relative'>
                   Theo dõi trên instagram
                </div>
                <div className='list-img flex flex-wrap'>
                   <div className='list-img-item relative mr-[15px] mt-[15px] h-[calc(50%-15px)] w-[calc(33%-15px)]  object-cover '>
                      <Link
                         to={'#'}
                         className='ft-img-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[5px] bg-[#00000033] h-full absolute top-0 left-0 right-0 flex items-center justify-center'
                      >
                         <FaInstagram className='text-white text-[18px]'></FaInstagram>
                      </Link>
                      <img
                         className='w-full h-full rounded-[5px]'
                         src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/footer/f-1.jpg'
                         alt=''
                      />
                   </div>
                   <div className='list-img-item relative mr-[15px] mt-[15px] h-[calc(50%-15px)]  w-[calc(33%-15px)] object-cover '>
                      <Link
                         to={'#'}
                         className='ft-img-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[5px] bg-[#00000033] h-full absolute top-0 left-0 right-0 flex items-center justify-center'
                      >
                         <FaInstagram className='text-white text-[18px]'></FaInstagram>
                      </Link>
                      <img
                         className='w-full h-full rounded-[5px]'
                         src='	https://spacingtech.com/html/tm/freozy/freezy-ltr/image/footer/f-2.jpg'
                         alt=''
                      />
                   </div>
                   <div className='list-img-item relative mr-[15px] mt-[15px] h-[calc(50%-15px)] w-[calc(33%-15px)] object-cover '>
                      <Link
                         to={'#'}
                         className='ft-img-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[5px] bg-[#00000033] h-full absolute top-0 left-0 right-0 flex items-center justify-center'
                      >
                         <FaInstagram className='text-white text-[18px]'></FaInstagram>
                      </Link>
                      <img
                         className='w-full h-full rounded-[5px]'
                         src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/footer/f-3.jpg'
                         alt=''
                      />
                   </div>
                   <div className='list-img-item relative mr-[15px] mt-[15px] h-[calc(50%-15px)] w-[calc(33%-15px)]  object-cover '>
                      <Link
                         to={'#'}
                         className='ft-img-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[5px] bg-[#00000033] h-full absolute top-0 left-0 right-0 flex items-center justify-center'
                      >
                         <FaInstagram className='text-white text-[18px]'></FaInstagram>
                      </Link>
                      <img
                         className='w-full h-full rounded-[5px]'
                         src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/footer/f-4.jpg'
                         alt=''
                      />
                   </div>
                   <div className='list-img-item relative mr-[15px] mt-[15px] h-[calc(50%-15px)]  w-[calc(33%-15px)] object-cover '>
                      <Link
                         to={'#'}
                         className='ft-img-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[5px] bg-[#00000033] h-full absolute top-0 left-0 right-0 flex items-center justify-center'
                      >
                         <FaInstagram className='text-white text-[18px]'></FaInstagram>
                      </Link>
                      <img
                         className='w-full h-full rounded-[5px]'
                         src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/footer/f-5.jpg'
                         alt=''
                      />
                   </div>
                   <div className='list-img-item relative mr-[15px] mt-[15px] h-[calc(50%-15px)] w-[calc(33%-15px)] object-cover '>
                      <Link
                         to={'#'}
                         className='ft-img-overlay opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[5px] bg-[#00000033] h-full absolute top-0 left-0 right-0 flex items-center justify-center'
                      >
                         <FaInstagram className='text-white text-[18px]'></FaInstagram>
                      </Link>
                      <img
                         className='w-full h-full rounded-[5px]'
                         src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/footer/f-6.jpg'
                         alt=''
                      />
                   </div>
                </div>
             </li>
          </ul>
       </div>
    </footer>
    <section className='section-search-modal translate-y-[-100%] transition-all duration-300  hidden fixed top-0 left-0 right-0  py-[30px] bg-white z-[7] '>
       <div className='container mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px]'>
          <div className='search-modal-content '>
             <div className='text-right'>
                <button
                   // onClick={closeModalSearch}
                   type='button'
                   className='close-modal-search text-[20px] text-[#6f6f6f]'
                >
                   <FaXmark></FaXmark>
                </button>
             </div>
             <form className='form-search relative' action=''>
                <input
                   className='w-full outline-none border-b-[1px] border-[#e2e2e2] py-[10px] text-[#6f6f6f]'
                   type='text'
                   placeholder='Tìm kiếm sản phẩm...'
                />
                <button className='absolute right-0 translate-y-[50%] bottom-[50%]'>
                   <SearchOutlined className='text-[20px] text-[#6f6f6f]'></SearchOutlined>
                </button>
             </form>
          </div>
       </div>
    </section>

    <section className='section-mobile-menu max-sm:block hidden  '>
       <div className='mobile-menu-content  pt-[10px] z-[4] flex justify-between fixed bottom-0 left-0 right-0 rounded-t-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  bg-white'>
          <div className='mobile-menu-item text-[#939596] p-[5px] text-center flex items-end justify-center w-[20%] '>
             <Link to='/'>
                <BiStore className='m-auto' style={{ fontSize: '24px' }} />
                <p className='  text-[10px] sm:text-[12px]'>Trang chủ</p>
             </Link>
          </div>

          <div
             className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%] flex flex-col'
          >
             <div className='test relative w-[24px] h-[24px] m-auto '>
                <HiOutlineShoppingBag style={{ fontSize: '24px' }} />
                <Badge
                   count={10}
                   showZero={false}
                   className='custom-badge    text-[9px]  right-[2px] top-[4px] absolute text-white'
                >
                   <li
                      className='max-sm:hidden header-icon-item header-search-icon text-[20px] flex flex-col ml-[30px] relative transition-colors  duration-300 cursor-pointer hover:text-[#d2401e]   '
                   >
                      <HiOutlineShoppingBag></HiOutlineShoppingBag>
                   </li>
                </Badge>
             </div>
             <p className=' text-[10px] mt-[2px] sm:text-[12px]'>Giỏ hàng</p>
          </div>
          <div onClick={showUserTag} className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%] '>
             <UserOutlined style={{ fontSize: '24px' }} />
             <p className='  text-[10px] sm:text-[12px]'>Tài khoản</p>
          </div>
       </div>
    </section>
    <section className=' section-icon-to-top transition-all duration-300 fixed bottom-[180px] right-[30px] cursor-pointer z-[4] invisible opacity-0'>
       <div
          onClick={toTop}
          className='to-top-content  transition-all duration-300 hover:bg-white hover:text-[#d2401e] text-white text-[16px] h-[40px] w-[40px] bg-[#d2401e] rounded-[5px] flex items-center justify-center shadow-[0px_0px_10px_rgba(51,51,51,0.15)]'
       >
          <FaArrowUp></FaArrowUp>
       </div>
    </section>
    <section className='user-tag-moble w-[320px]'>
       <div
          onClick={showUserTag}
          className='overlay-user-tag-mobile xl:hidden fixed w-[100%] top-0 bottom-0 left-0 right-0 z-[7] opacity-0 bg-[#333333]   invisible'
       ></div>
       <div className='user-tag-mobile-content transition duration-300 fixed top-0 left-0 h-full bg-white z-[8] min-w-[320px] translate-x-[-100%]'>
          <ul>
             <li className='px-[15px] py-[10px] flex justify-end'>
                <span onClick={showUserTag} className='cursor-pointer text-center'>
                   <FaXmark className='text-[20px]'></FaXmark>
                </span>
             </li>
            
          
                   <li onClick={showUserTag} className='px-[15px] py-[10px] hover:bg-[#51A55C] hover:text-white'>
                      <Link to='/' className='flex items-center gap-[5px] py-[5px]'>
                         Trang chủ
                      </Link>
                   </li>
                   <li onClick={showUserTag} className='px-[15px] py-[10px] hover:bg-[#51A55C] hover:text-white'>
                      <Link to={'/signup'} className='flex items-center gap-[5px] py-[5px]'>
                         <AiOutlineUserAdd></AiOutlineUserAdd> Đăng ký
                      </Link>
                   </li>
                   <li onClick={showUserTag} className='px-[15px] py-[10px] hover:bg-[#51A55C] hover:text-white'>
                      <Link to={'/login'} className='flex items-center gap-[5px] py-[5px]'>
                         <FiLogIn></FiLogIn> Đăng nhập
                      </Link>
                   </li>
                
          </ul>
       </div>
    </section>

 </>
}
export default Footer