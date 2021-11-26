import TextField from "~field-classes/TextField";
import CheckField from "~field-classes/CheckField";
import RadioField from "~field-classes/RadioField";

export interface HeaderSectionFields {
  diseaseReportingUnit: TextField;
  druRegionAndProvince: TextField;
  philHealthNo: TextField;
  nameOfInterviewer: TextField;
  contactNumberOfInterviewer: TextField;
  dateOfInterview: TextField;
  nameOfInformant: TextField;
  relationship: TextField;
  contactNumberOfInformant: TextField;
  existingCase: {
    notApplicable_newCase: CheckField;
    notApplicable_unknown: CheckField;
    updateSymptoms: CheckField;
    updateHealthStatus: CheckField;
    updateCaseClassification: CheckField;
    updateLabResult: CheckField;
    updateChestImagingFindings: CheckField;
    updateVaccination: CheckField;
    updateDisposition: CheckField;
    updateExposure: CheckField;
    others: CheckField;
    othersField: TextField;
  };
  typeOfClient: RadioField<
    "COVID-19 Case" | "Close Contact" | "For RT-PCR Testing"
  >;
  testingCategory: {
    category_A: CheckField;
    category_B: CheckField;
    category_C: CheckField;
    category_D: CheckField;
    category_E: CheckField;
    category_F: CheckField;
    category_G: CheckField;
    category_H: CheckField;
    category_I: CheckField;
    category_J: CheckField;
  };
}

export interface HeaderValues {
  diseaseReportingUnit?: string;
  druRegionAndProvince?: string;
  philHealthNo?: string;
  nameOfInterviewer?: string;
  contactNumberOfInterviewer?: string;
  dateOfInterview?: string | number | Date;
  nameOfInformant?: string;
  relationship?: string;
  contactNumberOfInformant?: string;
  existingCase: {
    notApplicable_newCase: boolean | false;
    notApplicable_unknown: boolean | false;
    updateSymptoms: boolean | false;
    updateHealthStatus: boolean | false;
    updateCaseClassification: boolean | false;
    updateLabResult: boolean | false;
    updateChestImagingFindings: boolean | false;
    updateVaccination: boolean | false;
    updateDisposition: boolean | false;
    updateExposure: boolean | false;
    others: boolean | false;
    othersField?: string;
  };
  typeOfClient?: "COVID-19 Case" | "Close Contact" | "For RT-PCR Testing";
  testingCategory: {
    category_A: boolean | false;
    category_B: boolean | false;
    category_C: boolean | false;
    category_D: boolean | false;
    category_E: boolean | false;
    category_F: boolean | false;
    category_G: boolean | false;
    category_H: boolean | false;
    category_I: boolean | false;
    category_J: boolean | false;
  };
}
