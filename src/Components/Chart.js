
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "Jan", revenue: 2000000000 },
    { name: "Feb", revenue: 1500000000 },
    { name: "Mar", revenue: 1000000000 },
    { name: "Apr", revenue: 500000000 },
  ];

  return (
    <div >
     <h1 class="h3 mb-0 text-gray-800  pl-4">Earnings Overview</h1>
     
      <div className="chartz">
        <PieChart width={400} height={400} className="pl-4">
          <Pie
            dataKey="revenue"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart className="pl-4"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="revenue" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;