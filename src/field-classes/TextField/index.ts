import { PDFForm, PDFTextField } from "pdf-lib";

class TextField {
  private field: PDFTextField;

  constructor(form: PDFForm, fieldName: string) {
    this.field = form.getTextField(fieldName);
  }

  setText(text?: string) {
    this.field.setText(text);
  }
}

export default TextField;
