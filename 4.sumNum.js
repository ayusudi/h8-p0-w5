function totalDigitRekursif(angka) {
    var str =angka.toString()
  if (str.length < 2) {
    return angka;
  } else {
    return (
      Number(str[0]) +
      totalDigitRekursif(Number(str.slice(1)))
    );
  }
}

//TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
