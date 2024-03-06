

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





export const getStatusColorSingleV2 = (onHold,  status ) => {

    const objColors = getColorsV2().objColors;

    if(status === 'Sent' && onHold) {
      return objColors.greenyellow;
    }
  
    if(status === 'Sent') {
      return objColors.green;
    }
    if(status === 'Error') {
      return objColors.red;
    }
  
    if(status === 'Processed' && onHold) {
      return objColors.blue;
    }
  
    if(status === 'Planned' && onHold) {
      return objColors.yellow;
    }

    return objColors.white;
  };
  