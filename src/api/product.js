import instance from '.';
const uri = "/api/v1/product"
export const getAll =(page=1)=>{
  
    return instance.get(uri+"/list?_page="+page,);
}
export const removeProduct =(Product_id)=>{
    
    return instance.delete(uri+"/delete/"+Product_id);
}
export const addProduct =(product)=>{
    
    return instance.post(uri+"/add/",product);
}
export const updateProduct =(product)=>{
    
    return instance.patch(uri+"/update/"+product.idProduct,product);
}
export const getOne =(_id)=>{
    
    return instance.get(uri+"/getone/"+_id,);
}