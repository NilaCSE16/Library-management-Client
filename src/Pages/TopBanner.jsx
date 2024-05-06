import CountUp from "react-countup";
import top from "../assets/topbanner.jpg";
import { FaRegHeart } from "react-icons/fa";
import { PiBookOpenText } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import profile from "../assets/profile1.jpg";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const TopBanner = () => {
  const swiperRef = useRef(null);
  const images = [
    {
      image: profile,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,",
    },
    {
      image: profile,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,",
    },
    {
      image: profile,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,",
    },
  ];
  return (
    <div>
      <div
        className="h-[550px] bg-cover py-16 bg-center px-16 flex items-center justify-center"
        style={{
          backgroundImage: `url(${top})`,
        }}
      >
        {/* <h2>Author Dialog</h2> */}
        <div className="w-[80%] h-[300px] bg-zinc-300 mb-20 rounded-md opacity-70 flex justify-center items-center">
          <IoIosArrowDropleft
            style={{ fontSize: "8em" }}
            className="cursor-pointer text-zinc-800 pl-7"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          />
          <Swiper spaceBetween={15} slidesPerView={1} ref={swiperRef}>
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="mx-40">
                  <img
                    src={image.image}
                    alt=""
                    className="w-20 h-20 border-4 border-red-800 rounded-full mx-auto"
                  />
                  <p className="text-black text-center">{image.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <IoIosArrowDropright
            style={{ fontSize: "8em" }}
            className="cursor-pointer text-zinc-800 pr-7"
            onClick={() => swiperRef.current.swiper.slideNext()}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 justify-between justify-items-center align-items-center -mt-24">
        <div className="w-[300px] h-[200px] bg-yellow-300 opacity-85 justify-center items-center flex">
          <div className="border-2 border-black px-[94px] py-[40px]">
            <PiBookOpenText className="text-4xl mx-6" />
            <h3 className="text-3xl font-bold">Books</h3>
            <CountUp end={216563132} className="ml-1"></CountUp>
          </div>
        </div>
        <div className="w-[300px] h-[200px] bg-red-300 opacity-80 justify-center items-center flex">
          <div className="border-2 border-black px-[68px] py-[40px]">
            <IoPersonOutline className="text-4xl mx-12" />
            <h3 className="text-3xl font-bold">Members</h3>
            <CountUp end={31563132} className="ml-7"></CountUp>
          </div>
        </div>
        <div className="w-[300px] h-[200px] bg-violet-300 opacity-80 justify-center items-center flex">
          <div className="border-2 border-black px-12 py-[40px]">
            <FaRegHeart className="text-4xl mx-16" />
            <h3 className="text-3xl font-bold">Happy Users</h3>
            <CountUp end={16563132} className="ml-12"></CountUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
