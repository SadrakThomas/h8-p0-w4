// function cariModus(arr){
//     var result = 0;
//     var unik = [];
//     var temp = [];

// for (var i=0; i < arr.length; i++){
//    var data = unik.indexOf(arr[i])
//    if (data === -1){
//        unik.push(arr[i])
//        temp.push(1)
//    } else if (data !== -1){
//        temp[data] = temp[data] + 1
//     //    console.log(arr)
//     }
     
// }
// // for (var j = 0; j < temp.length; j++){
// //     if (temp[j] > 1 && unik.length > 1){
// //         result = unik[j]
// //     }
// // }
// return result
// }

function cariModus(arr) {
    var numAndVal = [];
    var index = 0;
  
    var highestIndex = 0;
  
    for (var i = 0; i < arr.length; i++) {
      var val = 1;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          numAndVal.push([]);
          numAndVal[index].push(arr[i]);
          val = val + 1;
          numAndVal[index].push(val);
          index = index + 1;
  
        }
      }
    }
  
    var highest = 0;
  
    if (numAndVal[0] === undefined) {
      return - 1;
    } else {
      highest = numAndVal[0][1];
      for (var k = 0; k < numAndVal.length; k++) {
        if (numAndVal[k][1] === arr.length) {
          return -1;
        } else if (numAndVal.length === 1) {
          return numAndVal[0][0];
        } else if (highest === numAndVal[k][1]){
          highest = highest;
          highestIndex = highestIndex;
          if (highest < numAndVal[k][1]) {
            highest = numAndVal[k][1];
            highestIndex = k;
          }
        }
      }
    }
  
    return numAndVal[highestIndex][0];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5,])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1