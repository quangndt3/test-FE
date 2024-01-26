import { useEffect, useState } from "react"
import Row from "./components/row"
import { getAll, removeProduct } from "../../../api/product"
import { Link } from "react-router-dom"
import { Pagination } from "antd"

const ProductAdmin = ()=>{
    const [products,setProducts] = useState([])
    
    const featchProducts = async ()=>{
        const {data} = await getAll()
        setProducts(data)
    }
    useEffect(()=>{
        featchProducts()
    },[])

    const handlePageChange = async (index)=>{
        const {data} = await getAll(index)
        setProducts(data)
    }
    const RemoveProduct =  async(_id)=>{
        const confirm = window.confirm('Bạn có chắc chắn muốn xoá sản phẩm này không ?')
       if(confirm) {
        await removeProduct(_id)
        await  featchProducts()
            handlePageChange(1)
        
       }

    }
    return<>

<body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div className="flex justify-between">
                <h2 class="text-2xl font-semibold leading-tight">Products</h2>
                <Link to="/manage/add-product" className="bg-blue-500 text-white p-[10px] rounded-lg">Thêm sản phẩm</Link>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Sản phẩm
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Giá
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Miêu tả
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Ngày Tạo
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Ngày Cập nhật
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Chức năng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          <Row data={products} remoteProduct={RemoveProduct}></Row>
    
                        </tbody>
                    </table>
                  
                </div>
            </div>
            <div>
            <Pagination pageSize={3} onChange={(current) => handlePageChange(current)}  defaultCurrent={products?.results?.page} total={products?.results?.totalDocs} />
            </div>
        </div>
    </div>
</body>
    </>
}
export default ProductAdmin