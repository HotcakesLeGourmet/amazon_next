import * as i from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { signOut } from "next-auth/react";
import { removeUser } from "@/store/nextSlice";

const BottomHeader = () => {
   const dispatch = useDispatch()
   const { userInfo } = useSelector((state: StateProps) => state.next)
   const handleSignOut = () => {
      signOut();
      dispatch(removeUser(userInfo))
   }
   return (
      <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
         <p className="flex items-center gap-1 h-8 border border-transparent">
            <i.LuMenu /> All
         </p>
         <p className="bt-hd-span">
            Todays Deals
         </p>
         <p className="bt-hd-span">
            Custome Service
         </p>
         <p className="bt-hd-span">
            Registry
         </p>
         <p className="bt-hd-span">
            Gift Cards
         </p>
         <p className="bt-hd-span">
            Sell
         </p>
         {userInfo && (<button
            onClick={() => handleSignOut()}
            className="bt-hd-span hover:border-red-600 text-amazon_yellow">
            Sign Out
         </button>)}

      </div>

   )
};

export default BottomHeader;