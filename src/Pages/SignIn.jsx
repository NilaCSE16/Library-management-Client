// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/UserSlice";
import OAuth from "../Components/OAuth";

const SignIn = () => {
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  console.log(error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location.state.from);
  // const server = 'http://localhost:5000/'

  const handleSignIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    // setFormData(user);
    try {
      // setLoading(true);
      // setError(false);
      const absoluteUrl = "http://localhost:5000/api/auth/signin";
      dispatch(signInStart());
      const res = await fetch(absoluteUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });
      const data = await res.json();
      // console.log(data);
      // setLoading(false);
      if (data.success == false) {
        // setError(true);
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate(location.state ? location.state?.from : "/", { replace: true });
    } catch (error) {
      // setLoading(false);
      // setError(true);
      dispatch(signInFailure(error));
    }

    // console.log(data);
    // const data = await res.json();
  };
  return (
    <div className="hero p-20 bg-base-200">
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div>
          <h2 className="text-3xl text-center font-semibold mt-7">Sign In </h2>
        </div>
        <form className="card-body" onSubmit={handleSignIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button
              disabled={loading}
              className="p-3 rounded-md bg-slate-700 text-white hover:opacity-95 disabled:opacity-80 uppercase"
            >
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>
          <div className="form-control mt-3">
            <OAuth />
          </div>
        </form>
        <div className="flex gap-2 pl-7 pb-6">
          <p>Dont have an account?</p>
          <Link to="/signUp">
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
        <p className="text-red-700 pl-5 pb-5">
          {error ? error.message || "Something went wrong!" : ""}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
