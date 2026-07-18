import images from '#/constant/image.ts'
import { ArrowRight, Headphones } from 'lucide-react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: images.mindset,
    title: 'Episode7 . Technology',
    subTitle: 'SRKP selects: open your mind easy',
  },
  {
    image: images.episode8,
    title: 'Episode8 . Technology',
    subTitle: 'SRKP selects: keep your watch',
  },
  {
    image: images.episode9,
    title: 'Episode9 . Technology',
    subTitle: 'SRKP selects: to hide behind safe Episode page',
  },
  {
    image: images.mindset,
    title: 'Episode7 . Technology',
    subTitle: 'SRKP selects: open your mind easy',
  },
  {
    image: images.episode8,
    title: 'Episode8 . Technology',
    subTitle: 'SRKP selects: keep your watch',
  },
  {
    image: images.episode9,
    title: 'Episode9 . Technology',
    subTitle: 'SRKP selects: to hide behind safe Episode page',
  },
]

function PodcastCarousal() {
  return (
    // <div className="w-full">
    //   <div
    //     className="flex gap-10 overflow-x-auto pb-3
    //   justify-between
    //   "
    //   >
    //     {data.map((d, idx) => (
    //       <div
    //         className=" flex flex-row bg-white rounded-xl shadow-md min-w-[500px] "
    //         key={idx}
    //       >
    //         <div className="rounded-xl overflow-hidden relative min-w-[50%]">
    //           <img
    //             src={d.image}
    //             alt={d.subTitle}
    //             className="md:h-[350px] h-[300px] w-full object-cover"
    //           ></img>
    //           <span className="absolute top-1 right-2 flex items-center justify-center bg-white size-8 rounded-md">
    //             <Headphones className="size-5" />
    //           </span>
    //         </div>
    //         <div className="flex items-center justify-center mt-5 px-5 md:py-5 py-4 space-y-3 min-w-[50%]">
    //           <div>
    //             <p className="text-[13px] text-muted-foreground">
    //               {d.title1}.{d.title2}
    //             </p>
    //             <p className="lg:text-[16px] md:text-[14px]  font-semibold border-b-2 border-black">
    //               {d.subTitle}
    //             </p>
    //             <p className="flex md:text-[15px] text-[13px] lg:mt-4 md:mt-2">
    //               Episode page
    //               <ArrowRight />
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className='w-full'>
      <Swiper
      className='md:h-[400px] h-[350px]'
      modules={[Pagination]}
      pagination={{clickable:true}}
      spaceBetween={30}
      slidesPerView={1}
      loop
      breakpoints={{
        768:{
          slidesPerView:2,
        }
      }}
      
        >
          {data.map((d, idx) => (
            <SwiperSlide key={idx}>
          <div
            className=" flex bg-white rounded-xl shadow-md w-full"
           
          >
            <div className="rounded-xl overflow-hidden relative">
              <img
                src={d.image}
                alt={d.subTitle}
                className="md:h-[350px] h-[300px] w-full object-cover"
              ></img>
              <span className="absolute top-1 right-2 flex items-center justify-center bg-white size-8 rounded-md">
                <Headphones className="size-5" />
              </span>
            </div>
            <div className="flex items-center justify-center mt-5 px-5 md:py-5 py-4 space-y-3 min-w-[50%]">
              <div>
                <p className="text-[13px] text-muted-foreground">
                  {d.title}
                </p>
                <p className="lg:text-[16px] md:text-[14px]  font-semibold border-b-2 border-black">
                  {d.subTitle}
                </p>
                <p className="flex md:text-[15px] text-[13px] lg:mt-4 md:mt-2">
                  Episode page
                  <ArrowRight />
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}

        </Swiper>
    </div>
  )
}

export default PodcastCarousal
