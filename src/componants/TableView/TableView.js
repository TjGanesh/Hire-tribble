import React from "react";
import PanelItem from "../PanelItem/PanelItem";

export const TableView = ({ columns, items }) => {
  console.log(items);
  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                {Object.entries(columns).map(([columnId, column], index) => {
                  return (
                    <th scope="col" key={columnId}>
                      {column.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <br></br>
            <tbody>
              {Object.entries(items).map(([itemId, item], index) => {
                return (
                  <tr scope="col" key={itemId} className="d-flex">
                    <PanelItem
                      position={item.content.position}
                      description={item.content.description}
                      candidateName={item.content.candidateName}
                    ></PanelItem>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
