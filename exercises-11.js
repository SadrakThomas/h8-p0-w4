function changeMe(arr) {
    // you can only write your code here!
    for(i = 0; i < arr.length; i++){
      var artist = {}
      var title = i+1 + '. ' + arr[i][0] + ' ' + arr[i][1]
      artist.firstName = arr[i][0]
      artist.lastname = arr[i][1]
      artist.gender = arr[i][2]
      if(arr[i][3] === undefined){
        artist.age = 'Invalid Birth Year'
      }else{
        artist.age = 2018 - arr[i][3]
      }
      console.log(title)
      console.log(artist)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""