import CifForm from "~/cif-form";
import { createFieldBase } from "~field-classes";
import { formatDate } from "~/cif-form/utils";
import { HeaderSectionFields, HeaderValues } from "./interfaces";

class HeaderSection {
  fields: HeaderSectionFields;

  constructor(cifForm: CifForm) {
    const createField = createFieldBase(cifForm.getForm());

    this.fields = {
      diseaseReportingUnit: createField.text("Disease Reporting Unit"),
      druRegionAndProvince: createField.text("DRU Region and Province"),
      philHealthNo: createField.text("PhilHealth No"),
      nameOfInterviewer: createField.text("Name of Interviewer"),
      contactNumberOfInterviewer: createField.text(
        "Contact Number of Interviewer"
      ),
      dateOfInterview: createField.text("Date of Interview"),
      nameOfInformant: createField.text("Name of Informant"),
      relationship: createField.text("Relationship"),
      contactNumberOfInformant: createField.text("Contact Number of Informant"),
      existingCase: {
        notApplicable_newCase: createField.check(
          "Existing: Not applicable (New case).0.0"
        ),
        notApplicable_unknown: createField.check(
          "Existing: Not applicable (Unknown)"
        ),
        updateSymptoms: createField.check("Existing: Update symptoms"),
        updateHealthStatus: createField.check(
          "Existing: Update health status / outcome"
        ),
        updateCaseClassification: createField.check(
          "Existing: Update case classification"
        ),
        updateLabResult: createField.check("Existing: Update lab result"),
        updateChestImagingFindings: createField.check(
          "Existing: Update chest imaging findings"
        ),
        updateVaccination: createField.check("Existing: Update vaccination"),
        updateDisposition: createField.check("Existing: Update disposition"),
        updateExposure: createField.check(
          "Existing: Update exposure / travel history"
        ),
        others: createField.check("Existing: Others"),
        othersField: createField.text("Existing: Others field"),
      },
      typeOfClient: createField.radio("Type of Client"),
      testingCategory: {
        category_A: createField.check("Testing Category: A"),
        category_B: createField.check("Testing Category: B"),
        category_C: createField.check("Testing Category: C"),
        category_D: createField.check("Testing Category: D"),
        category_E: createField.check("Testing Category: E"),
        category_F: createField.check("Testing Category: F"),
        category_G: createField.check("Testing Category: G"),
        category_H: createField.check("Testing Category: H"),
        category_I: createField.check("Testing Category: I"),
        category_J: createField.check("Testing Category: J"),
      },
    };
  }

  setValues(values: HeaderValues) {
    this.fields.diseaseReportingUnit.setText(values.diseaseReportingUnit);
    this.fields.druRegionAndProvince.setText(values.druRegionAndProvince);
    this.fields.philHealthNo.setText(values.philHealthNo);
    this.fields.nameOfInterviewer.setText(values.nameOfInterviewer);
    this.fields.contactNumberOfInterviewer.setText(
      values.contactNumberOfInterviewer
    );
    if (values.dateOfInterview) {
      this.fields.dateOfInterview.setText(formatDate(values.dateOfInterview));
    }
    this.fields.nameOfInformant.setText(values.nameOfInformant);
    this.fields.relationship.setText(values.relationship);
    this.fields.contactNumberOfInformant.setText(
      values.contactNumberOfInformant
    );
    this.fields.typeOfClient.select(values.typeOfClient);

    // existing case
    if (values.existingCase) {
      this.fields.existingCase.notApplicable_newCase.toggle(
        values.existingCase.notApplicable_newCase
      );
      this.fields.existingCase.notApplicable_unknown.toggle(
        values.existingCase.notApplicable_unknown
      );
      this.fields.existingCase.updateSymptoms.toggle(
        values.existingCase.updateSymptoms
      );
      this.fields.existingCase.updateHealthStatus.toggle(
        values.existingCase.updateHealthStatus
      );
      this.fields.existingCase.updateCaseClassification.toggle(
        values.existingCase.updateCaseClassification
      );
      this.fields.existingCase.updateLabResult.toggle(
        values.existingCase.updateLabResult
      );
      this.fields.existingCase.updateChestImagingFindings.toggle(
        values.existingCase.updateChestImagingFindings
      );
      this.fields.existingCase.updateVaccination.toggle(
        values.existingCase.updateVaccination
      );
      this.fields.existingCase.updateDisposition.toggle(
        values.existingCase.updateDisposition
      );
      this.fields.existingCase.updateExposure.toggle(
        values.existingCase.updateExposure
      );
      this.fields.existingCase.others.toggle(values.existingCase.others);
      this.fields.existingCase.notApplicable_newCase.toggle(
        values.existingCase.notApplicable_newCase
      );
      this.fields.existingCase.notApplicable_newCase.toggle(
        values.existingCase.notApplicable_newCase
      );
      this.fields.existingCase.othersField.setText(
        values.existingCase.othersField
      );
    }

    // testing category
    if (values.testingCategory) {
      this.fields.testingCategory.category_A.toggle(
        values.testingCategory.category_A
      );
      this.fields.testingCategory.category_B.toggle(
        values.testingCategory.category_B
      );
      this.fields.testingCategory.category_C.toggle(
        values.testingCategory.category_C
      );
      this.fields.testingCategory.category_D.toggle(
        values.testingCategory.category_D
      );
      this.fields.testingCategory.category_E.toggle(
        values.testingCategory.category_E
      );
      this.fields.testingCategory.category_F.toggle(
        values.testingCategory.category_F
      );
      this.fields.testingCategory.category_G.toggle(
        values.testingCategory.category_G
      );
      this.fields.testingCategory.category_H.toggle(
        values.testingCategory.category_H
      );
      this.fields.testingCategory.category_I.toggle(
        values.testingCategory.category_I
      );
      this.fields.testingCategory.category_J.toggle(
        values.testingCategory.category_J
      );
    }
  }
}

export default HeaderSection;
