import { PDFDocument, StandardFonts, PDFFont, RGB, rgb } from "pdf-lib";
import fs from "fs";
import Form from "base_classes/Form";
import CifPage1 from "./pages/CifPage1";

interface CifFormOptions {
  font?: string | Uint8Array | ArrayBuffer;
  fontSize?: number;
  fontColor?: RGB;
}

class CifForm extends Form {
  page1: CifPage1;

  constructor(
    pdfDoc: PDFDocument,
    pdfFont: PDFFont,
    fontSize: number,
    fontColor: RGB
  ) {
    super(pdfDoc, pdfFont, fontSize, fontColor);
    this.page1 = new CifPage1(this, pdfDoc.getPage(0));
  }

  static async load(options?: CifFormOptions) {
    const existingPdfBytes = fs.readFileSync(
      __dirname + "/../CIF_-_Version_9_static.pdf"
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pdfFont = await pdfDoc.embedFont(
      options?.font || StandardFonts.Helvetica
    );

    const _instance = new CifForm(
      pdfDoc,
      pdfFont,
      options?.fontSize || 8,
      options?.fontColor || rgb(0, 0, 0)
    );
    return _instance;
  }

  async save(): Promise<Uint8Array> {
    return super.save();
  }
}

export default CifForm;
