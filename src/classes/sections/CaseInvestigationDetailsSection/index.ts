import CifForm from "~/classes";
import TextField from "~field-classes/TextField";
import RadioField from "~field-classes/RadioField";
import SelectField from "~field-classes/SelectField";
import { createFieldBase } from "~field-classes";

class CaseInvestigationDetailsSection {}

interface CaseInvestigationDetailsFields {
  consultationInfo: {
    previousConsultation: RadioField<"Yes" | "No">;
    dateOfFirstConsult: TextField;
    NameOfFacilityWhereFirstConsultWasDone: TextField;
  };
  dispositionAtTimeOfReport: {
    /**
     * 4 - Admitted in hospital
     * 3 - Admitted in quarantine facility
     * 2 - In home quarantine
     * 1 - Discharged to home
     * 0 - Others
     */
    disposition: RadioField<
      | "Admitted in hospital"
      | "Admitted in quarantine facility"
      | "In home quarantine"
      | "Discharged to home"
      | "Others"
    >;
    admittedInHospital: {
      admittedInHospital: TextField;
      dateAdmittedInHospital: TextField;
      timeAdmittedInHospital: TextField;
    };
    admittedInQuarantineFacility: {
      admittedInQuarantineFacility: TextField;
      dateQuarantinedInFacility: TextField;
      timeQuarantinedInFacility: TextField;
    };
    inHomeQuarantine: {
      dateQuarantinedAtHome: TextField;
      timeQuarantinedAtHome: TextField;
    };
    dischargedToHome: {
      dateOfDischarge: TextField;
    };
    others: { others: TextField };
  };
  healthStatus: RadioField<
    "Asymptomamtic" | "Mild" | "Moderate" | "Severe" | "Critical"
  >;
  caseClassification: RadioField<
    "Suspect" | "Probable" | "Confirmed" | "Non-COVID"
  >;
  vaccinationInfo: [VaccinationInformation, VaccinationInformation];
  clinicalInfo: {
    dateOfOnsetIllness: TextField;
  };
}

interface VaccinationInformation {
  dateOfVaccination: TextField;
  nameOfVaccine: TextField;
  doseNumber: TextField;
  vaccinationCenterFacility: TextField;
  regionOfHealthFacility: TextField;
  adverseEvents: RadioField<"Yes" | "No">;
}

export default CaseInvestigationDetailsSection;
