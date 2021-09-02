import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TopbarUser from "../../../Topbar/TopbarUser";
import { StatWrapper } from "./Stats.styles";
import { Chart } from "react-google-charts";
import { PieChart, Pie, Cell } from "recharts";
import { Groups } from "../../../../service/Groups";
import Select from 'react-select'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// bar graph data
const data1 = [
  {
    name: "",
    uv: 4000,
    pv: 2400,
  }

];
/////////////////////////////////


const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Stats() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [isChartShown, setIsChartShown] = useState(false)

  useEffect(() => {
    Groups.getGroups()
      .then((res) => {
        let citiesArray = [...new Set(res.data.map((grp) => grp.city))]
        setCities(citiesArray.map(city => ({ value: city, label: city })));

        
        setData([{
          name: "",
          uv: res.data.length,
          pv: res.data.filter((d) => d.status !== "To do").length,
        }]);

        if (res.data.length > 0) {
          setCity(res.data[0].city);
          setDate(res.data[0].date);
          setShowChart("bar");
          setIsChartShown(true)

        }


      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getGroupByCityAndDate = (city, date) => {
    if (city.length == 0 || date == "") {
      return;
    }


    setIsChartShown(false)


    Groups.getGroupsByDateAndCity(city, date)
      .then((res) => {
        let data = [{
          name: "",
          uv: res.data.length,
          pv: res.data.filter((d) => d.status !== "To do").length,
        }]

        if (city.length > 1) {
          data = [
            { name: "All", value: res.data.length },
            {
              name: "done",
              value: res.data.filter((d) => d.status !== "To do").length,
            },
          ]
        }

        setData(data);
        setIsChartShown(true)
        setShowChart(city.length > 1 ? "pie" : "bar");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCitesChange = (value) => {
    console.log(value)
    let cities = value.map(v => v.value)
    setCity(cities)
    getGroupByCityAndDate(cities, date)
  }

  return (
    <StatWrapper>
      <div className="container-fluid p-3">
        <div className=" clearfix mt-0 mb-2">
          <span className=" float-left col-6">
            {" "}
            <h4>Manager STATS </h4>{" "}
          </span>
          <span className="text-right">
            {" "}
            <TopbarUser />
          </span>
        </div>
        <div className="row ">
          <div className="left-side ">
            <div className="bg-dark rounded mt-4">
              <div className="">
                {" "}
                <h6 className="text-secondary ">Group Status situation</h6>
              </div>
              {
                isChartShown ?
                  <div className="overflow-auto scrollbar-hidden">
                    {showChart === "pie" ? (
                      <PieChart width={500} height={400}>
                        <Pie
                          data={data}
                          cx={200}
                          cy={200}
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    ) :
                      showChart == "bar" ?
                        (
                          <BarChart
                            width={420}
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
                            <XAxis dataKey="name" tick={{ fill: 'white' }} />
                            <YAxis tick={{ fill: 'white' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                          </BarChart>
                        ) : null
                    }
                  </div>

                  : null
              }

            </div>

          </div>
          <div className="right-side">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  <div className="labels ">Select a date</div>
                  <Calendar
                    onChange={(e) => {
                      console.log(e.toISOString().split("T")[0]);
                      setDate(e.toISOString().split("T")[0]);
                      getGroupByCityAndDate(city, e.toISOString().split("T")[0]);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  <div class="form-group">
                    <div className="labels ">Select a city</div>
                    <Select options={cities} isMulti={true} onChange={handleCitesChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StatWrapper>
  );
}

export default Stats;
