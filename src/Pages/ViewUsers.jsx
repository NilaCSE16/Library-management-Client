// import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewUsers = () => {
  //   const { currentUser } = useSelector((state) => state.user);
  //   console.log(currentUser);
  var id = 1100;
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/user", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-xl">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg">Users List</h2>
        <Link to="/signUp">
          <button className="px-3 py-2 rounded-btn border border-solid border-slate-500 text-sm">
            Add New User
          </button>
        </Link>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Book Issued</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{(id = id + 1)}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-5 h-5 rounded-full">
                      <img
                        src={user.profilePicture}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">{user.username}</div>
                  </div>
                </div>
              </td>
              <td>12</td>
              <td>{user.department}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
              </th>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
