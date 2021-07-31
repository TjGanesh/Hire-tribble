import React, { useState } from "react";
import "./PanelItem.css";
import ItemModal from "../ItemModal/ItemModal";
import { HiOutlineViewGridAdd } from "react-icons/hi";
const PanelItem = ({ position, candidateName, description }) => {
  const [showModal, setShowModal] = useState(false);
  const getClass = position => {
    switch (position) {
      case "Front End":
        return "primary";
      case "Back End":
        return "danger";
      case "Fullstack":
        return "success";
      case "Ux Designer":
        return "dark";
      case "Database Engineer":
        return "secondary";
      default:
        return "danger";
    }
  };

  const badge = ()=> <span className={`badge bg-${getClass(position)}`}>{position}</span>;

  return (
    <>
      <div className="card mb-1">
        <div className="card-header bg-light">
          {badge()}
          <span
            onClick={() => {
              setShowModal(true);
            }}
          >
            <HiOutlineViewGridAdd />
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{candidateName}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <ItemModal
      title={candidateName}
      description={description}
      position={position}
        showModal={showModal}
        emitClose={() => {
          setShowModal(false);
        }}
      >
        {badge()}
      </ItemModal>
    </>
  );
};

export default PanelItem;
