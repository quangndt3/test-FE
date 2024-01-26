import instance from '.';
import { formProduct } from '../interface/product';
const uri = "/api/v1/product"
export const getAll =(page=1)=>{
  
    return instance.get(uri+"/list?_page="+page,);
}
export const removeProduct =(Product_id:string)=>{
    
    return instance.delete(uri+"/delete/"+Product_id);
}
export const addProduct =(product:formProduct)=>{
    
    return instance.post(uri+"/add/",product);
}
export const updateProduct =(product:formProduct)=>{ 
    return instance.patch(uri+"/update/"+product.id,product);
}
export const getOne =(_id:string)=>{
    
    return instance.get(uri+"/getone/"+_id,);
}