import { PDFDocument, PDFFont, RGB } from "pdf-lib";

class Form {
  pdfDoc: PDFDocument;
  pdfFont: PDFFont;
  fontSize: number;
  fontColor: RGB;

  constructor(
    pdfDoc: PDFDocument,
    pdfFont: PDFFont,
    fontSize: number,
    fontColor: RGB
  ) {
    this.pdfDoc = pdfDoc;
    this.pdfFont = pdfFont;
    this.fontSize = fontSize;
    this.fontColor = fontColor;
  }

  async save() {
    return await this.pdfDoc.save();
  }
}

export default Form;
