import TextField from "~field-classes/TextField";
import RadioField from "~field-classes/RadioField";
import CheckField from "~field-classes/CheckField";

export interface CaseInvestigationDetailsFields {
  consultationInfo: {
    previousConsultation: RadioField<"Yes" | "No">;
    dateOfFirstConsult: TextField;
    nameOfFacilityWhereFirstConsultWasDone: TextField;
  };
  dispositionAtTimeOfReport: {
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
  vaccinationInfo: [VaccinationInformationFields, VaccinationInformationFields];
  clinicalInfo: {
    dateOfOnsetIllness: TextField;
    signsAndSymptoms: {
      asymptomatic: CheckField;
      fever: CheckField;
      feverValue: TextField;
      cough: CheckField;
      generalWeakness: CheckField;
      fatigue: CheckField;
      headache: CheckField;
      myalgia: CheckField;
      soreThroat: CheckField;
      coryza: CheckField;
      dyspnea: CheckField;
      anorexia: CheckField;
      nausea: CheckField;
      vomiting: CheckField;
      diarrhea: CheckField;
      alteredMentalStatus: CheckField;
      anosmia: CheckField;
      ageusia: CheckField;
      others: CheckField;
      othersValue: TextField;
    };
    comorbidities: {
      none: CheckField;
      hypertension: CheckField;
      diabetes: CheckField;
      heartDisease: CheckField;
      lungDisease: CheckField;
      gastrointestinal: CheckField;
      genitoUrinary: CheckField;
      neurologicalDisease: CheckField;
      cancer: CheckField;
      others: CheckField;
      othersValue: TextField;
    };
    pregnant: RadioField<"Yes" | "No">;
    lmp: TextField;
    highRiskPregnancy: RadioField<"Yes" | "No">;
    severeAcuteRespiratoryIllness: RadioField<"Yes" | "No">;
    chestImagingFindings: {
      dateOfChestImaging: TextField;
      imagingDone: RadioField<
        "Chest radiography" | "Chest CT" | "Lung ultrasound" | "None"
      >;
      // need to fix values
      chestImagingResults: RadioField<
        | "Normal"
        | "Pending"
        | "Chest radiography"
        | "Chest CT"
        | "Lung ultrasound"
        | "Other"
      >;
      otherChestImagingResultsValue: TextField;
    };
  };
  labInfo: {
    testedPositiveBefore: RadioField<"Yes" | "No">;
    dateOfSpecimenCollection: TextField;
    laboratory: TextField;
    rtpcrCount: TextField;
    labResultCollection: [LabResultCollectionFields, LabResultCollectionFields];
  };
  outcomeConditionAtTimeOfReport: {
    outcome: RadioField<"Active" | "Recovered" | "Died">;
    recovered: {
      dateOfRecovery: TextField;
    };
    died: {
      dateOfDeath: TextField;
      immediateCause: TextField;
      underlyingCause: TextField;
      antecedentCause: TextField;
      contributoryConditions: TextField;
    };
  };
}

export interface VaccinationInformationFields {
  dateOfVaccination: TextField;
  nameOfVaccine: TextField;
  doseNumber: TextField;
  vaccinationCenterFacility: TextField;
  regionOfHealthFacility: TextField;
  adverseEvents: RadioField<"Yes" | "No">;
}

export interface LabResultCollectionFields {
  dateCollected: TextField;
  dateResultReleased: TextField;
  laboratory: TextField;
  testType: RadioField<
    | "RT-PCR (OPS)"
    | "RT-PCR (NPS)"
    | "RT-PCR (OPS and NPS)"
    | "Antigen test"
    | "Antibody test"
    | "Other test"
  >;
  antigenReason: TextField;
  antigenBrandOfKit: TextField;
  testTypeOtherValue: TextField;
  results: RadioField<
    "Normal" | "Positive" | "Negative" | "Equivocal" | "Others"
  >;
  resultsOtherValue: TextField;
}

export interface CaseInvestigationDetailsValues {
  consultationInfo?: {
    previousConsultation?: "Yes" | "No";
    dateOfFirstConsult?: string | number | Date;
    nameOfFacilityWhereFirstConsultWasDone?: string;
  };
  dispositionAtTimeOfReport?: {
    disposition?:
      | "Admitted in hospital"
      | "Admitted in quarantine facility"
      | "In home quarantine"
      | "Discharged to home"
      | "Others";
    admittedInHospital?: {
      admittedInHospital?: string;
      dateAdmittedInHospital?: string | number | Date;
      timeAdmittedInHospital?: string | number | Date;
    };
    admittedInQuarantineFacility?: {
      admittedInQuarantineFacility?: string;
      dateQuarantinedInFacility?: string | number | Date;
      timeQuarantinedInFacility?: string | number | Date;
    };
    inHomeQuarantine?: {
      dateQuarantinedAtHome?: string | number | Date;
      timeQuarantinedAtHome?: string | number | Date;
    };
    dischargedToHome?: {
      dateOfDischarge?: string | number | Date;
    };
    others?: { others?: string };
  };
  healthStatus?: "Asymptomamtic" | "Mild" | "Moderate" | "Severe" | "Critical";
  caseClassification?: "Suspect" | "Probable" | "Confirmed" | "Non-COVID";
  vaccinationInfo?: [
    VaccinationInformationValues,
    VaccinationInformationValues
  ];
  clinicalInfo?: {
    dateOfOnsetIllness?: string | number | Date;
    signsAndSymptoms?: {
      asymptomatic: boolean | false;
      fever: boolean | false;
      feverValue?: string;
      cough: boolean | false;
      generalWeakness: boolean | false;
      fatigue: boolean | false;
      headache: boolean | false;
      myalgia: boolean | false;
      soreThroat: boolean | false;
      coryza: boolean | false;
      dyspnea: boolean | false;
      anorexia: boolean | false;
      nausea: boolean | false;
      vomiting: boolean | false;
      diarrhea: boolean | false;
      alteredMentalStatus: boolean | false;
      anosmia: boolean | false;
      ageusia: boolean | false;
      others: boolean | false;
      othersValue?: string;
    };
    comorbidities?: {
      none: boolean | false;
      hypertension: boolean | false;
      diabetes: boolean | false;
      heartDisease: boolean | false;
      lungDisease: boolean | false;
      gastrointestinal: boolean | false;
      genitoUrinary: boolean | false;
      neurologicalDisease: boolean | false;
      cancer: boolean | false;
      others: boolean | false;
      othersValue?: string;
    };
    pregnant?: "Yes" | "No";
    lmp?: string | number | Date;
    highRiskPregnancy?: "Yes" | "No";
    severeAcuteRespiratoryIllness?: "Yes" | "No";
    chestImagingFindings?: {
      dateOfChestImaging?: string | number | Date;
      imagingDone?:
        | "Chest radiography"
        | "Chest CT"
        | "Lung ultrasound"
        | "None";
      // need to fix values
      chestImagingResults?:
        | "Normal"
        | "Pending"
        | "Chest radiography"
        | "Chest CT"
        | "Lung ultrasound"
        | "Other";
      otherChestImagingResultsValue?: string;
    };
  };
  labInfo?: {
    testedPositiveBefore?: "Yes" | "No";
    dateOfSpecimenCollection?: string | number | Date;
    laboratory?: string;
    rtpcrCount?: number;
    labResultCollection?: [
      LabResultCollectionValues,
      LabResultCollectionValues
    ];
  };
  outcomeConditionAtTimeOfReport?: {
    outcome?: "Active" | "Recovered" | "Died";
    recovered: {
      dateOfRecovery?: string | number | Date;
    };
    died: {
      dateOfDeath?: string | number | Date;
      immediateCause?: string;
      underlyingCause?: string;
      antecedentCause?: string;
      contributoryConditions?: string;
    };
  };
}

export interface VaccinationInformationValues {
  dateOfVaccination?: string | number | Date;
  nameOfVaccine?: string;
  doseNumber?: number; // must be ordinal (e.g. 1st, 2nd, 3rd)
  vaccinationCenterFacility?: string;
  regionOfHealthFacility?: string;
  adverseEvents?: "Yes" | "No";
}

export interface LabResultCollectionValues {
  dateCollected?: string | number | Date;
  dateResultReleased?: string | number | Date;
  laboratory?: string;
  testType?:
    | "RT-PCR (OPS)"
    | "RT-PCR (NPS)"
    | "RT-PCR (OPS and NPS)"
    | "Antigen test"
    | "Antibody test"
    | "Other test";
  antigenReason?: string;
  antigenBrandOfKit?: string;
  testTypeOtherValue?: string;
  results?: "Normal" | "Positive" | "Negative" | "Equivocal" | "Others";
  resultsOtherValue?: string;
}
