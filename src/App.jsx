import { useState } from "react";
import "./App.css";
import { setHoldStatus} from "./childHold2";
import { createTree } from "./createTree";
import {
  getColorsV2,
  getStatusColorSingleV2,
} from "./getStatusColorV2";

function App() {
  const [list, setList] = useState([]);

  const [tree, setTree] = useState(createTree());

  const handleClick = (parent) => {
    setList([]);
    // loop until you find the list array element
    const newList = [];

    const createFileList = (parent, newList) => {
      if (parent.children) {
        parent.children.forEach((child) => {
          createFileList(child, newList);
        });
      } else {
        if (parent.list) {
          newList.push(...parent.list);
        }
      }
    };

    createFileList(parent, newList);
    setList(newList);
  };

  const toggleOnHold = (id) => {
    const updateTree = (tree, childrenOnHold) => {
      let allOnHold = childrenOnHold;
      if (tree.id === id) {
        tree.onHold = !tree.onHold;
        allOnHold = true;
      }
      if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
          if(allOnHold) {
            tree.children[i].onHold = tree.onHold;
          }
          updateTree(tree.children[i], allOnHold);
        }
      }
      if (tree.list) {
        for (let i = 0; i < tree.list.length; i++) {
          if(allOnHold) {
            tree.list[i].onHold = tree.onHold;
          }
          updateTree(tree.list[i], allOnHold);
        }
      }
    };

    const newTree = { ...tree };
    updateTree(newTree, false);
    setTree(newTree);

   //resetHold(newTree, setTree);
  
    
    //parentHold(newTree, setTree);

    const updatedTreeData = setHoldStatus(newTree);


    setTree(updatedTreeData);
  };

  const fileStatusOptions = ["Planned", "Processed", "Sent"];

  const changeStatus = (id, status) => {
    const updateTree = (tree) => {
      if (tree.id === id) {
        tree.fileStatus = status;
      }
      if (tree.children) {
        for (let i = 0; i < tree.children.length; i++) {
          updateTree(tree.children[i]);
        }
      }
      if (tree.list) {
        for (let i = 0; i < tree.list.length; i++) {
          updateTree(tree.list[i]);
        }
      }
    };

    const newTree = { ...tree };
    updateTree(newTree);
    setTree(newTree);


    const updatedTreeData = setHoldStatus(newTree);


    setTree(updatedTreeData);
  };


  const spanElement = (child, onClickEl) => {
    return (
      <span
        style={{ backgroundColor: child.fileStatus
          ? getStatusColorSingleV2(child.onHold, child.fileStatus, child.parentHold).color
          : child.color}}
        onClick={onClickEl ? () => handleClick(child) : undefined}
      >
        {child.name}{" "}
        <span style={{ fontSize: "0.5em" }}>
          {child.colorName ? child.colorName : ""}
          {child.onHold ? "onHold" : ""}
         
          {child.parentHold ? " - parentHold" : ""}
        </span>
        <button onClick={() => toggleOnHold(child.id)}>
          {child.onHold ? "Unhold" : "Hold"}
        </button>
        {child.fileStatus ? (
          <select
            value={child.fileStatus}
            style={{ marginLeft: "1rem" }}
            onChange={(e) => changeStatus(child.id, e.target.value)}
          >
            {fileStatusOptions.map((option) => (
              <option
                key={option}
                value={option}
                defaultValue={child.fileStatus}
              >
                {option}
              </option>
            ))}
          </select>
        ) : null}
      </span>
    );
  };

  const colors = getColorsV2();

  const renderTree = (tree) => {
    return (
      <ul>
        <li> {spanElement(tree, true)}</li>
        {tree.children && tree.children.length > 0 && (
          <ul>
            {tree.children.map((child) => (
              <li key={child.name + child.id}>{renderTree(child)}</li>
            ))}
          </ul>
        )}
      </ul>
    );
  };

  const renderBoxes = () => {
    return (
      <div className="boxContainer">
        {colors.colors.map((color, index) => (
          <div style={{ float: "left", margin: "0rem 1rem" }} key={index}>
            <div
              className="box"
              style={{
                backgroundColor: color.color,
                width: "20px",
                height: "20px",
                margin: "10px",
              }}
            ></div>

            <span>{color.name}</span>
          </div>
        ))}
      </div>
    );
  };

 

  return (
    <>
      <h1>STX Status Colors - V3</h1>
      
      
      {renderBoxes()}

      <div className="container" style={{ clear: "both" }}>
        <div className="leftTree">{renderTree(tree)}</div>
        <div className="fileList">
          <ul>
            {list.map((child) => (
              <li key={child.name + child.id}>{spanElement(child, false)}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
