import FeaturedBooks from "./FeaturedBooks";
import ViewBooks from "./ViewBooks";
import ViewUsers from "./ViewUsers";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ViewUsers></ViewUsers>
      <ViewBooks></ViewBooks>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
};

export default Home;
