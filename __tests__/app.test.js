import { describe, expect, it } from "@jest/globals";
import { getStatusColorV2, getColorsV2 } from "../src/getStatusColorV2";

const { objColors } = getColorsV2();

// if a parent is on hold, all children are on hold as well. onhold === areAllOnHold

// it('', () => {
//   const child = {
//     onHold: false,
//     partialChildrenOnHold: false,
//     areAllOnHold: false,
//     hasProcessedOnHoldFile: false,
//     allPlanned: false,
//     allProcessed: false,
//     allSent: false,
//     processedAndSent: false,
//     processedAndPlanned: false,
//     sentAndPlanned: false,
//     allMixed: false,
//     childHold: false,
//   };
//   const result = getStatusColorV2(child);
//   expect(result).toEqual(objColors.white);

describe("getStatusColor", () => {
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
      childHold: false,
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
      childHold: false,
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
      childHold: false,
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
      childHold: false,
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
      childHold: false,
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
      childHold: false,
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
      childHold: false,
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 10", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.green);
  });

  it("status test 11 - partialChildrenOnHold, processedAndSent", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightyellow);
  });

  it("status test 12", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightyellow);
  });

  it("status test 13 - partialChildrenOnHold, processedAndPlanned ", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.greenyellow);
  });

  it("status test 14", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightyellow);
  });

  it("status test 15 - partialChildrenOnHold, allMixed", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightyellow);
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
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 17", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 18", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.yellow);
  });

  it("status test 19", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.yellow);
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
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 21", () => {
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
      childHold: false,
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
      processedAndPlanned: true,
      sentAndPlanned: false,
      allMixed: false,
      childHold: false,
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
      allProcessed: false,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: true,
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.lightblue);
  });

  it("status test 24", () => {
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
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 25", () => {
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
      childHold: false,
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
      allProcessed: true,
      allSent: false,
      processedAndSent: false,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });

  it("status test 27", () => {
    const child = {
      partialChildrenOnHold: true,
      areAllOnHold: false,
      hasProcessedOnHoldFile: true,
      allPlanned: false,
      allProcessed: true,
      allSent: false,
      processedAndSent: true,
      processedAndPlanned: false,
      sentAndPlanned: false,
      allMixed: false,
      childHold: false,
    };
    const result = getStatusColorV2(child);
    expect(result).toEqual(objColors.blue);
  });
});
