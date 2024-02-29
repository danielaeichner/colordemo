

export const getColorsV2 = () => {
    const blue = 'rgb(3, 155, 229)';
    const lightblue = 'rgb(3, 155, 229, 0.3)';

    const yellow = 'rgb(255, 235, 20)';
    const lightyellow = 'rgb(255, 235, 20, 0.3)';

    const greenyellow = 'rgb(188, 255, 20, 0.5)';

    const green = 'rgb(124, 179, 66)';
    const lightgreen = 'rgb(124, 179, 66, 0.1)';

    const colors = [ {name: "Blue", color: blue},
{name: "Light Blue", color: lightblue},
{name: "Yellow", color: yellow},
{name: "Light Yellow", color: lightyellow},
{name: "Green Yellow", color: greenyellow},
{name: "Green", color: green},
{name: "Light Green", color: lightgreen}]; 

const objColors = {
    blue: {name: "Blue", color: blue},
    lightblue: {name: "Light Blue", color: lightblue},
    yellow: {name: "Yellow", color: yellow},
    lightyellow: {name: "Light Yellow", color: lightyellow},
    greenyellow: {name: "Green Yellow", color: greenyellow},
    green: {name: "Green", color: green},
    lightgreen: {name: "Light Green", color: lightgreen},
    white: {name: "White", color: "white"},
    red: {name: "Red", color: "red"}
}

return {colors, objColors};

}



export const getStatusColorV2 = (child) => {

    const {  onHold,
      areAllOnHold,
      partialChildrenOnHold,
      allPlanned,
      allProcessed,
      allSent,
      processedAndSent,	
      processedAndPlanned,
      sentAndPlanned,
      allMixed, hasProcessedOnHoldFile, childHold} = child;
  
    // if(child.id === "4") {
    //   console.log(child);
    // }
  
    const objColors = getColorsV2().objColors;

    const isProcessedOnHold = (onHold || areAllOnHold) && (processedAndSent || allProcessed || processedAndPlanned || allMixed);
    
    if(!hasProcessedOnHoldFile && !isProcessedOnHold ) {
        if(allSent && (areAllOnHold || partialChildrenOnHold)) {
        return objColors.greenyellow;
        }
    
        if(allSent) {
        return objColors.green;
        }
    
        if(partialChildrenOnHold || childHold && (allPlanned ||sentAndPlanned)) {
            return objColors.lightyellow;
        }

        if((areAllOnHold || onHold) && (allPlanned || sentAndPlanned)) {
        return objColors.yellow;
        }

    
}

else {
    if((partialChildrenOnHold || areAllOnHold || onHold) && (processedAndSent || allProcessed)) {
        return objColors.blue;
      }

    if((partialChildrenOnHold || areAllOnHold || onHold) && (allMixed || processedAndPlanned)) {
      return objColors.lightblue;
    }
  
    
}


    if(!partialChildrenOnHold && !areAllOnHold && !onHold) {
      if(allMixed || processedAndSent || sentAndPlanned) { 
      
        return objColors.lightgreen;
      }
      return objColors.white;
    }
  
    return objColors.white;
  
  };

export const getStatusColorSingleV2 = (onHold,  status, parentHold ) => {

    const objColors = getColorsV2().objColors;

    if(status === 'Sent' && (onHold || parentHold)) {
      return objColors.greenyellow;
    }
  
    if(status === 'Sent') {
      return objColors.green;
    }
    if(status === 'Error') {
      return objColors.red;
    }
  
    if(status === 'Processed' && (onHold || parentHold)) {
      return objColors.blue;
    }
  
    if(status === 'Planned' && (onHold || parentHold)) {
      return objColors.yellow;
    }

    return objColors.white;
  };
  