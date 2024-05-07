import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/UserSlice";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location.pathname);
  // console.log(!currentUser);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/auth/signout`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      dispatch(signOut());
      navigate("/signIn", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const author = event.target.bar.value;
    // console.log(author);
    const res = await fetch(
      `http://localhost:5000/api/book/bookWithWriter/${author}`
    );
    const data = await res.json();
    // console.log(data);
    navigate("/search", { state: { books: data } });
  };
  return (
    <div className="navbar bg-slate-100 px-20">
      <div className="flex-1">
        <a className="text-2xl cursor-pointer font-serif text-orange-600 font-bold">
          eLibrary
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="flex-none">
          <ul className="menu-horizontal px-1 font-semibold gap-10">
            <li
              className={
                location.pathname == "/"
                  ? "text-orange-600 mt-1"
                  : "hover:text-orange-600 mt-1"
              }
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                location.pathname == "/viewBook"
                  ? "text-orange-600 mt-1"
                  : "hover:text-orange-600 mt-1"
              }
            >
              <Link to="/viewBook">Book Collections</Link>
            </li>
            <li
              className={
                location.pathname == "/about"
                  ? "text-orange-600 mt-1"
                  : "hover:text-orange-600 mt-1"
              }
            >
              <Link to="/about">About</Link>
            </li>
            {currentUser && (
              <li
                className={
                  location.pathname == "/myList"
                    ? "text-orange-600 mt-1"
                    : "hover:text-orange-600 mt-1"
                }
              >
                <Link to="/myList">My Borrow List</Link>
              </li>
            )}
            <li>
              <form onSubmit={handleSubmit}>
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="bar"
                    className="py-2 text-sm text-white border border-gray-400 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Author Name..."
                    autoComplete="off"
                  ></input>
                </div>
              </form>
            </li>
            <li>{!currentUser && <Link to="/signIn">Sign In</Link>}</li>
          </ul>
        </div>
        {currentUser && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={currentUser.profilePicture}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/addBook" className="justify-between">
                  Add new book
                </Link>
              </li>
              <li onClick={handleSignOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
