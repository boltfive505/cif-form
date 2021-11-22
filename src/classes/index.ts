import { PDFDocument } from "pdf-lib";
import HeaderSection, { HeaderValues } from "./sections/HeaderSection";
import PatientInfoScreen, {
  PatientInfoValues,
} from "./sections/PatientInfoSection";

class CifForm {
  private pdfDoc: PDFDocument;
  sections: CifFormSections;

  constructor(pdfDoc: PDFDocument) {
    this.pdfDoc = pdfDoc;

    this.sections = {
      header: new HeaderSection(this),
      patientInfo: new PatientInfoScreen(this),
    };
  }

  getForm() {
    return this.pdfDoc.getForm();
  }

  setValues(values: CifFormValues) {
    if (values.header) this.sections.header.setValues(values.header);
    if (values.patientInfo)
      this.sections.patientInfo.setValues(values.patientInfo);
  }

  async save(): Promise<Uint8Array> {
    const form = this.pdfDoc.getForm();

    // remove clear all button
    const clearAllButton = form.getButton("Clear All Fields");
    form.removeField(clearAllButton);

    // make fields read-only
    form.flatten();

    return await this.pdfDoc.save();
  }
}

interface CifFormSections {
  header: HeaderSection;
  patientInfo: PatientInfoScreen;
}

export interface CifFormValues {
  header?: HeaderValues;
  patientInfo?: PatientInfoValues;
}

export default CifForm;
