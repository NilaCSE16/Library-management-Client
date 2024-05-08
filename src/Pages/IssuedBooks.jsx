import { useEffect, useState } from "react";

const IssuedBooks = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    fetch(
      "https://library-management-server-two.vercel.app/api/borrow/issueBook"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooks(data);
      });
    // const data = res.json();
    // console.log(data);
  }, []);
  return (
    <div>
      <div className="overflow-x-auto bg-white p-4 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold text-orange-600">
            Issued Books
          </h2>
          {/* <Link to="/addBook">
          <button className="px-3 py-2 text-sm text-orange-600 rounded-btn border border-solid border-orange-600">
            Add New Book
          </button>
        </Link> */}
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User Name</th>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Return Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {books?.map(
              (book, index) =>
                index < 4 && (
                  <tr key={book._id}>
                    {/* <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td> */}
                    <td>{book.bookId}</td>
                    <td>{book.bookTitle}</td>
                    <td>{book.issueDate}</td>
                    <td>{book.returnDate}</td>
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

export default IssuedBooks;
