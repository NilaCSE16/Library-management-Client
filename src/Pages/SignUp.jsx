// import { useState } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";

const SignUp = () => {
  //   const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const department = form.department.value;
    const user = { username, email, department, password };
    // console.log(user);
    // setFormData(user);
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      if (data.success == false) {
        setError(true);
        return;
      }
      navigate("/signIn", { replace: true });
    } catch (error) {
      setLoading(false);
      setError(true);
    }

    // console.log(data);
    // const data = await res.json();
  };
  //   console.log(formData);
  return (
    <div className="hero p-20 bg-base-200">
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <div>
          <h2 className="text-3xl text-center font-semibold mt-7">Sign Up </h2>
        </div>
        <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              name="username"
              required
            />
          </div>
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
              <span className="label-text">Department</span>
            </label>
            <input
              type="text"
              placeholder="Department"
              name="department"
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
          </div>
          <div className="form-control mt-6">
            <button
              disabled={loading}
              className="p-3 rounded-md bg-slate-700 text-white hover:opacity-95 disabled:opacity-80 uppercase"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          <div className="form-control mt-3">
            <OAuth />
          </div>
        </form>
        <div className="flex gap-2 pl-7 pb-6">
          <p>Have an account?</p>
          <Link to="/signIn">
            <span className="text-blue-500">Sign In</span>
          </Link>
        </div>
        <p className="text-red-700 pl-5 pb-5">
          {error && "Something went wrong"}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
