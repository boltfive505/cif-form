import CifForm from "~/cif-form";
import { createFieldBase } from "~field-classes";
import {
  CaseInvestigationDetailsFields,
  CaseInvestigationDetailsValues,
  LabResultCollectionFields,
  VaccinationInformationFields,
} from "./interfaces";
import { formatDate, formatTime, numberToOrdinal } from "~/cif-form/utils";

class CaseInvestigationDetailsSection {
  fields: CaseInvestigationDetailsFields;

  constructor(cifForm: CifForm) {
    const createField = createFieldBase(cifForm.getForm());

    const vaccinationInformationFields1: VaccinationInformationFields = {
      dateOfVaccination: createField.text("Date of vaccinationRow1"),
      nameOfVaccine: createField.text("Name of VaccineRow1"),
      doseNumber: createField.text("Dose numberRow1"),
      vaccinationCenterFacility: createField.text(
        "Vaccination centerfacilityRow1"
      ),
      regionOfHealthFacility: createField.text("Region of health facilityRow1"),
      adverseEvents: createField.radio("Adverse Event/s 1"),
    };

    const vaccinationInformationFields2: VaccinationInformationFields = {
      dateOfVaccination: createField.text("Date of vaccinationRow2"),
      nameOfVaccine: createField.text("Name of VaccineRow2"),
      doseNumber: createField.text("Dose numberRow2"),
      vaccinationCenterFacility: createField.text(
        "Vaccination centerfacilityRow2"
      ),
      regionOfHealthFacility: createField.text("Region of health facilityRow2"),
      adverseEvents: createField.radio("Adverse Event/s 2"),
    };

    const labResultCollectionFields1: LabResultCollectionFields = {
      dateCollected: createField.text("Date collected 1"),
      dateResultReleased: createField.text("Date result released 1"),
      laboratory: createField.text("Laboratory 1"),
      testType: createField.radio("Test Type 1"),
      antigenReason: createField.text("Antigen reason 1"),
      antigenBrandOfKit: createField.text("Antigen brand of kit 1"),
      testTypeOtherValue: createField.text("Other lab test type 1"),
      results: createField.radio("Results1"),
      resultsOtherValue: createField.text("Other lab result 1"),
    };

    const labResultCollectionFields2: LabResultCollectionFields = {
      dateCollected: createField.text("Date collected 2"),
      dateResultReleased: createField.text("Date result released 2"),
      laboratory: createField.text("Laboratory 2"),
      testType: createField.radio("Test Type 2"),
      antigenReason: createField.text("Antigen reason 2"),
      antigenBrandOfKit: createField.text("Antigen brand of kit 2"),
      testTypeOtherValue: createField.text("Other lab test type 2"),
      results: createField.radio("Results2"),
      resultsOtherValue: createField.text("Other lab result 2"),
    };

    this.fields = {
      consultationInfo: {
        previousConsultation: createField.radio("Previous Consultation"),
        dateOfFirstConsult: createField.text("Date of First Consult"),
        nameOfFacilityWhereFirstConsultWasDone: createField.text(
          "Name of facility where first consult was done"
        ),
      },
      dispositionAtTimeOfReport: {
        disposition: createField.radio("Disposition"),
        admittedInHospital: {
          admittedInHospital: createField.text("Admitted in hospital"),
          dateAdmittedInHospital: createField.text("Date admitted in hospital"),
          timeAdmittedInHospital: createField.text("Time admitted in hospital"),
        },
        admittedInQuarantineFacility: {
          admittedInQuarantineFacility: createField.text(
            "Admitted in isolation / quarantine facility"
          ),
          dateQuarantinedInFacility: createField.text(
            "Date isolated/quarantined in facility"
          ),
          timeQuarantinedInFacility: createField.text(
            "Time isolated/quarantined in facility"
          ),
        },
        inHomeQuarantine: {
          dateQuarantinedAtHome: createField.text(
            "Date isolated/quarantined at home"
          ),
          timeQuarantinedAtHome: createField.text(
            "Time isolated/quarantined at home"
          ),
        },
        dischargedToHome: {
          dateOfDischarge: createField.text(
            "If discharged Date of Discharge MMDDYYYY"
          ),
        },
        others: { others: createField.text("Others") },
      },
      healthStatus: createField.radio("Health Status"),
      caseClassification: createField.radio("Case Classification"),
      vaccinationInfo: [
        vaccinationInformationFields1,
        vaccinationInformationFields2,
      ],
      clinicalInfo: {
        dateOfOnsetIllness: createField.text("Date of Onset of Illness"),
        signsAndSymptoms: {
          asymptomatic: createField.check("SSAsymptomatic"),
          fever: createField.check("SSFever"),
          feverValue: createField.text("SSFever Value"),
          cough: createField.check("SSCough"),
          generalWeakness: createField.check("SSGeneral weakness"),
          fatigue: createField.check("SSFatigue"),
          headache: createField.check("SSHeadache"),
          myalgia: createField.check("SSMyalgia"),
          soreThroat: createField.check("SSSore throat"),
          coryza: createField.check("SSCoryza"),
          dyspnea: createField.check("SSDyspnea"),
          anorexia: createField.check("SSAnorexia"),
          nausea: createField.check("SSNausea"),
          vomiting: createField.check("SSVomiting"),
          diarrhea: createField.check("SSDiarrhea"),
          alteredMentalStatus: createField.check("SSAltered Mental Status"),
          anosmia: createField.check("SSAnosmia"),
          ageusia: createField.check("SSAgeusia"),
          others: createField.check("SSOthers"),
          othersValue: createField.text("Other Signs and Symptoms"),
        },
        comorbidities: {
          none: createField.check("CNone"),
          hypertension: createField.check("CHypertension"),
          diabetes: createField.check("CDiabetes"),
          heartDisease: createField.check("CHeart Disease"),
          lungDisease: createField.check("CLung Disease"),
          gastrointestinal: createField.check("CGastrointestinal"),
          genitoUrinary: createField.check("CGenito-urinary"),
          neurologicalDisease: createField.check("CNeurological Disease"),
          cancer: createField.check("CCancer"),
          others: createField.check("COthers"),
          othersValue: createField.text("Other comorbidities"),
        },
        pregnant: createField.radio("Pregnant"),
        lmp: createField.text("LMP"),
        highRiskPregnancy: createField.radio("High-risk pregnancy"),
        severeAcuteRespiratoryIllness: createField.radio(
          "Severe Acute Respiratory Illness"
        ),
        chestImagingFindings: {
          dateOfChestImaging: createField.text("Date of Chest Imaging"),
          imagingDone: createField.radio("Imaging Done"),
          chestImagingResults: createField.radio("Chest imaging results"),
          otherChestImagingResultsValue: createField.text(
            "Other chest imaging results"
          ),
        },
      },
      labInfo: {
        testedPositiveBefore: createField.radio("Tested positive before"),
        dateOfSpecimenCollection: createField.text(
          "Date of specimen collection"
        ),
        laboratory: createField.text("Laboratory"),
        rtpcrCount: createField.text("RT-PCR Count"),
        labResultCollection: [
          labResultCollectionFields1,
          labResultCollectionFields2,
        ],
      },
      outcomeConditionAtTimeOfReport: {
        outcome: createField.radio("Outcome"),
        recovered: {
          dateOfRecovery: createField.text("Date of Recovery"),
        },
        died: {
          dateOfDeath: createField.text("Date of Death"),
          immediateCause: createField.text("Immediate Cause"),
          underlyingCause: createField.text("Underlying Cause"),
          antecedentCause: createField.text("Antecedent Cause"),
          contributoryConditions: createField.text("Contributory Conditions"),
        },
      },
    };
  }

