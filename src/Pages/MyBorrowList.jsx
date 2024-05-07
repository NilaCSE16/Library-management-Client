import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const MyBorrowList = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  const [myBorrowLists, setMyBorrowLists] = useState(null);
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/borrow/myBorrowList/${currentUser.username}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyBorrowLists(data);
      });
  }, [currentUser.username]);
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Issued Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myBorrowLists?.map((borrow) => (
            <tr key={borrow._id}>
              <td>{borrow.bookId}</td>
              <td>{borrow.bookTitle}</td>
              <td>{borrow.bookAuthor}</td>
              <td>{borrow.issueDate}</td>
              <td>{borrow.returnDate}</td>
              <th>
                <button className="btn btn-primary text-white btn-xs">
                  Return
                </button>
              </th>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
};

export default MyBorrowList;
