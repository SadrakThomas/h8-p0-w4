function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaArr = angka.toString() //String(angka)
    var angkaDepan = angkaArr[0]
    var angkaSisa = angkaArr.slice(1)
  
      if(angkaSisa.length === 0){
          return parseInt(angkaDepan)       
      }else{
          return parseInt(angkaDepan) + totalDigitRekursif(parseInt(angkaSisa))
      }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5
  
  
  // console.log(Number(String(5))+String(5))
  
  // arr1 = 'selamat, ulang-tahun, bla bla bla';
  // //['selamat', 'ulang', 'tahun', 'bla', 'bla', 'bla']
  // arr1 = arr1.split(' ').join(',').split('-').join(',').split(',');
  // console.log(arr1);