function onEdit() {
  if (gSheet.includes(asName)) {
    if (aCol == emojiDVCol) {
      emojiFn();
    }
    if (aCol == statusCol) {
      statusFn();
    }
    if (aCol == emojiCol) {
      color();
    }

    if (arA1 == regimA1) {
      regimFn();
    }
    if (arA1 == patientA1) {
      dbRead();
    }

    if (koordinaty.includes(arA1)) {
      dbSave();
    }
    if (flagDalee.isChecked()) {
      daleeFn();
    }
  }
}
