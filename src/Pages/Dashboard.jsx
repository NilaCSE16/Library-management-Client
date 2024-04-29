import ChartShow from "./ChartShow";
import FeaturedBooks from "./FeaturedBooks";
import ViewBooks from "./ViewBooks";
import ViewUsers from "./ViewUsers";

const Dashboard = () => {
  return (
    <div className="bg-base-200 px-10 py-10">
      <div className="grid grid-cols-2 gap-6">
        <ViewUsers></ViewUsers>
        <ViewBooks></ViewBooks>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-lg mx-2">Top Choices</h2>
        <FeaturedBooks></FeaturedBooks>
      </div>
      <div className="my-10 grid grid-cols-2 gap-6">
        <ChartShow />
      </div>
    </div>
  );
};

export default Dashboard;