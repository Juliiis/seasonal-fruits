import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./list.css";

const currentMonth = new Date().getMonth() + 1;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function List() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/available-fruits?month=${month}`);
        setFruits(await response.json());
      } catch (error) {
        setFruits([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [month]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  if (loading) {
    return "Loading";
  }

  const noFruitsInThisMonth = fruits.length === 0;

  return (
    <div>
      <h2>List</h2>
      <select onChange={handleMonthChange} value={month}>
        {MONTH_NAMES.map((monthName, index) => (
          <option value={index + 1}>{monthName}</option>
        ))}
      </select>
      {noFruitsInThisMonth && "No fruits found"}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Link to={`/description/${fruit.id}`}>
              {fruit.name}
              <img
                src={`/fruits/${fruit.id}.svg`}
                alt=""
                className="fruitIcon"
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default List;
