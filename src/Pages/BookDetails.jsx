import { Link } from "react-router-dom";
import top from "../assets/topbanner.jpg";

const BookDetails = () => {
  // const location = useLocation();
  // console.log(location);
  const book = JSON.parse(localStorage.getItem("book"));
  // console.log(book);

  const { bookTitle, bookCover, bookSummary, bookAvailable, bookAuthor } = book;
  // localStorage.removeItem("book");
  return (
    <div className="mb-16">
      <div
        className="h-[450px] bg-cover mb-8  bg-center px-16 flex items-center justify-center"
        style={{
          backgroundImage: `url(${top})`,
        }}
      >
        <h3 className="text-4xl font-bold text-white bg-black p-4 rounded-md">
          {bookTitle}
        </h3>
        {/* <img src={top} alt="" className="h-[500px] w-full" /> */}
      </div>
      <div className="mx-16">
        <img
          src={bookCover}
          alt="Book Cover"
          className="w-80 h-full rounded-md mx-auto mb-4"
        />
        <h3 className="font-bold text-xl">Author: {bookAuthor}</h3>
        <p>
          <span className="font-bold">Summary:</span> {bookSummary}
        </p>
        <p>
          <span className="font-bold">Price:</span> $25.75
        </p>
        <p>
          <span className="font-bold">Available:</span> {bookAvailable}
        </p>
        <Link to="/borrow">
          <button className="border mt-2 hover:bg-orange-400 border-zinc-500 px-6 py-2 rounded-md mr-4 text-white bg-orange-600">
            Borrow Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