  setValues(values: CaseInvestigationDetailsValues) {
    // consultation info
    if (values.consultationInfo) {
      this.fields.consultationInfo.previousConsultation.select(
        values.consultationInfo.previousConsultation
      );
      this.fields.consultationInfo.dateOfFirstConsult.setText(
        formatDate(values.consultationInfo.dateOfFirstConsult)
      );
      this.fields.consultationInfo.nameOfFacilityWhereFirstConsultWasDone.setText(
        values.consultationInfo.nameOfFacilityWhereFirstConsultWasDone
      );
    }
    // diposition at time of report
    if (values.dispositionAtTimeOfReport) {
      this.fields.dispositionAtTimeOfReport.disposition.select(
        values.dispositionAtTimeOfReport.disposition
      );
      // admitted in hospital
      if (values.dispositionAtTimeOfReport.admittedInHospital) {
        this.fields.dispositionAtTimeOfReport.admittedInHospital.admittedInHospital.setText(
          values.dispositionAtTimeOfReport.admittedInHospital.admittedInHospital
        );
        this.fields.dispositionAtTimeOfReport.admittedInHospital.dateAdmittedInHospital.setText(
          formatDate(
            values.dispositionAtTimeOfReport.admittedInHospital
              .dateAdmittedInHospital
          )
        );
        this.fields.dispositionAtTimeOfReport.admittedInHospital.timeAdmittedInHospital.setText(
          formatTime(
            values.dispositionAtTimeOfReport.admittedInHospital
              .timeAdmittedInHospital
          )
        );
      }
      // admitted in quarantine facility
      if (values.dispositionAtTimeOfReport.admittedInQuarantineFacility) {
        this.fields.dispositionAtTimeOfReport.admittedInQuarantineFacility.admittedInQuarantineFacility.setText(
          values.dispositionAtTimeOfReport.admittedInQuarantineFacility
            .admittedInQuarantineFacility
        );
        this.fields.dispositionAtTimeOfReport.admittedInQuarantineFacility.dateQuarantinedInFacility.setText(
          formatDate(
            values.dispositionAtTimeOfReport.admittedInQuarantineFacility
              .dateQuarantinedInFacility
          )
        );
        this.fields.dispositionAtTimeOfReport.admittedInQuarantineFacility.timeQuarantinedInFacility.setText(
          formatTime(
            values.dispositionAtTimeOfReport.admittedInQuarantineFacility
              .timeQuarantinedInFacility
          )
        );
      }
      // in home quarantine
      if (values.dispositionAtTimeOfReport.inHomeQuarantine) {
        this.fields.dispositionAtTimeOfReport.inHomeQuarantine.dateQuarantinedAtHome.setText(
          formatDate(
            values.dispositionAtTimeOfReport.inHomeQuarantine
              .dateQuarantinedAtHome
          )
        );
        this.fields.dispositionAtTimeOfReport.inHomeQuarantine.timeQuarantinedAtHome.setText(
          formatTime(
            values.dispositionAtTimeOfReport.inHomeQuarantine
              .timeQuarantinedAtHome
          )
        );
      }
      // discharged to home
      if (values.dispositionAtTimeOfReport.dischargedToHome) {
        this.fields.dispositionAtTimeOfReport.dischargedToHome.dateOfDischarge.setText(
          formatDate(
            values.dispositionAtTimeOfReport.dischargedToHome.dateOfDischarge
          )
        );
      }
      // others
      if (values.dispositionAtTimeOfReport.others) {
        this.fields.dispositionAtTimeOfReport.others.others.setText(
          values.dispositionAtTimeOfReport.others.others
        );
      }
    }
    this.fields.healthStatus.select(values.healthStatus);
    this.fields.caseClassification.select(values.caseClassification);
    // vaccination info
    if (values.vaccinationInfo) {
      values.vaccinationInfo.forEach((item, index) => {
        this.fields.vaccinationInfo[index].dateOfVaccination.setText(
          formatDate(item?.dateOfVaccination)
        );
        this.fields.vaccinationInfo[index].nameOfVaccine.setText(
          item?.nameOfVaccine
        );
        if (item?.doseNumber) {
          this.fields.vaccinationInfo[index].doseNumber.setText(
            numberToOrdinal(item?.doseNumber)
          );
        }
        this.fields.vaccinationInfo[index].vaccinationCenterFacility.setText(
          item?.vaccinationCenterFacility
        );
        this.fields.vaccinationInfo[index].regionOfHealthFacility.setText(
          item?.regionOfHealthFacility
        );
        this.fields.vaccinationInfo[index].adverseEvents.select(
          item?.adverseEvents
        );
      });
    }
    if (values.clinicalInfo) {
      this.fields.clinicalInfo.dateOfOnsetIllness.setText(
        formatDate(values.clinicalInfo.dateOfOnsetIllness)
      );
      // signs and symptoms
      if (values.clinicalInfo.signsAndSymptoms) {
        this.fields.clinicalInfo.signsAndSymptoms.asymptomatic.toggle(
          values.clinicalInfo.signsAndSymptoms.asymptomatic
        );
        this.fields.clinicalInfo.signsAndSymptoms.fever.toggle(
          values.clinicalInfo.signsAndSymptoms.fever
        );
        this.fields.clinicalInfo.signsAndSymptoms.feverValue.setText(
          values.clinicalInfo.signsAndSymptoms.feverValue
        );
        this.fields.clinicalInfo.signsAndSymptoms.cough.toggle(
          values.clinicalInfo.signsAndSymptoms.cough
        );
        this.fields.clinicalInfo.signsAndSymptoms.generalWeakness.toggle(
          values.clinicalInfo.signsAndSymptoms.generalWeakness
        );
        this.fields.clinicalInfo.signsAndSymptoms.fatigue.toggle(
          values.clinicalInfo.signsAndSymptoms.fatigue
        );
        this.fields.clinicalInfo.signsAndSymptoms.headache.toggle(
          values.clinicalInfo.signsAndSymptoms.headache
        );
        this.fields.clinicalInfo.signsAndSymptoms.myalgia.toggle(
          values.clinicalInfo.signsAndSymptoms.myalgia
        );
        this.fields.clinicalInfo.signsAndSymptoms.soreThroat.toggle(
          values.clinicalInfo.signsAndSymptoms.soreThroat
        );
        this.fields.clinicalInfo.signsAndSymptoms.coryza.toggle(
          values.clinicalInfo.signsAndSymptoms.coryza
        );
        this.fields.clinicalInfo.signsAndSymptoms.dyspnea.toggle(
          values.clinicalInfo.signsAndSymptoms.dyspnea
        );
        this.fields.clinicalInfo.signsAndSymptoms.anorexia.toggle(
          values.clinicalInfo.signsAndSymptoms.anorexia
        );
        this.fields.clinicalInfo.signsAndSymptoms.nausea.toggle(
          values.clinicalInfo.signsAndSymptoms.nausea
        );
        this.fields.clinicalInfo.signsAndSymptoms.vomiting.toggle(
          values.clinicalInfo.signsAndSymptoms.vomiting
        );
        this.fields.clinicalInfo.signsAndSymptoms.diarrhea.toggle(
          values.clinicalInfo.signsAndSymptoms.diarrhea
        );
        this.fields.clinicalInfo.signsAndSymptoms.alteredMentalStatus.toggle(
          values.clinicalInfo.signsAndSymptoms.alteredMentalStatus
        );
        this.fields.clinicalInfo.signsAndSymptoms.anosmia.toggle(
          values.clinicalInfo.signsAndSymptoms.anosmia
        );
        this.fields.clinicalInfo.signsAndSymptoms.ageusia.toggle(
          values.clinicalInfo.signsAndSymptoms.ageusia
        );
        this.fields.clinicalInfo.signsAndSymptoms.others.toggle(
          values.clinicalInfo.signsAndSymptoms.others
        );
        this.fields.clinicalInfo.signsAndSymptoms.othersValue.setText(
          values.clinicalInfo.signsAndSymptoms.othersValue
        );
      }
      // comorbidities
      if (values.clinicalInfo.comorbidities) {
        this.fields.clinicalInfo.comorbidities.none.toggle(
          values.clinicalInfo.comorbidities.none
        );
        this.fields.clinicalInfo.comorbidities.hypertension.toggle(
          values.clinicalInfo.comorbidities.hypertension
        );
        this.fields.clinicalInfo.comorbidities.diabetes.toggle(
          values.clinicalInfo.comorbidities.diabetes
        );
        this.fields.clinicalInfo.comorbidities.heartDisease.toggle(
          values.clinicalInfo.comorbidities.heartDisease
        );
        this.fields.clinicalInfo.comorbidities.lungDisease.toggle(
          values.clinicalInfo.comorbidities.lungDisease
        );
        this.fields.clinicalInfo.comorbidities.gastrointestinal.toggle(
          values.clinicalInfo.comorbidities.gastrointestinal
        );
        this.fields.clinicalInfo.comorbidities.genitoUrinary.toggle(
          values.clinicalInfo.comorbidities.genitoUrinary
        );
        this.fields.clinicalInfo.comorbidities.neurologicalDisease.toggle(
          values.clinicalInfo.comorbidities.neurologicalDisease
        );
        this.fields.clinicalInfo.comorbidities.cancer.toggle(
          values.clinicalInfo.comorbidities.cancer
        );
        this.fields.clinicalInfo.comorbidities.others.toggle(
          values.clinicalInfo.comorbidities.others
        );
        this.fields.clinicalInfo.comorbidities.othersValue.setText(
          values.clinicalInfo.comorbidities.othersValue
        );
      }
      this.fields.clinicalInfo.pregnant.select(values.clinicalInfo.pregnant);
      this.fields.clinicalInfo.lmp.setText(formatDate(values.clinicalInfo.lmp));
      this.fields.clinicalInfo.highRiskPregnancy.select(
        values.clinicalInfo.highRiskPregnancy
      );
      this.fields.clinicalInfo.severeAcuteRespiratoryIllness.select(
        values.clinicalInfo.severeAcuteRespiratoryIllness
      );
      // chest imaging findings
      if (values.clinicalInfo.chestImagingFindings) {
        this.fields.clinicalInfo.chestImagingFindings.dateOfChestImaging.setText(
          formatDate(
            values.clinicalInfo.chestImagingFindings.dateOfChestImaging
          )
        );
        this.fields.clinicalInfo.chestImagingFindings.imagingDone.select(
          values.clinicalInfo.chestImagingFindings.imagingDone
        );
        this.fields.clinicalInfo.chestImagingFindings.chestImagingResults.select(
          values.clinicalInfo.chestImagingFindings.chestImagingResults
        );
        this.fields.clinicalInfo.chestImagingFindings.otherChestImagingResultsValue.setText(
          values.clinicalInfo.chestImagingFindings.otherChestImagingResultsValue
        );
      }
    }
    // lab info
    if (values.labInfo) {
      this.fields.labInfo.testedPositiveBefore.select(
        values.labInfo.testedPositiveBefore
      );
      this.fields.labInfo.dateOfSpecimenCollection.setText(
        formatDate(values.labInfo.dateOfSpecimenCollection)
      );
      this.fields.labInfo.laboratory.setText(values.labInfo.laboratory);
      this.fields.labInfo.rtpcrCount.setText(
        values.labInfo.rtpcrCount?.toString()
      );
      // lab result collection
      if (values.labInfo.labResultCollection) {
        values.labInfo.labResultCollection.forEach((item, index) => {
          this.fields.labInfo.labResultCollection[index].dateCollected.setText(
            formatDate(item?.dateCollected)
          );
          this.fields.labInfo.labResultCollection[
            index
          ].dateResultReleased.setText(formatDate(item?.dateResultReleased));
          this.fields.labInfo.labResultCollection[index].laboratory.setText(
            item?.laboratory
          );
          this.fields.labInfo.labResultCollection[index].testType.select(
            item?.testType
          );
          this.fields.labInfo.labResultCollection[index].antigenReason.setText(
            item?.antigenReason
          );
          this.fields.labInfo.labResultCollection[
            index
          ].antigenBrandOfKit.setText(item?.antigenBrandOfKit);
          this.fields.labInfo.labResultCollection[
            index
          ].testTypeOtherValue.setText(item?.testTypeOtherValue);
          this.fields.labInfo.labResultCollection[index].results.select(
            item?.results
          );
          this.fields.labInfo.labResultCollection[
            index
          ].resultsOtherValue.setText(item?.resultsOtherValue);
        });
      }
    }
    if (values.outcomeConditionAtTimeOfReport) {
      this.fields.outcomeConditionAtTimeOfReport.outcome.select(
        values.outcomeConditionAtTimeOfReport.outcome
      );
      // recovered
      if (values.outcomeConditionAtTimeOfReport.recovered) {
        this.fields.outcomeConditionAtTimeOfReport.recovered.dateOfRecovery.setText(
          formatDate(
            values.outcomeConditionAtTimeOfReport.recovered.dateOfRecovery
          )
        );
      }
      // died
      if (values.outcomeConditionAtTimeOfReport.died) {
        this.fields.outcomeConditionAtTimeOfReport.died.dateOfDeath.setText(
          formatDate(values.outcomeConditionAtTimeOfReport.died.dateOfDeath)
        );
        this.fields.outcomeConditionAtTimeOfReport.died.immediateCause.setText(
          values.outcomeConditionAtTimeOfReport.died.immediateCause
        );
        this.fields.outcomeConditionAtTimeOfReport.died.underlyingCause.setText(
          values.outcomeConditionAtTimeOfReport.died.underlyingCause
        );
        this.fields.outcomeConditionAtTimeOfReport.died.antecedentCause.setText(
          values.outcomeConditionAtTimeOfReport.died.antecedentCause
        );
        this.fields.outcomeConditionAtTimeOfReport.died.contributoryConditions.setText(
          values.outcomeConditionAtTimeOfReport.died.contributoryConditions
        );
      }
    }
  }
}

export default CaseInvestigationDetailsSection;
