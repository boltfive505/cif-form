import { PDFForm, PDFRadioGroup } from "pdf-lib";

class RadioField<T> {
  private field: PDFRadioGroup;

  constructor(form: PDFForm, fieldName: string) {
    this.field = form.getRadioGroup(fieldName);
  }

  select(option?: T) {
    this.field.select(new String(option).toString());
  }
}

export default RadioField;
