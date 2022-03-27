let unhide = [];
let hide = [];

function regimFn() {
  const regimVal = as.getRange(regimA1).getValue().substring(5);
  switch (regimVal) {
    case lechenie:
      unhide = [
        num,
        patient,
        emoji,
        emojiDV,
        sistema,
        statusP,
        otpr,
        startStopFakt,
        srednProgn,
        patientInf,
        histTreat,
        logSoobsh,
        dalee,
      ];
      hide = [comment, podgotov, nastroySort, newPatient];
      unhide.forEach((el) => as.unhideColumn(as.getRange(el)));
      hide.forEach((el) => as.hideColumn(as.getRange(el)));
      break;
    case spisok:
      unhide = [num, patient, emoji, sistema, comment];
      hide = [
        emojiDV,
        statusP,
        otpr,
        startStopFakt,
        srednProgn,
        patientInf,
        histTreat,
        logSoobsh,
        dalee,
        podgotov,
        nastroySort,
        newPatient,
      ];
      unhide.forEach((el) => as.unhideColumn(as.getRange(el)));
      hide.forEach((el) => as.hideColumn(as.getRange(el)));
      break;
    case sortirovka:
      unhide = [
        num,
        patient,
        emoji,
        emojiDV,
        sistema,
        comment,
        podgotov,
        statusP,
        srednProgn,
        nastroySort,
      ];
      hide = [
        otpr,
        startStopFakt,
        patientInf,
        histTreat,
        logSoobsh,
        dalee,
        newPatient,
      ];
      unhide.forEach((el) => as.unhideColumn(as.getRange(el)));
      hide.forEach((el) => as.hideColumn(as.getRange(el)));
      break;
    case podgotovka:
      unhide = [num, patient, emoji, sistema, podgotov];
      hide = [
        emojiDV,
        comment,
        statusP,
        otpr,
        startStopFakt,
        srednProgn,
        patientInf,
        histTreat,
        logSoobsh,
        dalee,
        nastroySort,
        newPatient,
      ];
      unhide.forEach((el) => as.unhideColumn(as.getRange(el)));
      hide.forEach((el) => as.hideColumn(as.getRange(el)));
      break;
  }
}
