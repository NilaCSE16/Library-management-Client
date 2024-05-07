import { useLocation } from "react-router-dom/dist";

const SearchBook = () => {
  const location = useLocation();
  const books = location.state.books;
  return (
    <div>
      <div className="overflow-x-auto h-screen bg-white p-4 rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Available</th>
              {/* <th>Action</th> */}
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
                    {/* <th>
                      <button className="btn btn-ghost btn-xs">Delete</button>
                    </th> */}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBook;
