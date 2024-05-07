import { Link, useLocation } from "react-router-dom";

const FeaturedBooks = ({ book }) => {
  const { bookCover, bookTitle, bookAuthor } = book;
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div
      className={
        location.pathname == "/viewBook"
          ? "card card-compact bg-base-100 shadow-xl h-[350px] pb-4 mb-4"
          : "card card-compact bg-base-100 shadow-xl h-72"
      }
    >
      <figure>
        <img
          src={bookCover}
          alt="Books"
          className="cover w-full h-full cursor-pointer"
        />
      </figure>
      <div className="mx-2 my-2">
        <h2
          className={
            location.pathname == "/viewBook"
              ? "font-bold text-[16px]"
              : "font-bold text-[12px]"
          }
        >
          {bookTitle}
        </h2>
        <p
          className={
            location.pathname == "/viewBook" ? "text-[16px]" : "text-[12px]"
          }
        >
          {bookAuthor}
        </p>
        {location.pathname == "/viewBook" && (
          <div>
            <p>Price: $25.75</p>
            <div className="flex justify-between">
              <Link to="/bookDetails" state={{ book: book }}>
                <button className="border mt-2 text-[12px] hover:text-white  border-zinc-500 px-2 py-1 rounded-md mr-4 text-orange-600 hover:bg-orange-600">
                  Read More
                </button>
              </Link>
              <Link to="/about">
                <button className="border mt-2 text-[12px] hover:text-white  border-zinc-500 px-2 py-1 rounded-md mr-4 text-orange-600 hover:bg-orange-600">
                  Borrow Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedBooks;
