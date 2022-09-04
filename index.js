  let input = require('readline-sync');

  let info = input.question("Which die do you need to roll? ") 
    
    if (info == "4") {
      console.log(Math.floor(Math.random() * 4) + 1);
    } else if (info == "6") {
      console.log(Math.floor(Math.random() * 6) + 1);
    } else if (info == "8") {
      console.log(Math.floor(Math.random() * 8) + 1);
    } else if (info == "10") {
      console.log(Math.floor(Math.random() * 10) + 1);
    } else if (info == "12") {
      console.log(Math.floor(Math.random() * 12) + 1);
    } else if (info == "20") {
      console.log(Math.floor(Math.random() * 20) + 1);
    } else if (info == "100") {
      console.log(Math.floor(Math.random() * 100) + 1);
    } else {
      console.log("Error")
    }
