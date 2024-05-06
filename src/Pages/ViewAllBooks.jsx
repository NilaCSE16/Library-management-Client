import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/Books/BooksSlice";
import FeaturedBooks from "./FeaturedBooks";
// import { useLocation } from "react-router-dom";

const ViewAllBooks = () => {
  //   const location = useLocation();
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-5 gap-6 mx-24 my-16">
      {books.map((book) => (
        <FeaturedBooks
          key={book._id}
          book={book}
          //   state={{ from: location.pathname }}
        ></FeaturedBooks>
      ))}
    </div>
  );
};

export default ViewAllBooks;
