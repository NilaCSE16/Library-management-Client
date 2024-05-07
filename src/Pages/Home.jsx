import { RiHeartPulseLine } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { CgHeart } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import bgImage from "../assets/bg-image.jpg";
import { Parallax } from "react-scroll-parallax";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchBooks } from "../redux/Books/BooksSlice";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import TopBanner from "./TopBanner";

// Swiper.use(Autoplay);

const Home = () => {
  // Swiper.use(Autoplay);
  const { books } = useSelector((state) => state.books);
  const [isHover, setIsHover] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const swiperRef = useRef(null);
  return (
    <div className="bg-slate-100">
      <TopBanner></TopBanner>
      <div className="bg-slate-100 p-10 my-4">
        <div className="flex justify-between">
          <h2 className="text-2xl font-serif font-semibold">
            Most Popular Books
          </h2>
          <div className="flex">
            <Link to="/viewBook">
              <button className="border border-zinc-500 text-orange-600 px-6 py-2 rounded-full mr-4 hover:text-white hover:bg-orange-600">
                View All
              </button>
            </Link>
            <IoIosArrowDropleft
              style={{ fontSize: "2em" }}
              className="cursor-pointer text-zinc-500"
              onClick={() => swiperRef.current.swiper.slidePrev()}
            />
            <IoIosArrowDropright
              style={{ fontSize: "2em" }}
              className="cursor-pointer text-zinc-500"
              onClick={() => swiperRef.current.swiper.slideNext()}
            />
          </div>
        </div>
        <hr className="my-4" />
        <Swiper spaceBetween={15} slidesPerView={5} ref={swiperRef}>
          {books?.map((book) => (
            <SwiperSlide key={book._id}>
              <div
                className={
                  isHover === book._id
                    ? "transition scale-110 duration-300 ease-in-out card-compact bg-base-100 shadow-xl px-6 py-4 cursor-pointer"
                    : "card-compact bg-base-100 shadow-xl shadow-gray-300 shadow-offset-4 shadow-opacity-75 mx-2 my-4 h-80 px-6 py-4 cursor-pointer rounded-md"
                }
                key={book._id}
                onMouseEnter={() => setIsHover(book._id)}
                onMouseLeave={() => setIsHover(null)}
              >
                {isHover === book._id ? (
                  <div className="flex w-full gap-3">
                    <div className="">
                      <figure>
                        <img
                          src={book.bookCover}
                          alt="Books"
                          className="cover w-80 h-48 mt-4"
                          style={{
                            transform:
                              "translate3d(0px, 0px, -20px) rotateX(15deg) rotateY(-30deg)",
                            zIndex: "0",
                          }}
                        />
                      </figure>
                    </div>
                    <Link to="/bookDetails" state={{ book: book }}>
                      <div
                        className="my-8"
                        style={{
                          animation: "slide-in 0.5s ease-in-out forwards",
                        }}
                      >
                        <p className="text-[14px] text-gray-500 line-clamp-3">
                          {book.bookSummary}
                        </p>
                        <h3 className="text-sm font-bold text-gray-700">
                          Category: Fun, Horror
                        </h3>
                        <h3 className="text-sm font-bold text-gray-700">
                          Price: $25.34
                        </h3>
                        <div className="flex ">
                          <FaStar className="text-orange-600" />
                          <FaStar className="text-orange-600" />
                          <FaStar className="text-orange-600" />
                          <FaStar className="text-orange-600" />
                          <FaRegStarHalfStroke className="text-orange-600" />
                        </div>
                        {/* <Link to="/about"> */}
                        <button className="border mt-2 hover:bg-orange-400 text-[12px] border-zinc-500 px-3 py-1 rounded-full mr-4 text-white bg-orange-600">
                          Borrow Now
                        </button>
                        {/* </Link> */}
                      </div>
                    </Link>
                  </div>
                ) : (
                  <figure>
                    <img
                      src={book.bookCover}
                      alt="Books"
                      className="cover w-full h-56"
                    />
                  </figure>
                )}
                <hr className=" mt-4" />
                <div className="">
                  <div className="mx-2 my-2">
                    <h2 className="font-bold text-[12px] flex justify-center text-orange-600">
                      {book.bookTitle}
                    </h2>
                    <p className="text-[12px] flex justify-center line-clamp-3">
                      By: {book.bookAuthor}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* </div> */}
        </Swiper>
      </div>
      <div
        className="my-10 h-52 bg-cover py-16 bg-center px-16"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Parallax speed={10}>
          <div className="grid grid-cols-4 justify-between justify-items-center align-items-center">
            <div className="flex">
              <div className="w-16 h-16 flex rounded-full bg-violet-400 justify-center items-center">
                <BiMessageRoundedDots className="text-white text-4xl" />
              </div>
              <div className="mx-4">
                <h3 className="text-violet-400 text-2xl font-semibold ">
                  Science Fiction
                </h3>
                <CountUp end={7563132} />
              </div>
            </div>
            <div className="flex">
              <div className="w-16 h-16 flex rounded-full bg-blue-400 justify-center items-center">
                <RiHeartPulseLine className="text-white text-4xl bg" />
              </div>
              <div className="mx-4">
                <h3 className="text-blue-400 text-2xl font-semibold ">
                  Horror
                </h3>
                <CountUp end={6563132} />
              </div>
            </div>
            <div className="flex">
              <div className="w-16 h-16 flex rounded-full bg-teal-600 justify-center items-center">
                <CgHeart className="text-white text-4xl" />
              </div>
              <div className="mx-4">
                <h3 className="text-teal-400 text-2xl font-semibold ">
                  Romantic
                </h3>
                <CountUp end={4563132} />
              </div>
            </div>
            <div className="flex">
              <div className="w-16 h-16 flex rounded-full bg-orange-600 justify-center items-center">
                <FaRegStar className="text-white text-4xl" />
              </div>
              <div className="mx-4">
                <h3 className="text-orange-600 text-2xl font-semibold ">
                  Fashion
                </h3>
                <CountUp end={1563132} />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
