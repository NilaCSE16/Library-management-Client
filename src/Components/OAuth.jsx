import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/UserSlice";
import { useLocation, useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/logo.png";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleClick = async () => {
    try {
      //   console.log("");
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      //   console.log(result);
      const res = await fetch(
        "https://library-management-server-two.vercel.app/api/auth/google",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
          credentials: "include",
        }
      );
      const data = await res.json();
      // console.log(data);
      dispatch(signInSuccess(data));
      navigate(location.state ? location.state.from : "/", { replace: true });
    } catch (error) {
      console.log("Could not login with google", error);
    }
  };
  return (
    <div
      className="bg-slate-700 text-white rounded-md p-3 uppercase hover:opacity-95 flex justify-center cursor-pointer"
      onClick={handleGoogleClick}
    >
      <img src={logo} alt="" className="w-7 h-7 items-center mr-3" />
      <button type="button">
        {/* <FontAwesomeIcon icon={faGoogle} className="mr-3 text-xl text-blue-700" /> */}
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
