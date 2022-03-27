function daleeFn() {
  // формирование списка
  const values = g1.getRange("A2:K61").getValues();

  values[0][7] = "Пролечен";
  values[0][10] = new Date();

  if (values[1][7] != "Пролечен") {
    values[1][7] = "На укладку";
    values[1][9] = new Date();
  }
  if (values[2][7] != "Пролечен") {
    values[2][7] = "Далее";
  }
  if (values[3][7] != "Пролечен") {
    values[3][7] = "Далее";
  }

  // сортируем список по статусам
  const naUkladku = values.filter((e) => e[7] == "На укладку"),
    dalee = values.filter((e) => e[7] == "Далее"),
    pustoyStatus = values.filter((e) => e[7] == "" && e[1] != ""),
    prolechen = values
      .filter((e) => e[7] == "Пролечен")
      .sort((a, b) => a[0] - b[0]),
    otmena = values.filter((e) => e[7] == "Отмена");

  const newArr = [naUkladku, dalee, pustoyStatus, prolechen, otmena].flat();

  g1.getRange(2, 1, newArr.length, newArr[0].length).setValues(newArr);

  newArr.forEach((el, i) => {
    if (el[7] == "Пролечен") {
      // Logger.log('Пролечен: ' + (i + 2))
      g1.getRange(i + 2, 1, 1, 14)
        .setBackground("#6aa84f")
        .setFontColor("white");
    }
    if (el[7] == "На укладку") {
      // Logger.log('На укладку: ' + (i + 2))
      g1.getRange(i + 2, 1, 1, 14)
        .setBackground("#ff6d01")
        .setFontColor("white");
    }
    if (el[7] == "Далее") {
      // Logger.log('Далее: ' + (i + 2))
      g1.getRange(i + 2, 1, 1, 14)
        .setBackground("#ffff00")
        .setFontColor("black");
    }
    if (el[7] == "Отмена") {
      // Logger.log('Отмена: ' + (i + 2))
      g1.getRange(i + 2, 1, 1, 14)
        .setBackground("#e06666")
        .setFontColor("white");
    }
    if (el[7] == "") {
      // Logger.log('Пусто: ' + (i + 2))
      g1.getRange(i + 2, 1, 1, 14)
        .setBackground("white")
        .setFontColor("black");
    }
  });

  flagDalee.uncheck();
}

// #ff6d01 - оранжевый На укладку
// #ffff00 - желтый Далее
// #6aa84f - зеленый Пролечен
// #e06666 - красный Отмена

// function sort1() {
//   const values = g1.getRange('A2:K61').getValues()
//   const prolechen = values.filter(e => e[7] == 'Пролечен')

//   Logger.log(prolechen)
//   prolechen.sort((a, b) => a[0] - b[0])
//   Logger.log(prolechen)
// }
