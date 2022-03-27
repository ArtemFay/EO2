function statusFn() {
  // вставка времени
  if (aVal == "Пролечен") {
    ar.offset(0, 3).setValue(new Date());
  }
  if (aVal == "На укладку") {
    ar.offset(0, 2).setValue(new Date());
  }

  // сортируем список по статусам
  const values = as.getRange("A2:K61").getValues();
  const naUkladku = values.filter((e) => e[7] == "На укладку"),
    dalee = values.filter((e) => e[7] == "Далее"),
    pustoyStatus = values.filter((e) => e[7] == "" && e[1] != ""),
    prolechen = values
      .filter((e) => e[7] == "Пролечен")
      .sort((a, b) => a[0] - b[0]),
    otmena = values.filter((e) => e[7] == "Отмена");

  // нумерация значений
  let arr = [naUkladku, dalee, pustoyStatus].flat();

  arr.forEach((el, i) => (el[0] = prolechen.length + (i + 1)));
  prolechen.forEach((el, i) => (el[0] = i + 1));
  otmena.forEach((el, i) => (el[0] = ""));

  const newArr = [arr, prolechen, otmena].flat();

  // вставка обработанного диапазона
  as.getRange(2, 1, newArr.length, newArr[0].length).setValues(newArr);
  color();
}

// закраска фона
// newArr.forEach(
//   (el, i) => {
//     let row = i + 2
//     switch (el[7]) {
//       case 'Пролечен': as.getRange(row, 1, 1, 14).setBackground('#6aa84f').setFontColor('white'); break
//       case 'На укладку': as.getRange(row, 1, 1, 14).setBackground('#ff6d01').setFontColor('white'); break
//       case 'Далее': as.getRange(row, 1, 1, 14).setBackground('#ffff00').setFontColor('black'); break
//       case 'Отмена': as.getRange(row, 1, 1, 14).setBackground('#e06666').setFontColor('white'); break
//       case '': as.getRange(row, 1, 1, 14).setBackground('white').setFontColor('black'); break
//     }
//   }
// )
