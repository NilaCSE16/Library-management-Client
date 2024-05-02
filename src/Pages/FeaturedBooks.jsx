import { useEffect, useState } from "react";
const FeaturedBooks = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    fetch(
      "https://library-management-server-two.vercel.app/api/book/viewBookList",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooks(data);
      });
  }, []);
  return (
    <div className="mx-5 my-5 grid grid-cols-6 gap-10">
      {books?.map(
        (book, index) =>
          index < 6 && (
            <div
              className="card card-compact bg-base-100 shadow-xl h-72"
              key={book._id}
            >
              <figure>
                <img
                  src={book.bookCover}
                  alt="Books"
                  className="cover w-full h-full cursor-pointer"
                />
              </figure>
              <div className="mx-2 my-2">
                <h2 className="font-bold text-[12px]">{book.bookTitle}</h2>
                <p className="text-[12px]">{book.bookAuthor}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default FeaturedBooks;
