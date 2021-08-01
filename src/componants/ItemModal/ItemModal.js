import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ItemModal = ({ showModal, title, description, emitClose, children }) => {
  const [areatext, setAreatext] = useState("");
  const [displayArray, setDisplayArray] = useState([]);
  return (
    <Modal show={showModal} onHide={emitClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>{children}</div>
          <div className="my-3">{description}</div>
          {displayArray.map((item) => (
            <div>{item}</div>
          ))}
          <textarea
            onChange={(event) => {
              setAreatext(event.target.value);
            }}
            value={areatext}
            className="form-control"
            id="Textarea1"
            rows="3"
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            emitClose();
          }}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            const existingDisplayArray = [...displayArray];
            existingDisplayArray.push(areatext);
            setDisplayArray(existingDisplayArray);
            setAreatext("");
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
