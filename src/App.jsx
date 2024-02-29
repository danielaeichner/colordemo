import { useState } from "react";
import "./App.css";
import { childHold, parentHold, resetHold, setHoldStatus } from "./childHold";
import { createTree } from "./createTree";
import {
  getColorsV2,
  getStatusColorV2,
  getStatusColorSingleV2,
} from "./getStatusColorV2";
import {
  getColorsV1,
  getStatusColorV1,
  getStatusColorSingleV1,
} from "./getStatusColorV1";

function App() {
  const [list, setList] = useState([]);

  const [tree, setTree] = useState(createTree());

  const [version, setVersion] = useState("V2");

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
    const updateTree = (tree) => {
      if (tree.id === id) {
        tree.onHold = !tree.onHold;
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

    resetHold(newTree, setTree);

    childHold(newTree, setTree);
    parentHold(newTree, setTree);

    setHoldStatus(newTree, setTree);
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
    setHoldStatus(newTree, setTree);
  };

  const getBackgroundColorV1 = (child) => {
    const fileStatus = child.fileStatus
      ? getStatusColorSingleV1(child.onHold, child.fileStatus, child.parentHold).color
      : getStatusColorV1(child).color;

    return fileStatus;
  };

  const getBackgroundColorV2 = (child) => {
    
    const fileStatus = child.fileStatus
      ? getStatusColorSingleV2(child.onHold, child.fileStatus, child.parentHold).color
      : getStatusColorV2(child).color;

    return fileStatus;
  };

  const spanElement = (child, onClickEl) => {
    return (
      <span
        style={{ backgroundColor: version === "V1" ? getBackgroundColorV1(child) : getBackgroundColorV2(child)}}
        onClick={onClickEl ? () => handleClick(child) : undefined}
      >
        {child.name}{" "}
        <span style={{ fontSize: "0.5em" }}>
          {child.onHold ? "onHold" : ""}{" "}
          {child.childHold ? " - childHold" : ""}
          {child.parentHold ? " - parentHold" : ""}
          {child.areAllOnHold ? " - areAllOnHold" : ""}
          {child.partialChildrenOnHold ? " - partialChildrenOnHold" : ""}
          {child.hasProcessedOnHoldFile ? " - hasProcessedOnHoldFile" : ""}
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

  const colors = version === "V1" ? getColorsV1() : getColorsV2();

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

  const toggleVersion = () => {

    setVersion(version === "V1" ? "V2" : "V1");
  }

  return (
    <>
      <h1>STX Status Colors</h1>
      <p>
      <button onClick={() => toggleVersion()}>

          {version} (click here to go to V1)
        </button>
      </p>
     
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
