import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../redux/user/UserSlice";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(!currentUser);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await fetch(`/api/auth/signout`);
      dispatch(signOut());
      navigate("/signIn", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-slate-100 px-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold">AuthApp</a>
      </div>
      <div className="flex-none gap-2">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/profile">Profile</Link>
            </li> */}
            <li>
              {
                !currentUser && <Link to="/signIn">Sign In</Link>
                //   (
                //   <div className="dropdown dropdown-end">
                //     <div
                //       tabIndex={0}
                //       role="button"
                //       className="btn btn-ghost btn-circle avatar"
                //     >
                //       <div className="w-10 rounded-full">
                //         <img
                //           alt="Tailwind CSS Navbar component"
                //           src={currentUser.profilePicture}
                //         />
                //       </div>
                //     </div>
                //     <ul
                //       tabIndex={0}
                //       className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                //     >
                //       <li>
                //         <Link to="/profile" className="justify-between">
                //           Profile
                //           <span className="badge">New</span>
                //         </Link>
                //       </li>
                //       <li>
                //         <a>Settings</a>
                //       </li>
                //       <li>
                //         <a>Logout</a>
                //       </li>
                //     </ul>
                //   </div>
                // )
              }
            </li>
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
