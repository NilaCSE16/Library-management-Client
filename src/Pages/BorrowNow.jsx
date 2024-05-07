import { useSelector } from "react-redux";
import top from "../assets/topbanner.jpg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const BorrowNow = () => {
  const { loading, currentUser } = useSelector((state) => state.user);
  //   console.log(currentUser);
  //   const [formData, setFormData] = useState(null);
  //   console.log(formData);

  const location = useLocation();
  const book = location?.state.book;

  const { bookId, bookTitle, bookAuthor } = book;

  const [date, setDate] = useState(new Date());
  const [date1, setDate1] = useState(new Date());
  const handleChange = (newDate) => {
    const today = new Date();
    if (today > newDate) {
      alert("Set a valid Date");
    } else {
      setDate(newDate);
    }
  };
  const handleChange1 = (newDate) => {
    const today = new Date();
    if (today > newDate) {
      alert("Set a valid Date");
    } else {
      setDate1(newDate);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const bookId = form.bookId.value;
    const bookTitle = form.bookTitle.value;
    const bookAuthor = form.bookAuthor.value;
    const userName = form.username.value;
    const issueDate = form.issueDate.value;
    const returnDate = form.returnDate.value;
    const borrowInfo = {
      bookId,
      bookTitle,
      bookAuthor,
      userName,
      issueDate,
      returnDate,
    };
    // console.log(borrowInfo);
    const res = await fetch(
      "https://library-management-server-two.vercel.app/api/borrow/borrowBook",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(borrowInfo),
      }
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="mb-16">
      <div
        className="h-[450px] bg-cover mb-8  bg-center px-16 flex items-center justify-center"
        style={{
          backgroundImage: `url(${top})`,
        }}
      >
        <h3 className="text-4xl font-bold text-white bg-black p-4 rounded-md opacity-80">
          Borrow Information
        </h3>
      </div>
      <div className="p-3 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book ID</span>
            </label>
            <input
              type="text"
              placeholder="Book id"
              defaultValue={bookId}
              name="bookId"
              className="bg-slate-100 rounded-lg p-3"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Title</span>
            </label>
            <input
              type="text"
              placeholder="Book Title"
              defaultValue={bookTitle}
              name="bookTitle"
              className="bg-slate-100 rounded-lg p-3"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Author Name</span>
            </label>
            <input
              type="text"
              placeholder="Book author name"
              defaultValue={bookAuthor}
              name="bookAuthor"
              className="bg-slate-100 rounded-lg p-3"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User</span>
            </label>
            <input
              placeholder="Current User"
              defaultValue={currentUser.username}
              name="username"
              className="bg-slate-100 rounded-lg p-3"
              required
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Issue Date</span>
            </label>
            <ReactDatePicker
              onChange={handleChange}
              selected={date}
              value={date}
              name="issueDate"
              //   showIcon
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Return Date</span>
            </label>
            <ReactDatePicker
              onChange={handleChange1}
              selected={date1}
              value={date1}
              name="returnDate"
              //   showIcon
              className="input input-bordered w-full"
            />
          </div>
          <button className="bg-slate-700 disabled:opacity-80 text-white p-3 rounded-lg uppercase hover:opacity-95">
            {loading ? "Loading..." : "Confirm"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BorrowNow;
