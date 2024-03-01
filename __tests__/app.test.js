import { describe, expect, it } from "@jest/globals";
import { getStatusColorV2, getColorsV2, getStatusColorSingleV2 } from "../src/getStatusColorV2";

const { objColors } = getColorsV2();

// if a parent is on hold, all children are on hold as well. onhold === areAllOnHold

const variations = [];

const holds = [true, false];
const fileStatus = [
  "allPlanned",
  "allProcessed",
  "allSent",
  "processedAndSent",
  "processedAndPlanned",
  "sentAndPlanned",
  "allMixed",
];

for (let index = 0; index < fileStatus.length; index++) {
  const element = {
    partialChildrenOnHold: false,
    areAllOnHold: false,
    hasProcessedOnHoldFile: false,
    allPlanned: fileStatus[index] === "allPlanned" ? true : false,
    allProcessed: fileStatus[index] === "allProcessed" ? true : false,
    allSent: fileStatus[index] === "allSent" ? true : false,
    processedAndSent: fileStatus[index] === "processedAndSent" ? true : false,
    processedAndPlanned:
      fileStatus[index] === "processedAndPlanned" ? true : false,
    sentAndPlanned: fileStatus[index] === "sentAndPlanned" ? true : false,
    allMixed: fileStatus[index] === "allMixed" ? true : false,
  };
  for (let k = 0; k < holds.length; k++) {
    element["partialChildrenOnHold"] = holds[k];
    for (let m = 0; m < holds.length; m++) {
      element["areAllOnHold"] = holds[m];
      for (let p = 0; p < holds.length; p++) {
        variations.push({ ...element, hasProcessedOnHoldFile: holds[p] });
      }
    }
  }
}

const impossibleVariations = [];
const possibleVariations = [];

for (let index = 0; index < variations.length; index++) {
  if (
    variations[index].allProcessed &&
    !variations[index].hasProcessedOnHoldFile
  ) {
    impossibleVariations.push(variations[index]);
  } else if (
    variations[index].hasProcessedOnHoldFile &&
    variations[index].allSent
  ) {
    impossibleVariations.push(variations[index]);
  } else if (
    variations[index].hasProcessedOnHoldFile &&
    variations[index].allPlanned
  ) {
    impossibleVariations.push(variations[index]);
  } else if (
    variations[index].hasProcessedOnHoldFile &&
    variations[index].sentAndPlanned
  ) {
    impossibleVariations.push(variations[index]);
  } else if (
    variations[index].hasProcessedOnHoldFile &&
    !variations[index].partialChildrenOnHold &&
    !variations[index].areAllOnHold
  ) {
    impossibleVariations.push(variations[index]);
  } else if (
    variations[index].areAllOnHold &&
    variations[index].processedAndSent &&
    !variations[index].hasProcessedOnHoldFile
  ) {
    impossibleVariations.push(variations[index]);
  } else {
    possibleVariations.push(variations[index]);
  }
}
// const uniqueImpossibleVariations = [...new Set(impossibleVariations)];

console.log(impossibleVariations);
console.log(possibleVariations.length);

describe ("getStatusColorSingleV2", () => {
  // Processed, Planned, Sent
  it("test 1", () => {
    const child = {
      onHold: true,
      parentHold: true,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.blue);
  });

  it("test 2", () => {
    const child = {
      onHold: false,
      parentHold: true,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.blue);
  });

  it("test 3", () => {
    const child = {
      onHold: true,
      parentHold: false,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.blue);
  });

  it("test 4", () => {
    const child = {
      onHold: false,
      parentHold: false,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.white);
  });


  // Processed, Planned, Sent
  it("test 1", () => {
    const child = {
      onHold: true,
      parentHold: true,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.yellow);
  });

  it("test 2", () => {
    const child = {
      onHold: false,
      parentHold: true,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.yellow);
  });

  it("test 3", () => {
    const child = {
      onHold: true,
      parentHold: false,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.yellow);
  });

  it("test 4", () => {
    const child = {
      onHold: false,
      parentHold: false,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.white);
  });

  // Processed, Planned, Sent
  it("test 1", () => {
    const child = {
      onHold: true,
      parentHold: true,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("test 2", () => {
    const child = {
      onHold: false,
      parentHold: true,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("test 3", () => {
    const child = {
      onHold: true,
      parentHold: false,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("test 4", () => {
    const child = {
      onHold: false,
      parentHold: false,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(child.onHold, child.status, child.parentHold);
    expect(result).toEqual(objColors.green);
  });

});

describe("getStatusColor", () => {

  // for (let index = 0; index < impossibleVariations.length; index++) {
  //   it(`loop ${index}`, () => {
  //     const result = getStatusColorV2(impossibleVariations[index]);
  //   expect(result).toEqual(objColors.white);
  // });
    
  //}
  // impossible statuses. They should return the lowest status

  // it("impossible 1", () => {
  //   const child = {
  //     partialChildrenOnHold: true,
  //     areAllOnHold: true,
  //     hasProcessedOnHoldFile: true,
  //     allPlanned: true,
  //     allProcessed: false,
  //     allSent: false,
  //     processedAndSent: false,
  //     processedAndPlanned: false,
  //     sentAndPlanned: false,
  //     allMixed: false,
  //   };
  //   const result = getStatusColorV2(child);
  //   expect(result).toEqual(objColors.yellow);
  // });

  // possible statuses
  it("status test 1", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: true,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.white);
  });

  it("status test 2", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: true,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.white);
  });

  it("status test 3", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.white);
  });

  it("status test 4", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: true,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightgreen);
  });

  it("status test 5", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: true,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightgreen);
  });

  it("status test 6", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightgreen);
  });

  it("status test 7", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: true,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 8", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: true,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 9", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: true,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.green);
  });

  it("status test 10 - partialChildrenOnHold, processedAndSent", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: true,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 11", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: true,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightyellow);
  });

  it("status test 12 - partialChildrenOnHold, processedAndPlanned ", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 13", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: true,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightyellow);
  });

  it("status test 14 - partialChildrenOnHold, allMixed", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 15", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 16", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 17", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: true,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.yellow);
  });

  it("status test 18", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: true,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.yellow);
  });

  it("status test 19", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 20", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 21", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 22", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 23", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: true,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 24", () => {
    const child = {
      partialChildrenOnHold: false,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: true,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 25", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: true,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 26", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: true,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 27", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: true,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.yellow);
  });
  it("status test 28", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: true,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });
  it("status test 29", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: true,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });
  it("status test 30", () => {
    const child = {
      artialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: true,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 31", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });
  it("status test 32", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 33", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: true,
      allMixed: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.yellow);
  });
  it("status test 34", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });
  it("status test 35", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: true,
      hasProcessedOnHoldFile: false,
      allPlanned: false,
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });
});
