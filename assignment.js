// assignment:1 [kilometer to meter ]

function kilometerToMeter(number) {
    if (number < 0) return "Length cannot be a negative number";
    result = number * 1000;
    return result;
  }
  
  // assignment:2 [budget calculator]
  
  function budgetCalculator(clock, mobile, laptop) {
    if (clock < 0 || mobile < 0 || laptop < 0)
      return "Number of elements cannot negative";
    var clockPrice = clock * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var total = clockPrice + mobilePrice + laptopPrice;
    return total;
  }
  
  // assignment:3 [hotel cost]
  function hotelCost(days) {
    if (days < 0) return "Number of days cannot start with a negative sign.";
    var finalCost = 0;
    if (days <= 10) {
      var cost = days * 100;
      finalCost = cost;
    } else if (days <= 20) {
      var cost = 100 * 10;
      var updateDays = days - 10;
      var updateCost = cost + updateDays * 80;
      finalCost = updateCost;
    } else {
      var cost = 1800;
      var finalDays = days - 20;
      var finalCost = cost + finalDays * 50;
    }
    return finalCost;
  }
  
  // assignment:4 [mega friend]
  
  function megaFriend(myFriendsList) {
    var megaName = myFriendsList[0];
    for (var i = 0; i < myFriendsList.length; i++) {
      let elements = myFriendsList[i].length;
      for (var j = 0; j < elements; j++) {
        if (
          (myFriendsList[i][j] >= "A" && myFriendsList[i][j] <= "Z") ||
          (myFriendsList[i][j] >= "a" && myFriendsList[i][j] <= "z") ||
          myFriendsList[i][j] == "."
        ) 
        {
          continue;
        } 
        else {
          return "Name cannot contains special character.";
        }
      }
      if (megaName.length < elements) {
        megaName = myFriendsList[i];
      }
    }
    return megaName;
  }
  