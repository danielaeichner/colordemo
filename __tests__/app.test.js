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

// for (let index1 = 0; index1 < 2; index1++) {
  
//   for (let index2 = 0; index2 < 2; index2++) {
    
      
//       for (let index4 = 0; index4 < 2; index4++) {
  
//         for (let index5 = 0; index5 < 2; index5++) {
//           for (let index6 = 0; index6 < 2; index6++) {
//             for (let index7 = 0; index7 < 2; index7++) {
//               for (let index8 = 0; index8 < 3; index8++) {
//                 for (let index9 = 0; index9 < 3; index9++) {

//                   const id1 = `${index1}${index2}${index6}${index7}${index9}${index4}${index5}${index8}`;
//                   const id2 = `${index1}${index2}${index4}${index5}${index8}${index6}${index7}${index9}`;
//                   if(!ids.includes(id1) && !ids.includes(id2)) {
                    
                  
//                   const child = {
//         id: 1,
//         onHold: index1 === 0 ? false : true,
//         parentHold: index2 === 0 ? false : true,
        
//         list: [

//           { id: 2,
//             onHold: index4 === 0 ? false : true,
//             parentHold: index5 === 0 ? false : true,
          
//             fileStatus: index8 === 0 ? "Processed" : index8 === 1 ? "Planned" : "Sent",},
//           {
//             id: 3,
//             onHold: index6 === 0 ? false : true,
//             parentHold: index7 === 0 ? false : true,
//             fileStatus: index9 === 0 ? "Processed" : index8 === 1 ? "Planned" : "Sent",},
          
//         ]
//       };
//       all.push(child);
//     }
//     if(!ids.includes(id1)) {
//       ids.push(id1);
//     }
//     if(!ids.includes(id2)) {
//       ids.push(id2);
//     }


//     }}}}
//     }}
  
//   }
  
// }


const resultWhite = [
  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Planned"}]},
];
const resultBlue = [
  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
];
const resultYellow = [
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
];
const resultGreenYellow = [
  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
];
const resultGreen = [

  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},

];
const resultLightBlue = [
  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":true,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Sent"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":true,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":true,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Processed"}]},
];
const resultLightYellow = [
  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":false,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":false,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Planned"},{"id":3,"onHold":true,"parentHold":true,"fileStatus":"Planned"}]},

];

const resultLightGreen = [
  {"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":false,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":false,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
{"id":1,"onHold":true,"parentHold":true,"list":[{"id":2,"onHold":false,"parentHold":false,"fileStatus":"Processed"},{"id":3,"onHold":false,"parentHold":false,"fileStatus":"Sent"}]},
]


describe("setHoldStatus", () => {
  it("resultYellow", () => {
    for (let i = 0; i < resultYellow.length; i++) {
      const result = setHoldStatus(resultYellow[i]);
      expect(result.colorName).toEqual("Yellow");
    }
  });
  it("resultGreenYellow", () => {
    for (let i = 0; i < resultGreenYellow.length; i++) {
      const result = setHoldStatus(resultGreenYellow[i]);
      expect(result.colorName).toEqual("Green Yellow");
    }
  });
  it("resultBlue", () => {
    for (let i = 0; i < resultBlue.length; i++) {
      const result = setHoldStatus(resultBlue[i]);
      expect(result.colorName).toEqual("Blue");
    }
  });
  it("resultGreen", () => {
    for (let i = 0; i < resultGreen.length; i++) {
      const result = setHoldStatus(resultGreen[i]);
      expect(result.colorName).toEqual("Green");
    }
  });
  it("resultLightBlue", () => {
    for (let i = 0; i < resultLightBlue.length; i++) {
      const result = setHoldStatus(resultLightBlue[i]);
      expect(result.colorName).toEqual("Light Blue");
    }
  });
  it("LightYellow", () => {
    for (let i = 0; i < resultLightYellow.length; i++) {
      const result = setHoldStatus(resultLightYellow[i]);
      expect(result.colorName).toEqual("Light Yellow");
    }
  });
  it("white", () => {
    for (let i = 0; i < resultWhite.length; i++) {
      const result = setHoldStatus(resultWhite[i]);
      expect(result.colorName).toEqual("White");
    }
  });
  it("resultLightGreen", () => {
    for (let i = 0; i < resultLightGreen.length; i++) {
      const result = setHoldStatus(resultLightGreen[i]);
      expect(result.colorName).toEqual("Light Green");
    }
  });
  it("test 1", () => {
    const tree = {
      id: 1,
      onHold: false,
      parentHold: false,
   
      list: [
        {
          id: 2,
          onHold: true,
          parentHold: false,
          fileStatus: "Processed",
        },
        {
          id: 4,
          onHold: false,
          parentHold: false,
          fileStatus: "Planned",
        },
      ],
    };
    const result = setHoldStatus(tree);
    expect(result).toEqual({
      id: 1,
      onHold: false,
      parentHold: false,

      colorName: "Light Blue",
      color: "rgb(3, 155, 229, 0.3)",
      list: [
        {
          id: 2,
          onHold: true,
          parentHold: false,
          fileStatus: "Processed",
        },
        {
          id: 4,
          onHold: false,
          parentHold: false,
          fileStatus: "Planned",
        },
      ],
    });
  });

  it("test 2", () => {
    const tree = {
      id: 1,
      onHold: false,
      parentHold: false,

      list: [
        {
          id: 2,
          onHold: true,
          parentHold: false,
          fileStatus: "Sent",
        },
        {
          id: 4,
          onHold: false,
          parentHold: false,
          fileStatus: "Sent",
        },
      ],
    };
    const result = setHoldStatus(tree);
    expect(result.colorName).toEqual("Green Yellow");
  });
  
});

describe("getStatusColorSingleV2", () => {
  // Processed, Planned, Sent
  it("test 1", () => {
    const child = {
      onHold: true,
      parentHold: true,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.blue);
  });

  it("test 2", () => {
    const child = {
      onHold: false,
      parentHold: true,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.blue);
  });

  it("test 3", () => {
    const child = {
      onHold: true,
      parentHold: false,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.blue);
  });

  it("test 4", () => {
    const child = {
      onHold: false,
      parentHold: false,
      status: "Processed",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.white);
  });

  // Processed, Planned, Sent
  it("test 1", () => {
    const child = {
      onHold: true,
      parentHold: true,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.yellow);
  });

  it("test 2", () => {
    const child = {
      onHold: false,
      parentHold: true,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.yellow);
  });

  it("test 3", () => {
    const child = {
      onHold: true,
      parentHold: false,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.yellow);
  });

  it("test 4", () => {
    const child = {
      onHold: false,
      parentHold: false,
      status: "Planned",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.white);
  });

  // Processed, Planned, Sent
  it("test 1", () => {
    const child = {
      onHold: true,
      parentHold: true,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.greenyellow);
  });

  it("test 2", () => {
    const child = {
      onHold: false,
      parentHold: true,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.greenyellow);
  });

  it("test 3", () => {
    const child = {
      onHold: true,
      parentHold: false,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.greenyellow);
  });

  it("test 4", () => {
    const child = {
      onHold: false,
      parentHold: false,
      status: "Sent",
    };
    const result = getStatusColorSingleV2(
      child.onHold,
      child.status,
      child.parentHold
    );
    expect(result).toEqual(objColors.green);
  });
});
