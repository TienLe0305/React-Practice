import React from "react";
import "./PersonList.css";

const PersonList = ({ peopleList }) => {
  return (
    <ul className="people-list">
      {peopleList.map((person, index) => (
        <li key={index} className="person-item">
          {person}
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
