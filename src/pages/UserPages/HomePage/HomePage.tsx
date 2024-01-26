import {  useEffect, useState } from "react"
import { getAll } from "../../../api/product"
import React from 'react';
import ShowProducts from "./components/ShowProduct"
import { ConfigProvider, Pagination } from "antd"
import { productResponseGetAll } from "../../../interface/product";

const HomePage = () => {
   const [products, setProducts] = useState<productResponseGetAll>()
   const featchProducts = async () => {
      const { data } = await getAll()
      setProducts(data)
   }
   useEffect(() => {
      featchProducts()
   }, [])
   const handlePageChange = async (index:number) => {
      const { data } = await getAll(index)
      setProducts(data)
   }

   return <>

      <section className='section-main lg:pb-[100px] md:pb-[80px] max-md:pb-[60px] border-b-[1px] border-[#e2e2e2]'>

         <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>

            <div className='main-header-overlay lg:!hidden fixed hidden z-[10] left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)]'></div>
            <div className=' px-[20px] max-md:px-0 main-content max-border-l-2 border-[#cccccc]   w-[100%]  '>
               <span>tài khoàn admin: quangndt7@gmail.com
                  <br />
                  mật khẩu: 123456
               </span>
               <div className='product-item mb-[30px]'>
                  {products?.results?.docs?.length ? (
                     <ShowProducts data={products.results?.docs} />
                  ) : (
                     <div className='text-center text-red-500 text-[20px] font-bold'>
                        Không có sản phẩm nào phù hợp
                     </div>
                  )}
               </div>
               <div>

               </div>
               {products?.results?.docs.length ? (
                  <div className='pagination flex justify-center max-sm:!mb-[10px] mb-[35px]'>
                     <ConfigProvider
                        theme={{
                           components: {
                              Pagination: {
                                 itemBg: '#51A55C',
                                 itemSize: 40,

                                 itemActiveBg: '#51A55C',
                                 colorTextPlaceholder: 'rgb(255, 99, 71)',
                                 colorPrimary: '#FFFFFF',
                                 colorPrimaryHover: '#FFFFFF'
                              }
                           }
                        }}
                     >
                        <Pagination pageSize={products?.results?.limit} onChange={(current) => handlePageChange(current)} defaultCurrent={products?.results?.page} total={products?.results?.totalDocs} />
                     </ConfigProvider>
                  </div>
               ) : (
                  ''
               )}
            </div>
         </div>
      </section>
   </>
}
export default HomePage