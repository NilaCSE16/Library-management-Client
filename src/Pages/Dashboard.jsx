import ChartShow from "./ChartShow";
import FeaturedBooks from "./FeaturedBooks";
import ViewBooks from "./ViewBooks";
import ViewUsers from "./ViewUsers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/Books/BooksSlice";

const Dashboard = () => {
  const { books } = useSelector((state) => state.books);
  // console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="bg-base-200 px-10 py-10">
      <div className="grid grid-cols-2 gap-6">
        <ViewUsers></ViewUsers>
        <ViewBooks></ViewBooks>
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
      <div className="my-10 grid grid-cols-2 gap-6">
        <ChartShow />
      </div>
    </div>
  );
};

export default Dashboard;
