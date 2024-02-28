import { useState } from "react";
import "./App.css";
import {childHold, parentHold, resetHold, setHoldStatus } from "./childHold";
import { createTree} from "./createTree";


function App() {
  const [list, setList] = useState([]);

const blue = 'rgb(3, 155, 229)';
const lightblue = 'rgb(3, 155, 229, 0.3)';

const yellow = 'rgb(255, 235, 20)';
const lightyellow = 'rgb(255, 235, 20, 0.3)';

const greenyellow = 'rgb(188, 255, 20, 0.5)';

const green = 'rgb(124, 179, 66)';
const lightgreen = 'rgb(124, 179, 66, 0.3)';

const colors = [ {name: "Blue", color: blue},
{name: "Light Blue", color: lightblue},
{name: "Yellow", color: yellow},
{name: "Light Yellow", color: lightyellow},
{name: "Green Yellow", color: greenyellow},
{name: "Green", color: green},
{name: "Light Green", color: lightgreen}]; 


const [tree, setTree] = useState(createTree());

  const handleClick = (parent) => {
    setList([]);
    // loop until you find the list array element
    const newList = [];

    const createFileList = (parent, newList) => {
      if(parent.children) {
        parent.children.forEach((child) => {
          createFileList(child,newList)
        
        });
      } else {
        if(parent.list) {
          newList.push(...parent.list);
        }
      }
    }

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


const getStatusColorSingle = (onHold,  status, parentHold ) => {
  if(status === 'Sent' && (onHold || parentHold)) {
    return greenyellow;
  }

  if(status === 'Sent') {
    return green;
  }
  if(status === 'Error') {
    return 'red';
  }

  if(status === 'Processed' && (onHold || parentHold)) {
    return blue;
  }

  if(status === 'Planned' && (onHold || parentHold)) {
    return yellow;
  }
};

const getStatusColor = (child) => {

  const {  onHold,
    areAllOnHold,
    partialChildrenOnHold,
    allPlanned,
    allProcessed,
    allSent,
    processedAndSent,	
    processedAndPlanned,
    sentAndPlanned,
    allMixed} = child;

  // if(child.id === "4") {
  //   console.log(child);
  // }

   
  if(allSent && (areAllOnHold || partialChildrenOnHold)) {
    return greenyellow;
  }

  if(allSent) {
    return green;
  }

  if(partialChildrenOnHold && (allPlanned ||sentAndPlanned)) {
    return lightyellow;
  }
  if((areAllOnHold || onHold) && (allPlanned || sentAndPlanned)) {
    return yellow;
  }
  if((partialChildrenOnHold || areAllOnHold || onHold) && (allMixed || processedAndPlanned)) {
    return lightblue;
  }

  

  if((partialChildrenOnHold || areAllOnHold) && (processedAndSent || allProcessed)) {
    return blue;
  }

  if(allMixed && !partialChildrenOnHold && !areAllOnHold && !onHold) {
    return 'white';
  }

  if(processedAndSent || sentAndPlanned) {
    
    return lightgreen;
  }

  
  return 'white';

};


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

  const spanElement = (child, onClickEl) => {
    return (
      <span 
          style={{backgroundColor: child.fileStatus ? getStatusColorSingle(child.onHold, child.fileStatus, child.parentHold) : getStatusColor(child)}}
            onClick={onClickEl ? () => handleClick(child) : undefined}
          >{child.name} <span style={{fontSize: "0.5em"}}>{child.onHold? 'onHold' : ''} {child.childHold? ' - childOnHold' : ''} 
          {child.parentHold? ' - parentOnHold' : ''}
          {child.areAllOnHold? ' - areAllOnHold' : ''}
          {child.partialChildrenOnHold? ' - partialChildrenOnHold' : ''}
          </span>
          <button onClick={() => toggleOnHold(child.id)}>
            {child.onHold ? 'Unhold' : 'Hold'}
            </button>
            
            {child.fileStatus ?


            <select value={child.fileStatus}  style={{marginLeft: "1rem"}} onChange={(e) => changeStatus(child.id, e.target.value)}>
                  {fileStatusOptions.map((option) => (
                    <option key={option} value={option} defaultValue={child.fileStatus} >
                      {option}
                    </option>
                  ))}
                </select>
            : null}
      </span>

    );

  }

 
  const renderTree = (tree) => {
    return (
      <ul>
        <li>
          {" "}
          {spanElement(tree,true)}
        </li>
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
        {colors.map((color, index) => (
          <div style={{float: "left", margin: "2rem" }} key={index}>
          <div  className="box" style={{ backgroundColor: color.color, width: "20px", height: "20px", margin: "10px" }}></div>

            <span>{color.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <h1>STX Status Colors</h1>

      {renderBoxes()}
    
      <div className="container" style={{clear: "both"}}>
      
        <div className="leftTree">{renderTree(tree)}</div>
        <div className="fileList">
          <ul>
            {list.map((child) => (
              <li key={child.name + child.id}>
                {spanElement(child, false)}
               
                
               
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    </>
  );
}

export default App;
