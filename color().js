function color() {
  let data = as.getRange("A2:N61").getValues();

  data.forEach((el, i) => {
    let row = i + 2;
    if (!el[2].includes("🆕")) {
      switch (el[7]) {
        case "На укладку":
          as.getRange(row, 1, 1, 14)
            .setBackground("#ff6d01")
            .setFontColor("white");
          break;
        case "Далее":
          as.getRange(row, 1, 1, 14)
            .setBackground("#ffff00")
            .setFontColor("black");
          break;
        case "Пролечен":
          as.getRange(row, 1, 1, 14)
            .setBackground("#6aa84f")
            .setFontColor("white");
          break;
        case "Отмена":
          as.getRange(row, 1, 1, 14)
            .setBackground("#e06666")
            .setFontColor("white");
          break;
        case "":
          as.getRange(row, 1, 1, 14)
            .setBackground("white")
            .setFontColor("black");
          break;
      }
    } else {
      as.getRange(row, 1, 1, 14).setBackground("#a4c2f4").setFontColor("black");
    }
  });
}

// Logger.log() 123
