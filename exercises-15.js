function changeVocals (str) {
    //code di sini
    str = str.split('')
    let vocalKecil = 'aiueoAIUEO'
    let abdjadKecil = 'bjvfpBJVFP'
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vocalKecil.length; j++){
              if(str[i] === vocalKecil[j]){
                  str[i] = abdjadKecil[j]
          }
        }
    }
    return str.join('')
  }
  
  function reverseWord (str) {
    //code di sini
    let tamStr = ''
    for (let k = str.length-1; k > 0; k--){
      tamStr += str[k]
    }
    return tamStr
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    // let kecil = 'abcdefghijklmnopqrstuvwxyz'
    // let besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let hasil = ''
    for(let i = 0; i < str.length; i++){
      
      if (str[i] === str[i].toUpperCase()) {
        hasil += str[i].toLowerCase()
      } else  if (str[i] === str[i].toLowerCase()) {
        hasil += str[i].toUpperCase()
      } else {
        hasil += str[i]
      }
      // for(let m = 0; m < kecil.length; m++){
      //       if(str[l] === kecil[m]){
      //           hasil += str[l].toUpperCase()
      //           break;
      //       }
      // }
  
      // for(let n = 0; n < besar.length; n++){
      //     if(str[l] === besar[n]){
      //         hasil += str[l].toLowerCase()
      //         break;
      //     }
      // }
  
  
    }
    return hasil
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.split(' ').join('')
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  
    }
    var gantiVocal = changeVocals(name)
    var balikKata = reverseWord(gantiVocal)
    var swapHuruf = setLowerUpperCase(balikKata)
    var hapusSpasi = removeSpaces(swapHuruf)
    return hapusSpasi
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'