/* 
=============
ИСПОЛЬЗУЮТ СВОИ ПЕРЕМЕННЫЕ
ПРИ ИМЕНЕНИИ СТРУКТУРЫ ТАБЛИЦЫ - МЕНЯТЬ ПЕРЕМЕННЫЕ ВНУТРИ ФУНКЦИИ 
    - status()
    - dalee()
=============
ИСПОЛЬЗУЮТ ПЕРЕМЕННЫЕ ТОЛЬКО С ЭТОГО ЛИСТА
ПРИ ИЗМЕНЕНИИ СТРУКТУРЫ ТАБЛИЦА - МЕНЯТЬ ПЕРЕМЕННЫЕ ТОЛЬКО НА ЭТОМ ЛИСТЕ
    - onEdit()
    - regimSw()
    - emoji()
*/

const // ТАБЛИЦА
  ss = SpreadsheetApp.getActive();

const // ПЕРЕМЕННЫЕ СОБЫТИЯ onEdit(e)
  as = ss.getActiveSheet(),
  ar = ss.getActiveRange(),
  aCol = ss.getActiveRange().getColumn(),
  aVal = ar.getValue(),
  arA1 = ss.getActiveRange().getA1Notation(),
  asName = as.getName();

const // ЛИСТЫ
  sett = ss.getSheetByName("set"),
  db = ss.getSheetByName("DB"),
  gSheet = ["G1", "G2", "G3", "G4", "P1", "P2"];

const // ФЛАГИ
  // flagNewDayA1 = 'BI3',
  flagDaleeA1 = "AZ1",
  flagDalee = as.getRange(flagDaleeA1);

const // АДРЕСА ЯЧЕЕК И ДИАПАЗОНОВ A1Notation
  regimA1 = "B1",
  patientA1 = "T1",
  spisokSistem = "B2:B20";

const koordinaty = [
  "P3",
  "U4",
  "U5",
  "U6",
  "U7",
  "U8",
  "U9",
  "U10",
  "W11",
  "W12",
  "W13",
  "W14",
  "W15",
  "W16",
  "W17",
  "W18",
  "W19",
  "P20",
  "P23",
  "R27",
  "T28",
  "T29",
  "T30",
  "T31",
  "T32",
  "T33",
  "T34",
  "T35",
  "T36",
  "T37",
  "X28",
  "X29",
  "X30",
  "X31",
  "X32",
  "X33",
  "X34",
  "X35",
  "X36",
  "X37",
];

const // СТРУКТУРА ГЛАВНОГО ЛИСТА A1Notation
  num = "A1",
  patient = "B1",
  emoji = "C1",
  emojiDV = "D1",
  sistema = "E1",
  comment = "F1",
  podgotov = "G1",
  statusP = "H1",
  otpr = "I1",
  startStopFakt = "J1:L1",
  srednProgn = "M1:N1",
  patientInf = "O1:AA1",
  histTreat = "AB1:AH1",
  logSoobsh = "AI1:AR1",
  dalee = "AS1:BA1",
  nastroySort = "BB1:BJ1",
  newPatient = "BK1:BS1";

const // СТРОКИ
  // РЕЖИМЫ ПЕРЕКЛЮЧЕНИЯ СТРУКТУРЫ ЛИСТА
  lechenie = "ЛЕЧЕНИЕ",
  spisok = "СПИСОК",
  sortirovka = "СОРТИРОВКА",
  podgotovka = "ПОДГОТОВКА";

// СТАТУСЫ ЛЕЧЕНИЯ

const // СТОЛБЦЫ ПО НОМЕРАМ
  emojiDVCol = 4,
  statusCol = 8,
  emojiCol = 3;

const ruleValidation = SpreadsheetApp.newDataValidation()
  .requireValueInRange(sett.getRange(spisokSistem))
  .build();
