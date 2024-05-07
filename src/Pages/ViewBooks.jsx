import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewBooks = () => {
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
    <div>
      <div className="overflow-x-auto bg-white p-4 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-orange-600">Books List</h2>
          <Link to="/addBook">
            <button className="px-3 py-2 text-sm text-orange-600 rounded-btn border border-solid border-orange-600">
              Add New Book
            </button>
          </Link>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Available</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books?.map(
              (book, index) =>
                index < 4 && (
                  <tr key={book._id}>
                    <td>{book.bookId}</td>
                    <td>{book.bookTitle}</td>
                    <td>{book.bookAuthor}</td>
                    <td>{book.bookAvailable}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Delete</button>
                    </th>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBooks;
