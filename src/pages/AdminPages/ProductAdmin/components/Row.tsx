import { Link } from "react-router-dom"
import React from 'react';
import { IProduct } from "../../../../interface/product";
type Props = {
    data:IProduct[]
    removeProduct: (_id: string) => void;
 };
const Row = ({data,removeProduct}:Props)=>{

    return<>
        {data?.map((item) => {
    return<>
      <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                  <img src={item?.images[0]?.url} className="w-full h-full rounded-full"  alt="" />
              </div>
              <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">
                      {item.name}
                  </p>
              </div>
          </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{item.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
          {<div dangerouslySetInnerHTML={{ __html: item.desc ? item.desc : '' }} />}
          </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
         {item.createdAt}
          </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
          {item.updatedAt}
          </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-[20px]">
         <button onClick={()=>removeProduct(item._id)} className="bg-red-500 text-white rounded-lg p-[10px]">Xoá</button>
         <Link to={"/manage/update-product/"+item._id} className="bg-blue-500 text-white rounded-lg p-[10px]">Update</Link>
      </td>
  </tr>
    </>
        })}

    </>
}
export default Row