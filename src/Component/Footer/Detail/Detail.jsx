import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { GiHumanPyramid } from "react-icons/gi";
import { MdOutlineGroupAdd } from "react-icons/md";
import './detail.css';

const Detail = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  // Sample data for demonstration
  // const Teacher = [
  //   { name: "Sushanta", year: "3rd" },
  //   { name: "Pramanick", year: "3rd" }
  // ];
  // const Student = [
  //   { name: "John Doe", year: "1st" },
  //   { name: "Jane Doe", year: "2nd" }
  // ];

  // Function to handle the display of detailed data
  // const showDetail = (data) => {
  //   setSelectedData(data);
  // };

  //Achievement data array
  const achievements = [
    { id: 1, icon: <MdOutlineGroupAdd />, number: 156, label: 'TEACHERS' },
    { id: 2, icon: <GiHumanPyramid />, number: 35, label: 'STUDENTS'},
    { id: 3, icon: <MdOutlineGroupAdd />, number: 135, label: 'VOLUNTEERS' }
  ];

  return (
    <div className="achievement-section text-center">
      <div className="container">
        <div className="row">
          {/* Map over the achievements array to render cards */}
          {achievements.map((achievement) => (
            <div 
              className="col-md-4" 
              key={achievement.id}
              // onClick={() => showDetail(achievement.data)}
            >
              <div className="achievement-card">
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3 className="achievement-number">
                  <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                    <CountUp start={0} end={didViewCountUp ? achievement.number : 0} duration={3} />
                  </VisibilitySensor>
                </h3>
                <p className="achievement-label">{achievement.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally render the detail table if data is selected */}
        {/* {selectedData && selectedData.length > 0 && (
          <div className="detail-table">
            <h3>Details</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {selectedData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}
      </div> 
    </div>
  );
};

export default Detail;
