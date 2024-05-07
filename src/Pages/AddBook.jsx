import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../firebase";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddBook = () => {
  const { loading } = useSelector((state) => state.user);
  const [imagePercent, setImagePercent] = useState(0);
  const [image, setImage] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState(null);
  //   console.log(formData);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = (image) => {
    // console.log(image);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is: " + progress + "% done");
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, bookCover: downloadURL })
        );
      }
    );
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://library-management-server-two.vercel.app/api/book/addBook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="p-3 max-w-lg mx-auto mb-10">
      <h2 className="text-3xl font-semibold text-center my-7">
        Add a New Book
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book ID</span>
          </label>
          <input
            type="text"
            placeholder="Book id"
            id="bookId"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Title</span>
          </label>
          <input
            type="text"
            placeholder="Book Title"
            id="bookTitle"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Author Name</span>
          </label>
          <input
            type="text"
            placeholder="Book author name"
            id="bookAuthor"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Summary</span>
          </label>
          <textarea
            placeholder="Book summary"
            id="bookSummary"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number of Books Available</span>
          </label>
          <input
            type="number"
            id="bookAvailable"
            className="bg-slate-100 rounded-lg p-3"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-control">
          {formData && (
            <img src={formData.bookCover} alt="" className="w-72 h-80" />
          )}
          <p className="text-sm self-center">
            {imageError ? (
              <span className="text-red-700">
                Error uploading image (file size must be less than 2MB)
              </span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
            ) : imagePercent === 100 ? (
              <span className="text-green-700">
                Image uploaded successfully
              </span>
            ) : (
              ""
            )}
          </p>
          <label htmlFor="">Select an Image: </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
        </div>
        <button className="bg-slate-700 disabled:opacity-80 text-white p-3 rounded-lg uppercase hover:opacity-95">
          {loading ? "Loading..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
