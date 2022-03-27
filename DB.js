function dbRead() {
  let patient = as.getRange("T1").getValue();
  let rangeDB = db.getRange("A:A").getValues().flat();
  let i = rangeDB.indexOf(patient);
  let row = i + 1;
  let patientData = db
    .getRange("D" + row + ":AQ" + row)
    .getValues()
    .flat();
  patientData.forEach((el, i) => as.getRange(koordinaty[i]).setValue(el));
}

function dbSave() {
  let patient = as.getRange(patientA1).getValue();
  let rangeDB = db.getRange("A:A").getValues().flat();
  let i = rangeDB.indexOf(patient);
  let row = i + 1;
  // Logger.log(row)
  let j = koordinaty.indexOf(arA1);
  // Logger.log(j)
  let col = j + 4;
  // Logger.log(col)
  db.getRange(row, col).setValue(aVal);
}
