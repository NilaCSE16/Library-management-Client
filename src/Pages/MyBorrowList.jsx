import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const MyBorrowList = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  const [myBorrowLists, setMyBorrowLists] = useState(null);
  useEffect(() => {
    fetch(
      `https://library-management-server-two.vercel.app/api/borrow/myBorrowList/${currentUser.username}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyBorrowLists(data);
      });
  }, [currentUser.username]);

  const handleReturn = async (bookId, userName) => {
    const url = new URL(
      "https://library-management-server-two.vercel.app/api/borrow/deleteFromBorrow",
      window.location.origin
    );
    url.searchParams.append("bookId", bookId);

    url.searchParams.append("userName", userName);

    fetch(url.toString(), {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          const remaining = myBorrowLists.filter(
            (list) => list.bookId !== bookId
          );
          setMyBorrowLists(remaining);
        }
      });
  };
  return (
    <div className="overflow-x-auto h-screen bg-white p-4 rounded-xl">
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
                <button
                  onClick={() => handleReturn(borrow.bookId, borrow.userName)}
                  className="btn btn-primary text-white btn-xs"
                >
                  Return
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBorrowList;
