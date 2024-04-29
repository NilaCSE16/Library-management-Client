import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/UserSlice";
import { useLocation, useNavigate } from "react-router-dom";

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
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      // console.log(data);
      dispatch(signInSuccess(data));
      navigate(location.state ? location.state.from : "/", { replace: true });
    } catch (error) {
      console.log("Could not login with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-md p-3 uppercase hover:opacity-95"
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
