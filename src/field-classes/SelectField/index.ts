import { PDFForm, PDFDropdown } from "pdf-lib";

class SelectField<T> {
  private field: PDFDropdown;

  constructor(form: PDFForm, fieldName: string) {
    this.field = form.getDropdown(fieldName);
  }

  select(option?: T) {
    if (!option) return;
    this.field.select(new String(option).toString());
  }
}

export default SelectField;
