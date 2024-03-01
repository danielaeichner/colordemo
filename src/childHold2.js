import { getStatusColorSingleV2,getColorsV2 } from './getStatusColorV2';

export function resetHold(newTree, setTree) {
    newTree.childHold = false;
        newTree.parentHold = false;
    if (newTree.children) {
      for (let level1 = 0; level1 < newTree.children.length; level1++) {
        newTree.children[level1].childHold = false;
        newTree.children[level1].parentHold = false;

        if (newTree.children[level1].children) {
          for (
            let level2 = 0;
            level2 < newTree.children[level1].children.length;
            level2++
          ) {

            newTree.children[level1].children[level2].childHold = false;
            newTree.children[level1].children[level2].parentHold = false;

            if (newTree.children[level1].children[level2].children) {
              for (
                let level3 = 0;
                level3 <
                newTree.children[level1].children[level2].children.length;
                level3++
              ) {

                newTree.children[level1].children[level2].children[level3].childHold = false;
                newTree.children[level1].children[level2].children[level3].parentHold = false;

                if (
                  newTree.children[level1].children[level2].children[level3]
                    .children
                ) {
                  for (
                    let level4 = 0;
                    level4 <
                    newTree.children[level1].children[level2].children[level3]
                      .children.length;
                    level4++
                  ) {
                    newTree.children[level1].children[level2].children[level3].children[level4].childHold = false;
                    newTree.children[level1].children[level2].children[level3].children[level4].parentHold = false;

                    if (
                      newTree.children[level1].children[level2].children[level3]
                        .children[level4].list
                    ) {
                      for (
                        let level5 = 0;
                        level5 <
                        newTree.children[level1].children[level2].children[level3]
                          .children[level4].list.length;
                        level5++
                      ) {
                        newTree.children[level1].children[level2].children[level3].children[level4].list[level5].childHold = false;
                        newTree.children[level1].children[level2].children[level3].children[level4].list[level5].parentHold = false;
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    setTree(newTree);
  }
  

export function childHold2(newTree, setTree) {
    
 
  if (newTree.children) {
    for (let level1 = 0; level1 < newTree.children.length; level1++) {

        
        if (
            newTree.children[level1].onHold
          ) {
            // all the parents need also be on hold
            newTree.childHold = true;
            
          }
          
           
      if (newTree.children[level1].children) {
        for (
          let level2 = 0;
          level2 < newTree.children[level1].children.length;
          level2++
        ) {
            
            if (
                newTree.children[level1].children[level2].onHold
              ) {
                // all the parents need also be on hold
                
                newTree.children[level1].childHold = true;
                newTree.childHold = true;
              }
             
          if (newTree.children[level1].children[level2].children) {
            for (
              let level3 = 0;
              level3 <
              newTree.children[level1].children[level2].children.length;
              level3++
            ) {
                

                if (
                    newTree.children[level1].children[level2].children[
                      level3
                    ].onHold
                  ) {
                    // all the parents need also be on hold
                    
                    
                    newTree.children[level1].children[
                      level2
                    ].childHold = true;
                    newTree.children[level1].childHold = true;
                    newTree.childHold = true;
                  }
                 

              if (
                newTree.children[level1].children[level2].children[level3]
                  .children
              ) {
                for (
                  let level4 = 0;
                  level4 <
                  newTree.children[level1].children[level2].children[level3]
                    .children.length;
                  level4++
                ) {
                   
                    if (
                        newTree.children[level1].children[level2].children[
                          level3
                        ].children[level4].onHold
                      ) {
                        // all the parents need also be on hold
                        
                        newTree.children[level1].children[level2].children[
                          level3
                        ].childHold = true;
                        newTree.children[level1].children[
                          level2
                        ].childHold = true;
                        newTree.children[level1].childHold = true;
                        newTree.childHold = true;
                      }
                     

                  if (
                    newTree.children[level1].children[level2].children[level3]
                      .children[level4].list
                  ) {
                    for (
                      let level5 = 0;
                      level5 <
                      newTree.children[level1].children[level2].children[level3]
                        .children[level4].list.length;
                      level5++
                    ) {
                        
                      if (
                        newTree.children[level1].children[level2].children[
                          level3
                        ].children[level4].list[level5].onHold
                      ) {
                        
                        
                        newTree.children[level1].children[level2].children[
                          level3
                        ].children[level4].childHold = true;
                        newTree.children[level1].children[level2].children[
                          level3
                        ].childHold = true;
                        newTree.children[level1].children[
                          level2
                        ].childHold = true;
                        newTree.children[level1].childHold = true;
                        newTree.childHold = true;
                      }
                      
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  setTree(newTree);
}



export function parentHold(newTree, setTree) {
    


    if (newTree.children) {
      for (let level1 = 0; level1 < newTree.children.length; level1++) {
        
        if(newTree.onHold) {
            newTree.children[level1].parentHold = true;
        }

        

        if (newTree.children[level1].children) {
          for (
            let level2 = 0;
            level2 < newTree.children[level1].children.length;
            level2++
          ) {

            if(newTree.onHold || newTree.children[level1].onHold) {
                
                newTree.children[level1].children[level2].parentHold = true;
            }
            

            if (newTree.children[level1].children[level2].children) {
              for (
                let level3 = 0;
                level3 <
                newTree.children[level1].children[level2].children.length;
                level3++
              ) {

                if(newTree.onHold || newTree.children[level1].onHold || newTree.children[level1].children[level2].onHold) {
                
                    newTree.children[level1].children[level2].children[level3].parentHold = true;
                }

                if (
                  newTree.children[level1].children[level2].children[level3]
                    .children
                ) {
                  for (
                    let level4 = 0;
                    level4 <
                    newTree.children[level1].children[level2].children[level3]
                      .children.length;
                    level4++
                  ) {
                    
                    if(newTree.onHold || newTree.children[level1].onHold || newTree.children[level1].children[level2].onHold || newTree.children[level1].children[level2].children[level3].onHold) {
                
                        newTree.children[level1].children[level2].children[level3].children[level4].parentHold = true;
                    }

                    if (
                      newTree.children[level1].children[level2].children[level3]
                        .children[level4].list
                    ) {
                      for (
                        let level5 = 0;
                        level5 <
                        newTree.children[level1].children[level2].children[level3]
                          .children[level4].list.length;
                        level5++
                      ) {

                        if(newTree.onHold || newTree.children[level1].onHold || newTree.children[level1].children[level2].onHold || newTree.children[level1].children[level2].children[level3].onHold 
                            || newTree.children[level1].children[level2].children[level3].children[level4].onHold) {
                
                            newTree.children[level1].children[level2].children[level3].children[level4].list[level5].parentHold = true;
                        }
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    setTree(newTree);
  }

// figure out if everyone is on hold
export function getListOfFiles(tree) {
    const fileList = [];

    const createFileList = (parent) => {
      if(parent.children) {
        parent.children.forEach((child) => {
          createFileList(child)
        
        });
      } else {
        if(parent.list) {
            fileList.push(...parent.list);
        }
      }
    }

    createFileList(tree);
    return fileList;
}

export function setHoldStatus(tree) {
     
    const newTree = { ...tree };

    const changeElementById = (id, colorItem) => {

        const updateTree = (tree) => {
            if (tree.id === id) {  
                tree.color = colorItem.color;
                tree.colorName = colorItem.name;
                
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
        updateTree(newTree);

    };

    const getDominantColor = (colorList) => {

        // white < lightyellow < yellow < lightblue < blue < green/yellow < lightgreen < green
        
        const hasYellow = colorList.some((color) => color.name === "Yellow");
        const hasGreenYellow = colorList.some((color) => color.name === "Green Yellow");
        const hasGreen = colorList.some((color) => color.name === "Green");
        const hasBlue = colorList.some((color) => color.name === "Blue");
        
        const allYellow = colorList.every((color) => color.name === "Yellow");
        const allGreenYellow = colorList.every((color) => color.name === "Green Yellow");
        const allGreen = colorList.every((color) => color.name === "Green");
        const allBlue = colorList.every((color) => color.name === "Blue");

        const objColors = getColorsV2().objColors;

        if(allYellow) {
            return objColors.yellow;
        }
        if(allGreenYellow) {
            return objColors.greenyellow;
        }

        if(allGreen) {
            return objColors.green;
        }

        if(allBlue) {
            return objColors.blue;
        }

        if(hasYellow) {
            return objColors.lightyellow;
        }

        if(hasBlue) {
            return objColors.lightblue;
        }

        if(hasGreenYellow) {
            return objColors.greenyellow;
        }

        if(hasGreen) {
            return objColors.lightgreen;
        }
        return objColors.white;
    }

    const getStatusOfListOfFiles = (partialTree) => {
        const list = getListOfFiles(partialTree); // Fixed function name

        

        const colorList = [];
        for (let i = 0; i < list.length; i++) {
            // onHold,  status, parentHold
            colorList.push(getStatusColorSingleV2(list[i].onHold, list[i].fileStatus, list[i].parentHold));
        }

        // if(partialTree.id === "4") {
        // console.log(colorList);
        // }
        const partialTreeColor = getDominantColor(colorList);
        
        // if(partialTree.id === "4") {
        //     console.log(partialTreeColor);
        //     }

        changeElementById(partialTree.id, {color: partialTreeColor.color, name: partialTreeColor.name});

    };

    const allOnHold = (partialTree) => {
            
        
            if (partialTree.children) {
                for (let i = 0; i < partialTree.children.length; i++) {
                    
                        
                    getStatusOfListOfFiles(partialTree.children[i]);

                        allOnHold(partialTree.children[i]);
                }
            }
            
    };


   getStatusOfListOfFiles(tree);
    
      allOnHold(tree);
      // console.log(newTree);
  return newTree;

}

