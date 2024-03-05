import { describe, expect, it } from "@jest/globals";
import { getStatusColorSingleV2, getColorsV2 } from "../src/getStatusColorV2";
import { setHoldStatus } from "../src/childHold2";

const objColors = getColorsV2().objColors;

// const dummy = {
//   id: 1,
//   onHold: false,
//   parentHold: false,
//   list: [
//     {
//       id: 2,
//       onHold: true,
//       parentHold: false,
//       fileStatus: "Sent",
//     },
//     {
//       id: 4,
//       onHold: false,
//       parentHold: false,
//       fileStatus: "Sent",
//     },
//   ],
// };

// const all = [];
// const ids = [];
// let count = 0;
// for (let index1 = 0; index1 < 2; index1++) {
//   for (let index4 = 0; index4 < 2; index4++) {
//     for (let index6 = 0; index6 < 2; index6++) {
//       for (let index8 = 0; index8 < 3; index8++) {
//         for (let index9 = 0; index9 < 3; index9++) {
//           const id1 = `${index1}${index6}${index9}${index4}${index8}`;
//           const id2 = `${index1}${index4}${index8}${index6}${index9}`;
//           if (!ids.includes(id1) && !ids.includes(id2)) {
//             count = count +1;
//             const child = {
//               id: count,
//               onHold: index1 === 0 ? false : true,

//               list: [
//                 {
//                   id: 2,
//                   onHold: index4 === 0 ? false : true,
//                   fileStatus:
//                     index8 === 0
//                       ? "Processed"
//                       : index8 === 1
//                       ? "Planned"
//                       : "Sent",
//                 },
//                 {
//                   id: 3,
//                   onHold: index6 === 0 ? false : true,
//                   fileStatus:
//                     index9 === 0
//                       ? "Processed"
//                       : index8 === 1
//                       ? "Planned"
//                       : "Sent",
//                 },
//               ],
//             };
//             all.push(child);
//           }
//           if (!ids.includes(id1)) {
//             ids.push(id1);
//           }
//           if (!ids.includes(id2)) {
//             ids.push(id2);
//           }
//         }
//       }
//     }
//   }
// }
// console.log(JSON.stringify(all));

