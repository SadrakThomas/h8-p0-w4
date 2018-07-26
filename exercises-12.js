function shoppingTime(memberId, money) {
    //   you can only write your code here!
      if(memberId === ''|| memberId === undefined || money === undefined){
        //   console.log ('Mohon maaf, toko X hanya berlaku untuk member saja')
          return ('Mohon maaf, toko X hanya berlaku untuk member saja')
      }else if (money < 50000){
        //   console.log ('Mohon maaf, uang tidak cukup')
          return ('Mohon maaf, uang tidak cukup')
      }
    
    var harga = [1500000, 500000, 250000, 175000, 50000]
    var barang = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&M', 'Sweater Uniklooh', 'Casing Handphone']
    var uang = money
    var tampBarang = []
    
    for(i = 0; i <= harga.length; i++){
        var saldo = money
            if(money >= harga[i]){
                money = money - harga[i]
                tampBarang.push(barang[i])
            }
        }
    var hasil = {
        memberId: memberId,
        money: uang,
        listPurchased: tampBarang,
        changeMoney: saldo
        }
        
    
    // console.log(tampBarang)
    return(hasil)
    }
    
    // TEST CASES
    console.log(shoppingTime('1820RzKrnWn08', 2475000));
      //{ memberId: '1820RzKrnWn08',
      // money: 2475000,
      // listPurchased:
      //  [ 'Sepatu Stacattu',
      //    'Baju Zoro',
      //    'Baju H&N',
      //    'Sweater Uniklooh',
      //    'Casing Handphone' ],
      // changeMoney: 0 }
    console.log(shoppingTime('82Ku8Ma742', 170000));
    //{ memberId: '82Ku8Ma742',
    // money: 170000,
    // listPurchased:
    //  [ 'Casing Handphone' ],
    // changeMoney: 120000 }
    console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
    console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
    console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja