import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { LuPlus, LuMinus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/store/nextSlice";
interface Item {
   brand: string;
   category: string;
   image: string;
   isNew: boolean;
   oldPrice: number;
   price: number;
   title: string;
   _id: number;
   description: string;
   quantity: number;
}
interface cartProductsProps {
   item: Item
}
const CartProduct = ({ item }: cartProductsProps) => {
   const dispatch = useDispatch()
   return (
      <div className="bg-gray-100 rounded-lg flex items-center gap-4 ">
         <Image
            className="w-auto h-auto"
            width={150}
            height={150}
            src={item.image}
            alt="productImage"
         />
         <div className="flex items-center px-2 gap-4">
            <div className="flex flex-col gap-1">
               <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
               <p className="text-sm text-gray-600">{item.description}</p>
               <p>
                  Unit Price{" "}
                  <span className="font-semibold text-amazon_blue">
                     <FormattedPrice amount={item.price} />
                  </span>
               </p>
               <div className="flex items-center gap-6">
                  <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                     <span
                        onClick={() =>
                           dispatch(increaseQuantity(
                              {
                                 _id: item._id,
                                 brand: item.brand,
                                 category: item.category,
                                 image: item.image,
                                 description: item.description,
                                 isNew: item.isNew,
                                 oldPrice: item.oldPrice,
                                 title: item.title,
                                 price: item.price,
                                 quantity: 1,
                              }
                           )
                           )}>
                        <LuPlus />
                     </span>
                     <span className=" bg-slate-300 px-2 rounde border-x-amazon_blue">{item.quantity}</span>
                     <span onClick={() =>
                        dispatch(decreaseQuantity(
                           {
                              _id: item._id,
                              brand: item.brand,
                              category: item.category,
                              image: item.image,
                              description: item.description,
                              isNew: item.isNew,
                              oldPrice: item.oldPrice,
                              title: item.title,
                              price: item.price,
                              quantity: 1,
                           }
                        )
                        )}>
                        <LuMinus />
                     </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
                     onClick={() =>
                        dispatch(deleteProduct(
                           {
                              _id: item._id,
                              brand: item.brand,
                              category: item.category,
                              image: item.image,
                              description: item.description,
                              isNew: item.isNew,
                              oldPrice: item.oldPrice,
                              title: item.title,
                              price: item.price,
                              quantity: 1,
                           }
                        )
                        )}>
                     <IoMdClose className="text-xl mt-[2px]" />
                     <p> Remove </p>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <span className="font-semibold" >
               <FormattedPrice amount={item.price} />
            </span>
         </div>
      </div>
   );
};
export default CartProduct