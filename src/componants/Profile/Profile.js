import React from "react";
import "./Profile.css";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { pushTasksList } from "../../store/task-panel.slice";
import taskItems from "../../constants/panelItems";

const itemsFromBackend = taskItems.map((taskItem) => {
  return {
    id: uuid(),
    content: taskItem,
  };
});
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
