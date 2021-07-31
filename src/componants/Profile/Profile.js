import React from "react";
import "./Profile.css";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { pushTasksList } from "../../store/task-panel.slice";

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
];

function Profile({ Name }) {
  const dispatch = useDispatch();
  const dispatchItemNameHandler = () => {
    dispatch(pushTasksList(itemsFromBackend));
  };
  return (
    <div
      className="card-profile"
      style={{ width: "18rem" }}
      onClick={dispatchItemNameHandler}
    >
      <div className="card-body-profile">
        <h1 className="card-title-profile">{Name ? Name : "Company 1"}</h1>
        <p className="card-text-profile">July month recruitment.</p>
      </div>
    </div>
  );
}

export default Profile;
