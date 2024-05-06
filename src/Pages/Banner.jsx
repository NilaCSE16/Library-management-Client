import book from "../assets/book1.png";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="grid grid-cols-2  py-20">
      {/* <h1>Banner</h1> */}
      <div className="bg-slate-200 h-[331px]">
        <div className="flex justify-center items-center h-full">
          <div className="ml-28">
            <p className="text-orange-600">Top Rated</p>
            <h1 className="text-3xl font-bold cursor-pointer hover:text-orange-600">
              Know More About This Books
            </h1>
            <p className="text-zinc-700">By: Erich Johnson</p>
            <p className="text-zinc-700">$25.75</p>
            <div className="flex mt-2 cursor-pointer">
              <FaStar className="text-orange-600" />
              <FaStar className="text-orange-600" />
              <FaStar className="text-orange-600" />
              <FaStar className="text-orange-600" />
              <FaRegStarHalfStroke className="text-orange-600" />
            </div>
            <button className="flex border mt-4 text-orange-600 hover:text-white border-zinc-500 hover:bg-orange-600 px-6 py-2 rounded-full mr-4">
              Borrow Now
              <FaArrowRight className="mt-2 mx-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 h-[331px] pl-16">
        <img
          src={book}
          alt=""
          className="-mt-10"
          style={{
            transform:
              "translate3d(0px, 0px, -100px) rotateX(5deg) rotateY(-40deg) scale(1)",
            zIndex: "0",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
