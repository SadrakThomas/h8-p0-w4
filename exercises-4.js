function cariModus(arr){
    var result = 0;
    var unik = [];
    var temp = [];

for (var i=0; i < arr.length; i++){
   var data = unik.indexOf(arr[i])
   if (data === -1){
       unik.push(arr[i])
       temp.push(1)
   } else if (data !== -1){
       temp[data] = temp[data] + 1
    //    console.log(arr)
    }
     
}
// for (var j = 0; j < temp.length; j++){
//     if (temp[j] > 1 && unik.length > 1){
//         result = unik[j]
//     }
// }
return result
}


console.log(cariModus([10, 4, 5, 2, 4])) //4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1