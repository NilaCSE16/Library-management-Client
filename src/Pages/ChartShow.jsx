import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "SAT",
    Visitors: 26,
    Borrowers: 48,
  },
  {
    name: "SUN",
    Visitors: 67,
    Borrowers: 40,
  },
  {
    name: "MON",
    Visitors: 35,
    Borrowers: 15,
  },
  {
    name: "TUE",
    Visitors: 54,
    Borrowers: 86,
  },
  {
    name: "WED",
    Visitors: 10,
    Borrowers: 10,
  },
  {
    name: "THU",
    Visitors: 19,
    Borrowers: 35,
  },
  {
    name: "FRI",
    Visitors: 79,
    Borrowers: 27,
  },
];

const ChartShow = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-7">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Borrowers" fill="#86020B" />
        <Bar dataKey="Visitors" fill="#363B3E" />
      </BarChart>
    </div>
  );
};

export default ChartShow;
