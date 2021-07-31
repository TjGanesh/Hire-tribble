import React from "react";
import "./PanelItem.css";

function PanelItem({ personName, position = "back-end" }) {
  let badgeColor;
  switch (position) {
    case "front-end":
      badgeColor = "primary";
      break;
    case "back-end":
      badgeColor = "danger";
      break;
    case "full-stack":
      badgeColor = "success";
      break;
    case "ux-design":
      badgeColor = "dark";
      break;
    case "database-engineer":
      badgeColor = "secondary";
      break;

    default:
      break;
  }
  return (
    <>
      <div className="card col-sm-3">
        <div className="card-header bg-light">
          <span className={position ? `badge bg-${badgeColor}` : "badge"}>
            FrontEnd
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default PanelItem;
