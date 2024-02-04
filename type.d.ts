export interface ProductProps{
   brand: string;
   category: string;
   image:string;
   isNew:boolean;
   oldPrice:number;
   price:number;
   title:string;
   _id: number;
   description:string;
}
export interface StoreProduct{
   brand: string;
   category: string;
   image:string;
   isNew:boolean;
   oldPrice:number;
   price:number;
   title:string;
   _id: number;
   description:string;
   quantity: number;
}
export interface StateProps {
   productData: [];
   favoriteData:[];
   userInfo: null | string;
   next: any
}