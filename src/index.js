module.exports = function check(str, bracketsConfig) {

  var checkStr = "";
  var isEqual = false;

  bracketsConfig.forEach((row, i, array) => {
    if (row[0] === row[1]) isEqual = true;
  });

  for (i = 0; i < str.length; i++) {
    bracketsConfig.forEach((row, n) => {


      //console.log(i, str[i], checkStr, row);

      if (isEqual === false) {
        if (str[i] === row[0]) checkStr += str[i]
        else if (str[i] === row[1] && checkStr[checkStr.length-1] === row[0]) checkStr = checkStr.slice(0, -1)  
      } else {
          if (row[0] === row[1]) {
            if (checkStr[checkStr.length-1] === row[1] && str[i] === row[0]) {
              checkStr = checkStr.slice(0, -1)
            } else if((checkStr[checkStr.length-1] !== row[1] || checkStr === "") && str[i] === row[0]) checkStr += str[i]
          } else {
            if (str[i] === row[0]) checkStr += str[i]
            else {
              if (str[i] === row[1] && checkStr[checkStr.length-1] === row[0]) {
                checkStr = checkStr.slice(0, -1)
              }
              else if (checkStr === "" && str[i] === row[1]) checkStr += str[i]
            }
          }        
      }
    });
      //console.log(str[i], checkStr);

  }
  if (checkStr === "") {
    return true
  } else {
    return false
  }

}

