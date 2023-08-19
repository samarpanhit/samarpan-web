import React from "react";
import "./alumni.css";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";


const AlumniDetails = () => {

 
  const temp = useParams();
  const [data, setData] = useState();

  const url = `https://script.google.com/macros/s/AKfycbzqlAHwB05PNbo48zNQXPHsfa50ajxRbs5bq8dGWeoqZSNEWL0tLWbDuKWz5Uy7V4ag/exec?year=${temp.year}`;
  async function getData() {
    var fdata = await fetch(url);
    fdata = await fdata.json();
    setData(fdata.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="AlumniContainer">
      <span className="year">
        {temp.year - 4}-{temp.year}
      </span>
      <div className="main-table">
        {!data ? (
          <div className="loader">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Department</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {!data.length ? (
                "No data found"
              ) : (
                data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.Name}</td>
                      <td>{item.Role}</td>
                      <td>{item.Department}</td>
                      <td>{item.Year}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AlumniDetails;
