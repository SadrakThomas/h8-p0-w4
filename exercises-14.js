function sorting(arrNumber) {
    // code di sini
    var tampung = []
    // var tampCount = []
    for(i = 0; i < arrNumber.length; i++){
        for(j = i + 1 ; j < arrNumber.length; j++){
            if(arrNumber[i] < arrNumber[j]){
                var simpan = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = simpan
            }
        }
        // tampCount.push(count)
        tampung.push(arrNumber[i])
    }
    // console.log(tampung)
    return tampung
  }
  
  function getTotal(arrNumber) {
    // code di sini

    var counter = 0
    for(var k = 0; k < arrNumber.length; k++){
        if(arrNumber[k] === arrNumber[0]){
            counter = counter + 1
        }
    }
    if(counter === 0){
      return "''"
    }else{
      return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'
    }   
  } 
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }

  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
//''