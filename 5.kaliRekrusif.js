function hasilKaliRekursif(angka) {
  var str = angka.toString()
  if (str.length > 1) {
    return Number(str[0]) * hasilKaliRekursif(Number(str.slice(1)))
  } else {
    return angka
  }
}


function kaliTerusRekursif(angka) {
  var nilai = hasilKaliRekursif(angka)  
  //console.log(nilai)
  if (nilai<10){
    return nilai
  }
  else {
    // console.log(nilai)
    return kaliTerusRekursif(nilai)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8 .
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0 .
// console.log(kaliTerusRekursif(3333)); // 8
