import { PDFPage } from "pdf-lib";
import Form from "base_classes/Form";
import Page from "base_classes/Page";
import { pixelsToUserSpace } from "src/utils";

import Patient_Info from "./sections/1_Patient_Info";

class CifPage1 extends Page {
  patientInfo: Patient_Info;

  constructor(form: Form, pdfPage: PDFPage) {
    const { height } = pdfPage.getSize();
    const x = pixelsToUserSpace(150);
    const y = height - pixelsToUserSpace(395);
    super(form, pdfPage, x, y);

    this.patientInfo = new Patient_Info(this);
  }
}

export default CifPage1;
