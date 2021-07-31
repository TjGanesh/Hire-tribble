import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import PanelItem from "../PanelItem/PanelItem";
import panelItems from "../../constants/panelItems";
import { pushColumns } from "../../store/task-panel.slice";

function TaskPanel() {
  const { itemsFromBackend, columns } = useSelector(state => state.taskPanel);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemsFromBackend && itemsFromBackend.length) {
      const columnsFromBackend = {
        [uuid()]: {
          name: "Requested",
          items: items.length ? items : itemsFromBackend
        },
        [uuid()]: {
          name: "To do",
          items: []
        },
        [uuid()]: {
          name: "In Progress",
          items: []
        },
        [uuid()]: {
          name: "Done",
          items: []
        }
      };
      dispatch(pushColumns(columnsFromBackend));
    }
  }, [items, itemsFromBackend]);

  const onDragEnd = (result, columns, dispatch) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      dispatch(
        pushColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        })
      );
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      dispatch(
        pushColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        })
      );
    }
  };

  const onSelectPositionHandler = event => {
    if (event.target.value === "All") {
      setItems(itemsFromBackend);
    } else {
      let selectedItems = itemsFromBackend.filter(
        itemFromBackend =>
          itemFromBackend.content.position === event.target.value
      );
      setItems(selectedItems);
    }
  };
  return (
    <>
      {Object.keys(columns).length > 0 && (
        <select
          onChange={onSelectPositionHandler}
          className="form-select"
          aria-label="Default select example"
        >
          <option value={"All"}>All</option>
          {[...new Set(panelItems.map(item => item.position))].map(
            (position, index) => (
              <option key={index} value={position}>
                {position}
              </option>
            )
          )}
        </select>
      )}
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, dispatch)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <PanelItem
                                        position={item.content.position}
                                        description={item.content.description}
                                        candidateName={
                                          item.content.candidateName
                                        }
                                      />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}

export default TaskPanel;
