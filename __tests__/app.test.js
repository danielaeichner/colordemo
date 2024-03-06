import { describe, expect, it } from "@jest/globals";
import { setHoldStatus } from "../src/childHold2";

const allVariations = [];
const uniqueVariations = [];

const onHold = [true, false];
const fileStatus = ["Planned", "Processed", "Sent"];
let count = 0;
onHold.forEach(onHold1 => {
  onHold.forEach(onHold2 => {
    fileStatus.forEach(status1 => {
      fileStatus.forEach(status2 => {
        if(!uniqueVariations.includes(`${onHold1}-${status1}-${onHold2}-${status2}`) &&         
        !uniqueVariations.includes(`${onHold2}-${status2}-${onHold1}-${status1}`)) {
        uniqueVariations.push(`${onHold1}-${status1}-${onHold2}-${status2}`);
        count = count + 1;
        allVariations.push({  id: count,list: [
          { onHold: onHold1, fileStatus: status1 },
          { onHold: onHold2, fileStatus: status2 },
        ],});
        }
      });
    });
  });
});

const colorResults =[
  "Yellow",
  "Light Blue",
  "Light Yellow",
  "Blue",
  "Light Blue",
  "Green Yellow",
  "Light Yellow",
  "Light Yellow",
  "Light Yellow",
  "Light Blue",
  "Light Blue",
  "Light Blue",
  "Green Yellow",
  "Green Yellow",
  "Green Yellow",
  "White",
  "White",
  "Light Green",
  "White",
  "Light Green",
  "Green"

]

describe("setHoldStatus", () => {
  it("test 1", () => {
    for (let i = 0; i < allVariations.length; i++) {
      const result = setHoldStatus(allVariations[i]);
      expect(result.colorName).toEqual(colorResults[i]);
    }
  });
});