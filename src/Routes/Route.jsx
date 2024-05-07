import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import AddBook from "../Pages/AddBook";
import Dashboard from "../Pages/Dashboard";
import { ParallaxProvider } from "react-scroll-parallax";
import ViewAllBooks from "../Pages/ViewAllBooks";
import BookDetails from "../Pages/BookDetails";
import BorrowNow from "../Pages/BorrowNow";
import MyBorrowList from "../Pages/MyBorrowList";
// import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <ParallaxProvider>
            <Home></Home>
          </ParallaxProvider>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/viewBook",
        element: <ViewAllBooks></ViewAllBooks>,
      },
      {
        path: "/bookDetails",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/borrow",
        element: <BorrowNow></BorrowNow>,
      },
      {
        path: "/myList",
        element: <MyBorrowList></MyBorrowList>,
      },
    ],
  },
]);

export default router;
