function changeVocals(str) {
  var arr = [];
  var vocalWord = "aiueoAIUEO";
  var changeTo = "bjvfpBJVFP";
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
    for (let j = 0; j < vocalWord.length; j++) {
      if (arr[i] === vocalWord[j]) {
        arr[i] = changeTo[j];
      }
    }
  }
  newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i];
  }
  return newStr;
}

function reverseWord(str) {
  var reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

function setLowerUpperCase(str) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var toArr = [];
  for (let i = 0; i < str.length; i++) {
    toArr.push(str[i]);
    for (let j = 0; j < upper.length; j++) {
      if (toArr[i] === upper[j]) {
        toArr[i] = lower[j];
      } else if (toArr[i] === lower[j]) {
        toArr[i] = upper[j];
      }
    }
  }
  var strSize = "";
  for (let i = 0; i < toArr.length; i++) {
    strSize += toArr[i];
  }
  return strSize;
}

function removeSpaces(str) {
  str += " ";
  var arrSpc = [];
  var temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      arrSpc.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  var result = "";
  for (let i = 0; i < arrSpc.length; i++) {
    result += arrSpc[i];
  }
  return result;
}

function passwordGenerator(name) {
  var vokal = changeVocals(name);
  var backward = reverseWord(vokal);
  var setSize = setLowerUpperCase(backward);
  var noSpace = removeSpaces(setSize);
  if (noSpace.length >= 5) {
    return noSpace;
  } else {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
