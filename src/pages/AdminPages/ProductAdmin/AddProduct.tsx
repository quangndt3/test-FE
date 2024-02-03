import { Divider, Form, Input, Radio, Space, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import UploadButton from './components/UploadButton';
import React, { useState } from 'react';
import { uploadImages } from '../../../api/upload';
import BlockForm from './components/BlockForm';
import TextQuill from './components/TextQuill';
import HeadForm from '../../../components/HeadForm/HeadForm';
import { addProduct } from '../../../api/product';
import Loading from '../../../components/loading/loading';




const AddProduct = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const [files, setFiles] = useState<File[]>([]);
   const [name, setName] = useState<string>('');
   const [productPrice, setProductPrice] = useState<number>();
   const [form] = Form.useForm();
   const navigate = useNavigate();
   const handleGetFiles = (files:File[]) => {
      form.setFieldValue('images', files);
      setFiles(files);
   };
   const handleSubmit = async () => {
      try {
         setLoading(true);
         const {
            data: { body }
         } = await uploadImages(files);
         form.setFieldValue('images', body.data);
         const newFormData = form.getFieldsValue(true);
         await addProduct(newFormData).then(res=>{
            res
            navigate('/manage');
            message.success("Thêm sản phẩn thành công!");
         })
         setLoading(false);
      } catch (error) {
         setLoading(false);
         console.log(error);
      }
   };
   if (loading) return <Loading sreenSize='lg' />;
   return (
      <>

         <Form className='w-[100%] mt-20 pb-10' form={form} onFinish={handleSubmit} layout='vertical'>
            <HeadForm
               placeHolder='Sản phẩm không tên'
               linkBack='/manage/products'
               changeValue={(value) => setName(value)}
               initValue={name}
            />
            <div className='w-full mt-5 flex flex-wrap gap-5'>
               <div className='xl:min-w-[800px] flex flex-col gap-5 w-full'>
                  <BlockForm title='Hình ảnh sản phẩm'>
                     <Form.Item
                        name='images'
                        hasFeedback
                        rules={[{ required: true, message: 'Vui lòng tải ảnh lên !' }]}
                     >
                        <UploadButton maxCount={4} multiple listStyle='picture-card' getListFiles={handleGetFiles} />
                     </Form.Item>
                  </BlockForm>
                  <BlockForm title='Thông tin sản phẩm'>
                     <Space size={'middle'} direction='vertical' className='w-full'>
                        <p className='text-xl font-thin tracking-wider'>Thông tin cơ bản</p>
                        <Space direction='horizontal' className='w-full'>
                           <Form.Item
                              className='w-[500px]'
                              name={'name'}
                              label={<p className='text-lg font-semibold'>Tên sản phẩm</p>}
                              rules={[{ required: true, message: 'Vui lòng điền tên sản phẩm !' }]}
                              hasFeedback
                           >
                              <Input
                                 placeholder='Thêm tên sản phẩm'
                                 className='w-full p-2'
                                 value={name}
                                 onChange={(e) => setName(e.target.value)}
                              />
                           </Form.Item>
                        </Space>
                        <Form.Item
                           name={'desc'}
                           label={<p className='text-lg font-semibold'>Mô tả</p>}
                           rules={[{ required: true, message: 'Vui lòng điền mô tả sản phẩm !' }]}
                        >
                           <TextQuill getValue={(value) => form.setFieldValue('desc', value)} />
                        </Form.Item>
                     </Space>
                  </BlockForm>
                  <BlockForm title=''>
                     <Space direction='vertical' className='w-full'>
                        <div className='w-full xl:flex justify-start items-center gap-2'>
                           <Form.Item
                              className='w-full'
                              name={'price'}
                              label={<p className='text-lg font-semibold'>Giá bán</p>}
                              hasFeedback
                              rules={[{ required: true, message: 'Vui lòng điền giá sản phẩm !' }]}
                           >
                              <Input
                                 type='number'
                                 placeholder='Thêm giá bán sản phẩm'
                                 className=' p-2'
                                 min={0}
                            
                                 value={productPrice}
                                 onChange={(e) => setProductPrice(Number(e.target.value))}
                              />
                           </Form.Item>
                        </div>
                     </Space>
                  </BlockForm>
               </div>
            </div>
            <Divider />
            <div className='flex justify-end items-center gap-5 pb-[50px]'>
               <Link to={'/manage/products'}>
                  <button
                     type='button'
                     className='border-[1px] border-[#80b235] text-greenPrimary py-2 px-5 rounded-xl font-semibold text-[1rem] hover:bg-greenPrimary duration-200 hover:text-white'
                  >
                     Hủy
                  </button>
               </Link>
               <Form.Item className='flex flex-col items-center !mb-0'>
                  <button
                     className='!bg-greenPrimary !text-white py-2 px-5 rounded-xl font-semibold text-[1rem]'
                     type='submit'
                  >
                     Lưu
                  </button>
               </Form.Item>
            </div>
         </Form>
      </>
   );
};

export default AddProduct;
