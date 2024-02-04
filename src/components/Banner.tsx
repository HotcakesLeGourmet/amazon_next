import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from "@/images/slider/sliderImg_1.jpg"
import sliderImg_2 from "@/images/slider/sliderImg_2.jpg"
import sliderImg_3 from "@/images/slider/sliderImg_3.jpg"
import sliderImg_4 from "@/images/slider/sliderImg_4.jpg"
import Image from 'next/image';
const Banner = () => {
   return (
      <div className=' relative  '>
         <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} interval={3000}>
            <div>
               <Image src={sliderImg_1} alt="cartImg1" priority  />
            </div>
            <div>
               <Image src={sliderImg_2} alt="cartImg2"   />
            </div>
            <div>
               <Image src={sliderImg_3} alt="cartImg3"   />
            </div>
            <div>
               <Image src={sliderImg_4} alt="cartImg4"   />
            </div>
         </Carousel>
         <div className='w-full h-40 bg-gradient-to-t from-gray-100 absolute bottom-0 z-20'></div>
      </div>
   )
}

export default Banner;