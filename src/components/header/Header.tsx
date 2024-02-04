import logo from "@/images/logo.png"
import Image from "next/image";
import cartIcon from "@/images/cartIcon.png"
import { BiCaretDown } from "react-icons/bi";
import { IoLocationSharp, IoSearchOutline } from "react-icons/io5";
import { store } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { addUser } from "@/store/nextSlice";
import Email from "next-auth/providers/email";

const Header = () => {
   const { data: session } = useSession()
   const { productData, favoriteData, userInfo } = useSelector(
      (state: StateProps) => state.next
   );
   const dispatch = useDispatch()
   useEffect(() => {
      if (session) {
         dispatch(addUser({
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image
         })
         );
      }
   }, [session]);

   return (
      <div className="w-full h-20 bg-amazon_blue text-white sticky top-0 z-50">
         <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
            {/* logo */}
            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[80%]">
               <Image className="w-24 object-cover my-1" src={logo} alt="Pochita_logo" />
            </div>
            {/* delivery */}
            <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[80%] hidden gap-1 xl:inline-flex">
               <IoLocationSharp className="mr-1" />
               <div className="text-xs">
                  <p>Deliver to</p>
                  <p className="text-white  font-bold uppercase">Peru</p>
               </div>

            </div>
            {/* searchbar */}
            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
               <input className="w-full h-full rounded-tl-md rounded-bl-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow" type="text" placeholder="Search products" />
               <span className="w-12 h-full bg-amazon_yellow justify-center flex items-center text-2xl absolut right-0 rounded-tr-md rounded-br-md">
                  <IoSearchOutline />
               </span>
            </div>
            {/* signin */}
            {userInfo ? (
               <div
                  className="text-xs text-gray-100 flex flex-col justify-center px-2 cursor-pointer"
               >
                 <img src={userInfo.image} alt="userImage"  className="w-10 h-10 rounded-full object-cover"/>
                  <div className="text-xs text-gray-100">
                     <p>{userInfo.name}</p>
                     <p>{userInfo.email}</p>
                  </div>
               </div>
            ) : (
               <div
               onClick={()=>signIn()}
                  className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer"
               >
                  <p> Hello, sign in</p>
                  <p className="text-white font-bold flex items-center">
                     Account & Lists{""}
                     <span>
                        <BiCaretDown />
                     </span>
                  </p>
               </div>)}
            {/* favorite*/}
            <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:white cursor-pointer duration-300 h-[70%] relative">
               <p>Marked</p>
               <p className="text-white font-bold">& Favorite</p>
               {
                  favoriteData.length > 0 && (
                     <span className="absolute right-1 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xd text-amazon_yellow rounded">
                        {favoriteData.length}
                     </span>
                  )
               }
            </div>
            {/* cart */}
            <Link
               href={"/cart"}
               className="flex items-center px-2 border border-transparent hover:border-white  cursor-pointer duration-300 h-[70%] relative">
               <Image className="w-auto object-cover h-8"
                  src={cartIcon}
                  alt="cartImg"
               />
               <p className="text-xs text-white font-bold mt-3"> Cart </p>
               <span className="absolute text-amazon_yellow text-xs top-2 left-[30px] font-s emibold" >
                  {productData ? productData.length : "0"}
               </span>
            </Link>
         </div>
      </div>
   )
};

export default Header;