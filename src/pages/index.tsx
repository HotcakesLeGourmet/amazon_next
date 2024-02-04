import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";
import CartPage from "./cart";

interface Props {
   productData: ProductProps
}

export default function Home({ productData }: Props) {
   return (
      <main>
         <div className="max-w-screen-2xl mx-dauto">
            <Banner />

            <CartPage />
            <div>
               <Products productData={productData} />
            </div>
         </div>

      </main>
   )
};

export const getServerSideProps = async () => {
   const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
   const productData = await res.json()
   return { props: { productData } };
}
