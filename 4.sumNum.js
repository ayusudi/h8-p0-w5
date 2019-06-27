function totalDigitRekursif(angka) {
  var strNum = angka.toString();
  if (strNum.length < 2) {
    return angka;
  } else {
    return Number(strNum[0]) + totalDigitRekursif(Number(strNum.slice(1)));
  }
}

//TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
