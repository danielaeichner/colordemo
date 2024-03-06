import { getStatusColorSingleV2,getColorsV2 } from './getStatusColorV2';

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

        // white < lightblue < blue < lightyellow < yellow  < green/yellow < lightgreen < green
        
        const hasYellow = colorList.some((color) => color.name === "Yellow");
        const hasGreenYellow = colorList.some((color) => color.name === "Green Yellow");
        const hasGreen = colorList.some((color) => color.name === "Green");
        const hasBlue = colorList.some((color) => color.name === "Blue");
        
        const allYellow = colorList.every((color) => color.name === "Yellow");
        const allGreenYellow = colorList.every((color) => color.name === "Green Yellow");
        const allGreen = colorList.every((color) => color.name === "Green");
        const allBlue = colorList.every((color) => color.name === "Blue");

        const objColors = getColorsV2().objColors;

        if(allBlue) {
          return objColors.blue;
        }
        if(allYellow) {
            return objColors.yellow;
        }
        if(allGreenYellow) {
            return objColors.greenyellow;
        }

        if(allGreen) {
            return objColors.green;
        }

        if(hasBlue) {
          return objColors.lightblue;
      }

        if(hasYellow) {
            return objColors.lightyellow;
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
      // console.log(JSON.stringify(newTree));
  return newTree;

}

