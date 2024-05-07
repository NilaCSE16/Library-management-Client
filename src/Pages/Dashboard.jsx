import ChartShow from "./ChartShow";
import FeaturedBooks from "./FeaturedBooks";
import ViewBooks from "./ViewBooks";
import ViewUsers from "./ViewUsers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/Books/BooksSlice";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { GiSpellBook } from "react-icons/gi";
import { LuBookX } from "react-icons/lu";
import CountUp from "react-countup";

const Dashboard = () => {
  const { books } = useSelector((state) => state.books);
  // console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="bg-base-200 px-10 py-10">
      <div className="grid grid-cols-4 gap-3 mb-10">
        <div className="w-[300px] h-36 bg-white rounded-lg flex justify-between p-10">
          <div className="">
            <CountUp end={1231} className="text-4xl font-bold mb-3"></CountUp>
            <p>Total Visitor</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-600 flex justify-center items-center">
            <BsPersonCheck
              className="text-white cursor-pointer"
              style={{ fontSize: "1.7em" }}
            />
          </div>
        </div>
        <div className="w-[305px] h-36 bg-white rounded-lg flex justify-between p-10">
          <div className="">
            <CountUp end={546} className="text-4xl font-bold mb-3"></CountUp>
            <p>Borrowed Books</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-600 flex justify-center items-center">
            <GiSpellBook
              className="text-white cursor-pointer"
              style={{ fontSize: "1.7em" }}
            />
          </div>
        </div>
        <div className="w-[305px] h-36 bg-white rounded-lg flex justify-between p-10">
          <div className="">
            <CountUp end={23} className="text-4xl font-bold mb-3"></CountUp>
            <p>Overdue Books</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-600 flex justify-center items-center">
            <LuBookX
              className="text-white cursor-pointer"
              style={{ fontSize: "1.7em" }}
            />
          </div>
        </div>
        <div className="w-[300px] h-36 bg-white rounded-lg flex justify-between p-10">
          <div className="">
            <CountUp end={120} className="text-4xl font-bold mb-3"></CountUp>
            <p>New Members</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-600 flex justify-center items-center">
            <MdOutlinePersonAddAlt1
              className="text-white cursor-pointer"
              style={{ fontSize: "1.7em" }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <ViewUsers></ViewUsers>
        <ViewBooks></ViewBooks>
      </div>
      <div className="my-10 grid grid-cols-2 gap-6">
        <ChartShow />
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-lg mx-2">Top Choices</h2>
        <div className="mx-5 my-5 grid grid-cols-6 gap-10">
          {books.map(
            (book, index) =>
              index < 6 && (
                <FeaturedBooks key={book._id} book={book}></FeaturedBooks>
              )
          )}
        </div>
        {/* <FeaturedBooks></FeaturedBooks> */}
      </div>
    </div>
  );
};

export default Dashboard;
