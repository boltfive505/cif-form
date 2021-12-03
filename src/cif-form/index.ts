import { PDFDocument } from "pdf-lib";
import {
  HeaderSection,
  PatientInfoSection,
  CaseInvestigationDetailsSection,
  ContactTracingSection,
} from "./sections";
import {
  HeaderValues,
  PatientInfoValues,
  CaseInvestigationDetailsValues,
  ContactTracingValues,
} from "./value-interfaces";

class CifForm {
  private pdfDoc: PDFDocument;

  sections: {
    header: HeaderSection;
    patientInfo: PatientInfoSection;
    caseInvestigationDetails: CaseInvestigationDetailsSection;
    contactTracing: ContactTracingSection;
  };

  constructor(pdfDoc: PDFDocument) {
    this.pdfDoc = pdfDoc;

    // remove clear all button
    const form = this.pdfDoc.getForm();
    const clearAllButton = form.getButton("Clear All Fields");
    form.removeField(clearAllButton);

    this.sections = {
      header: new HeaderSection(this),
      patientInfo: new PatientInfoSection(this),
      caseInvestigationDetails: new CaseInvestigationDetailsSection(this),
      contactTracing: new ContactTracingSection(this),
    };
  }

  getForm() {
    return this.pdfDoc.getForm();
  }

  setValues(values: {
    header?: HeaderValues;
    patientInfo?: PatientInfoValues;
    caseInvestigationDetails?: CaseInvestigationDetailsValues;
    contactTracing?: ContactTracingValues;
  }) {
    if (values.header) this.sections.header.setValues(values.header);
    if (values.patientInfo)
      this.sections.patientInfo.setValues(values.patientInfo);
    if (values.caseInvestigationDetails)
      this.sections.caseInvestigationDetails.setValues(
        values.caseInvestigationDetails
      );
    if (values.contactTracing)
      this.sections.contactTracing.setValues(values.contactTracing);
  }

  async save(): Promise<Uint8Array> {
    const form = this.pdfDoc.getForm();
    // make fields read-only
    form.flatten();

    return await this.pdfDoc.save();
  }
}

export default CifForm;
