
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
  

export function childHold(newTree, setTree) {
    
 
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

export function setHoldStatus(tree, setTree) {
     
    const newTree = { ...tree };

    const changeElementById = (id, areAllOnHold, partialChildrenOnHold, allPlanned, allProcessed, allSent, processedAndSent, processedAndPlanned, sentAndPlanned, allMixed) => {

        const updateTree = (tree) => {
            if (tree.id === id) {  
                tree.areAllOnHold = areAllOnHold;
                tree.partialChildrenOnHold = partialChildrenOnHold;
                tree.allPlanned = allPlanned;
                tree.allProcessed = allProcessed;
                tree.allSent    = allSent;
                tree.processedAndSent = processedAndSent;
                tree.processedAndPlanned = processedAndPlanned;
                tree.sentAndPlanned = sentAndPlanned; 
                tree.allMixed = allMixed;
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

    const getStatusOfListOfFiles = (partialTree) => {
        const list = getListOfFiles(partialTree); // Fixed function name
        const areAllOnHold = list.every((item) => item.onHold || item.parentHold? true : false);
        const partialChildrenOnHold = areAllOnHold? false : list.some((item) => item.onHold || item.parentHold ? true : false);
        const allPlanned = list.every((item) => item.fileStatus === 'Planned' ? true : false);
        const allProcessed = list.every((item) => item.fileStatus === 'Processed' ? true : false);
        const allSent = list.every((item) => item.fileStatus === 'Sent' ? true : false);
        
        const processedAndSent = list.some((item) => item.fileStatus === 'Sent' ? true : false) && 
        list.some((item) => item.fileStatus === 'Processed' ? true : false);

        const processedAndPlanned = list.some((item) => item.fileStatus === 'Processed' ? true : false) && 
        list.some((item) => item.fileStatus === 'Planned' ? true : false);

        const sentAndPlanned = list.some((item) => item.fileStatus === 'Sent' ? true : false) && 
        list.some((item) => item.fileStatus === 'Planned' ? true : false);
        
        const allMixed = list.some((item) => item.fileStatus === 'Sent' ? true : false) && 
        list.some((item) => item.fileStatus === 'Processed' ? true : false) && 
        list.some((item) => item.fileStatus === 'Planned' ? true : false);
        
        changeElementById(partialTree.id, areAllOnHold, partialChildrenOnHold,
            allPlanned, allProcessed, allSent, processedAndSent, processedAndPlanned, sentAndPlanned, allMixed);

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
      setTree(newTree);

}

