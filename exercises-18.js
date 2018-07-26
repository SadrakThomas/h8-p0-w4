
function kaliTerusRekursif(angka) {
    // you can only write your code here!
   var angkaStr = angka.toString()
   if(angkaStr.length < 2){
      return angka
   }
   var tampung = 1
   for(var i = 0; i < angkaStr.length; i++){
      // tampung += '*' + angkaStr[i]
      tampung *= parseInt(angkaStr[i])
   }
  //  console.log(tampung.length)
  var hasil = tampung.toString()
//   console.log('panjangnya adalah ' + hasil.length)
  return kaliTerusRekursif(tampung)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6

  