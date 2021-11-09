import { PDFPage } from "pdf-lib";
import Form from "../Form";
import { labelFontSize } from "src/utils";

class Page {
  form: Form;
  pdfPage: PDFPage;
  xOrigin: number;
  yOrigin: number;

  constructor(form: Form, pdfPage: PDFPage, xOrigin: number, yOrigin: number) {
    this.form = form;
    this.pdfPage = pdfPage;
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;

    // set default values
    this.pdfPage.setFont(form.pdfFont);
    this.pdfPage.setFontSize(form.fontSize);
    this.pdfPage.setFontColor(form.fontColor);
  }

  getTextWidth(text: string) {
    return this.form.pdfFont.widthOfTextAtSize(text, labelFontSize);
  }
}

export default Page;
