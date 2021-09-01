import React, {useEffect, useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TopbarUser from "../../../Topbar/TopbarUser";
import { StatWrapper } from "./Stats.styles";
import { Chart } from "react-google-charts"
import { PieChart, Pie, Cell } from "recharts";
import { Groups } from "../../../../service/Groups";
// const data = [
//     { name: "Group A", value: 400 },

//     { name: "Group D", value: 200 }
//   ];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
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
  const [city, setCity] = useState("")
  const [date, setDate] = useState("")
  const [cities, setCities] = useState([])
  const [data, setData] = useState([])
  const [isChart, setIsChart] = useState(false)



  useEffect(() => {
    Groups.getGroups().then(res => {
      setCities([...new Set(res.data.map(grp => grp.city))])
      setData([
        { name: "All", value: res.data.length },
        { name: "done", value: res.data.filter(d => d.status !== "To do").length }   
      ])
      if(res.data.length > 0) {
        setCity(res.data[0].city)
        setDate(res.data[0].date)  
        setIsChart(true)
      }
      
    }).catch(err => {
      console.log(err)
    })
  }, [])


  const getGroupByCityAndDate = (city, date) => {
    if(city == "" || date == "") {
      return
    }

    setIsChart(false)


    
    Groups.getGroupsByDateAndCity(city, date).then(res => {
      setData([
        { name: "All", value: res.data.length },
        { name: "done", value: res.data.filter(d => d.status !== "To do").length }   
      ])
      setIsChart(true)

    }).catch(err => {
      console.log(err)
    })
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
              <div className=""> <h6 className="text-secondary ">Group Status situation</h6></div>
              <div>
                {
                  isChart ?
                <PieChart width={400} height={400}>
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
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>

                : null
                }
                
              </div>


            </div>
          </div>
          <div className="right-side">

          <div className="col-50">
            <div className="labels ">Select a date</div>
            <Calendar onChange={(e) => {
                  console.log(e.toISOString().split("T")[0])
                  setDate((e.toISOString().split("T")[0]))
                  getGroupByCityAndDate(city, e.toISOString().split("T")[0])
                  
                }}/>
          </div>
          <div className="col-50">
            <div class="form-group">
              <div className="labels ">Select a city</div>

              <select
                class="form-control bgColForm"
                id="exampleFormControlSelect1"
                value={city }
                onChange={(e) => {

                  setCity(e.target.value)
                  getGroupByCityAndDate(e.target.value, date)
                  

                }}
              >
                <option value=""> Choose City</option>
                {
                  cities.map(city => {
                    return <option value={city}> {city}</option>
                  }) 
                }
              </select>
            </div>
          </div>
          </div>

        </div>
      </div>





    </StatWrapper>
  );
}

export default Stats;
