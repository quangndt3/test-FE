export interface IProduct{
    _id: string;
    name: string,
    desc: string,
    price: number,
    images:img[],
    createdAt: string,
    updatedAt: string,
}
export type img={
    url:string,
    public_id:string
}
export type productResponseGetAll={
    results:{
        docs:IProduct[]
        totalDocs:number,
        limit:number,
        totalPages:number,
        page:number
    }
} 