const variations = 
[{"id":1,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"fileStatus":"Processed"}]},
{"id":2,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"fileStatus":"Sent"}]},
{"id":3,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"fileStatus":"Planned"}]},
{"id":4,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"fileStatus":"Sent"}]},
{"id":5,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":6,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":7,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":8,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"fileStatus":"Planned"}]},
{"id":9,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":10,"onHold":false,"list":[{"id":2,"onHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":11,"onHold":false,"list":[{"id":2,"onHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":12,"onHold":false,"list":[{"id":2,"onHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":13,"onHold":false,"list":[{"id":2,"onHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"fileStatus":"Planned"}]},
{"id":14,"onHold":false,"list":[{"id":2,"onHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":15,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"fileStatus":"Processed"}]},
{"id":16,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"fileStatus":"Sent"}]},
{"id":17,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"fileStatus":"Planned"}]},
{"id":18,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"fileStatus":"Sent"}]},
{"id":19,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":20,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":21,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":22,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"fileStatus":"Planned"}]},
{"id":23,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":24,"onHold":true,"list":[{"id":2,"onHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":25,"onHold":true,"list":[{"id":2,"onHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Processed"}]},
{"id":26,"onHold":true,"list":[{"id":2,"onHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"fileStatus":"Sent"}]},
{"id":27,"onHold":true,"list":[{"id":2,"onHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"fileStatus":"Planned"}]},
{"id":28,"onHold":true,"list":[{"id":2,"onHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"fileStatus":"Sent"}]}];



describe("setHoldStatus", () => {
  it("test 1", () => {
      const result = setHoldStatus(variations[0]);
      expect(result.colorName).toEqual("White");
  });
  it("test 2", () => {
    const result = setHoldStatus(variations[1]);
    expect(result.colorName).toEqual("Light Green");
});

it("test 3", () => {
  const result = setHoldStatus(variations[2]);
  expect(result.colorName).toEqual("White");
});

it("test 4", () => {
  const result = setHoldStatus(variations[3]);
  expect(result.colorName).toEqual("Green");
});
});
  // it("resultGreenYellow", () => {
  //   for (let i = 0; i < resultGreenYellow.length; i++) {
  //     const result = setHoldStatus(resultGreenYellow[i]);
  //     expect(result.colorName).toEqual("Green Yellow");
  //   }
  // });
  // it("resultBlue", () => {
  //   for (let i = 0; i < resultBlue.length; i++) {
  //     const result = setHoldStatus(resultBlue[i]);
  //     expect(result.colorName).toEqual("Blue");
  //   }
  // });
  // it("resultGreen", () => {
  //   for (let i = 0; i < resultGreen.length; i++) {
  //     const result = setHoldStatus(resultGreen[i]);
  //     expect(result.colorName).toEqual("Green");
  //   }
  // });
  // it("resultLightBlue", () => {
  //   for (let i = 0; i < resultLightBlue.length; i++) {
  //     const result = setHoldStatus(resultLightBlue[i]);
  //     expect(result.colorName).toEqual("Light Blue");
  //   }
  // });
  // it("LightYellow", () => {
  //   for (let i = 0; i < resultLightYellow.length; i++) {
  //     const result = setHoldStatus(resultLightYellow[i]);
  //     expect(result.colorName).toEqual("Light Yellow");
  //   }
  // });
  // it("white", () => {
  //   for (let i = 0; i < resultWhite.length; i++) {
  //     const result = setHoldStatus(resultWhite[i]);
  //     expect(result.colorName).toEqual("White");
  //   }
  // });
  // it("resultLightGreen", () => {
  //   for (let i = 0; i < resultLightGreen.length; i++) {
  //     const result = setHoldStatus(resultLightGreen[i]);
  //     expect(result.colorName).toEqual("Light Green");
  //   }
  // });
//   it("test 1", () => {
//     const tree = {
//       id: 1,
//       onHold: false,
//       parentHold: false,

//       list: [
//         {
//           id: 2,
//           onHold: true,
//           parentHold: false,
//           fileStatus: "Processed",
//         },
//         {
//           id: 4,
//           onHold: false,
//           parentHold: false,
//           fileStatus: "Planned",
//         },
//       ],
//     };
//     const result = setHoldStatus(tree);
//     expect(result).toEqual({
//       id: 1,
//       onHold: false,
//       parentHold: false,

//       colorName: "Light Blue",
//       color: "rgb(3, 155, 229, 0.3)",
//       list: [
//         {
//           id: 2,
//           onHold: true,
//           parentHold: false,
//           fileStatus: "Processed",
//         },
//         {
//           id: 4,
//           onHold: false,
//           parentHold: false,
//           fileStatus: "Planned",
//         },
//       ],
//     });
//   });

//   it("test 2", () => {
//     const tree = {
//       id: 1,
//       onHold: false,
//       parentHold: false,

//       list: [
//         {
//           id: 2,
//           onHold: true,
//           parentHold: false,
//           fileStatus: "Sent",
//         },
//         {
//           id: 4,
//           onHold: false,
//           parentHold: false,
//           fileStatus: "Sent",
//         },
//       ],
//     };
//     const result = setHoldStatus(tree);
//     expect(result.colorName).toEqual("Green Yellow");
//   });
// });

// describe("getStatusColorSingleV2", () => {
//   // Processed, Planned, Sent
//   it("test 1", () => {
//     const child = {
//       onHold: true,
//       parentHold: true,
//       status: "Processed",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.blue);
//   });

//   it("test 2", () => {
//     const child = {
//       onHold: false,
//       parentHold: true,
//       status: "Processed",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.blue);
//   });

//   it("test 3", () => {
//     const child = {
//       onHold: true,
//       parentHold: false,
//       status: "Processed",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.blue);
//   });

//   it("test 4", () => {
//     const child = {
//       onHold: false,
//       parentHold: false,
//       status: "Processed",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.white);
//   });

//   // Processed, Planned, Sent
//   it("test 1", () => {
//     const child = {
//       onHold: true,
//       parentHold: true,
//       status: "Planned",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.yellow);
//   });

//   it("test 2", () => {
//     const child = {
//       onHold: false,
//       parentHold: true,
//       status: "Planned",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.yellow);
//   });

//   it("test 3", () => {
//     const child = {
//       onHold: true,
//       parentHold: false,
//       status: "Planned",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.yellow);
//   });

//   it("test 4", () => {
//     const child = {
//       onHold: false,
//       parentHold: false,
//       status: "Planned",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.white);
//   });

//   // Processed, Planned, Sent
//   it("test 1", () => {
//     const child = {
//       onHold: true,
//       parentHold: true,
//       status: "Sent",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.greenyellow);
//   });

//   it("test 2", () => {
//     const child = {
//       onHold: false,
//       parentHold: true,
//       status: "Sent",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.greenyellow);
//   });

//   it("test 3", () => {
//     const child = {
//       onHold: true,
//       parentHold: false,
//       status: "Sent",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.greenyellow);
//   });

//   it("test 4", () => {
//     const child = {
//       onHold: false,
//       parentHold: false,
//       status: "Sent",
//     };
//     const result = getStatusColorSingleV2(
//       child.onHold,
//       child.status,
//       child.parentHold
//     );
//     expect(result).toEqual(objColors.green);
//   });
// });
