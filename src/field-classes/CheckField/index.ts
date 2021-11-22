import { PDFForm, PDFCheckBox } from "pdf-lib";

class CheckField {
  private field: PDFCheckBox;

  constructor(form: PDFForm, fieldName: string) {
    this.field = form.getCheckBox(fieldName);
  }

  toggle(value: boolean) {
    if (value) this.field.check();
    else this.field.uncheck();
  }
}

export default CheckField;
