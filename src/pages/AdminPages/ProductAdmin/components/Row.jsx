import { Link } from "react-router-dom"

const Row = ({data,remoteProduct})=>{

    return<>
        {data?.results?.docs?.map((item) => {
    return<>
      <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
              <div class="flex-shrink-0 w-10 h-10">
                  <img src={item?.images[0]?.url} class="w-full h-full rounded-full"  alt="" />
              </div>
              <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                      {item.name}
                  </p>
              </div>
          </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{item.price}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
          {<div dangerouslySetInnerHTML={{ __html: item.desc ? item.desc : '' }} />}
          </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
         {item.createdAt}
          </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">
          {item.updatedAt}
          </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-[20px]">
         <button onClick={()=>remoteProduct(item._id)} className="bg-red-500 text-white rounded-lg p-[10px]">Xoá</button>
         <Link to={"/manage/update-product/"+item._id} className="bg-blue-500 text-white rounded-lg p-[10px]">Update</Link>
      </td>
  </tr>
    </>
        })}

    </>
}
export default Row