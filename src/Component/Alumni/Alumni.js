import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import "./alumni.css";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchYear } from "../../store/alumniSlice";
import { STATUSES } from "../../store/status";
import Loader from "../Loader";

const Alumni = () => {
  const dispatch = useDispatch();
  const { year, status } = useSelector((state) => state.alumni);

  const [yearData, setYearData] = useState();

  async function getData() {
    setYearData(year);
  }
  useEffect(() => {
    dispatch(fetchYear());
  }, []);
  useEffect(() => {
    getData();
  }, [year]);

  return (
    <div className="alumni">
      {!yearData
        ? 
        // <Loader/>
        "Loading"
        : yearData.map((item, i) => (
            <Card name={item.Name} year={item.Year} key={i} />
          ))}
    </div>
  );
};

export default Alumni;
