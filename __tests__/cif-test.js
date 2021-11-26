const { loadCifForm } = require("../lib");
const fs = require("fs");

const run = async () => {
  const cifForm = await loadCifForm();

  cifForm.setValues({
    header: {
      diseaseReportingUnit: "testing",
      druRegionAndProvince: "adas",
      philHealthNo: "asdas",
      nameOfInterviewer: "tetsing123",
      contactNumberOfInterviewer: "1213123",
      existingCase: {
        notApplicable_newCase: true,
        updateLabResult: true,
        others: true,
        othersField: "adsaa",
      },
      nameOfInformant: "asdasd",
      relationship: "asddsasda",
      contactNumberOfInformant: "242324",
      typeOfClient: "Close Contact",
      testingCategory: {
        category_A: true,
        category_F: true,
      },
    },
    patientInfo: {
      profile: {
        lastName: "Salcedo",
        firstNameAndSuffix: "Baldwin",
        middleName: "Eugenio",
        birthday: new Date(1996, 7, 5),
        civilStatus: "Married",
        sex: "Male",
        age: 25,
        occupation: "adadds",
        worksInClosedSetting: "No",
      },
      currentAddress: {
        houseNo_lot_bldg: "335",
        street_purok_sitio: "Magdalo",
        barangay: "Potol",
        municipality_city: "Kawit",
        province: "Cavite",
        homePhoneNo_areaCode: "asadasd 505",
        cellphoneNo: "919999",
        emailAddress: "asdasds@asddas.com",
      },
      permanentAddress: {
        houseNo_lot_bldg: "335",
        street_purok_sitio: "Magdalo",
        barangay: "Potol",
        municipality_city: "Kawit",
        province: "Cavite",
        homePhoneNo_areaCode: "asadasd 505",
        cellphoneNo: "919999",
        emailAddress: "asdasds@asddas.com",
      },
      currentWorkplaceAddress: {
        lot_bldg: "asddasda",
        street: "asdas",
        barangay: "Potol",
        municipality_city: "Kawit",
        province: "Cavite",
        nameOfWorkplace: "adas",
        phoneNo_cellphoneNo: "asdasdads",
        emailAddress: "asdasds@asddas.com",
      },
      specialPopulation: {
        healthCareWorker: {
          isHealthCareWorker: "Yes",
          healthFacilityName: "asdasdadad",
          healthFacilityLocation: "adas",
        },
        returningOverseasFilipino: {
          isReturningOverseasFilipino: "Yes",
          countryOfOrigin: "ph",
          passportNumber: "123123312",
          OFW: "OFW",
        },
        foreignTraveller: {
          isForeignTraveller: "Yes",
          countryOfOrigin: "us",
          passportNumber: "123213",
        },
        localTraveller: {
          isLocalTraveller: "Yes",
          cityMunicipalityProvinceOfOrigin: "asdadadsd",
          specific: "Authorized Person Outside Residence / Local Traveler",
        },
        livesInClosedSettings: {
          isLivesInClosedSettings: "Yes",
          institutionType: "qweqwqe",
          institutionName: "adasd",
        },
      },
    },
    caseInvestigationDetails: {
      consultationInfo: {
        previousConsultation: "Yes",
        dateOfFirstConsult: Date.now(),
        nameOfFacilityWhereFirstConsultWasDone: "adasdadadas",
      },
      dispositionAtTimeOfReport: {
        disposition: "Admitted in quarantine facility",
        admittedInHospital: {
          admittedInHospital: "asdaddsa",
          dateAdmittedInHospital: Date.now(),
          timeAdmittedInHospital: Date.now(),
        },
        admittedInQuarantineFacility: {
          admittedInQuarantineFacility: "asdadsd",
          dateQuarantinedInFacility: Date.now(),
          timeQuarantinedInFacility: Date.now(),
        },
        inHomeQuarantine: {
          dateQuarantinedAtHome: Date.now(),
          timeQuarantinedAtHome: Date.now(),
        },
        dischargedToHome: {
          dateOfDischarge: Date.now(),
        },
        others: {
          others: "addaasda",
        },
      },
      healthStatus: "Critical",
      caseClassification: "Probable",
      vaccinationInfo: [
        {
          dateOfVaccination: Date.now(),
          nameOfVaccine: "asdad",
          doseNumber: 2,
          vaccinationCenterFacility: "asddas",
          regionOfHealthFacility: "asdadadas",
          adverseEvents: "Yes",
        },
        {
          dateOfVaccination: Date.now(),
          nameOfVaccine: "tyuit",
          doseNumber: 1,
          vaccinationCenterFacility: "ghkgjkg",
          regionOfHealthFacility: "ghkkj",
          adverseEvents: "No",
        },
      ],
      clinicalInfo: {
        dateOfOnsetIllness: Date.now(),
        signsAndSymptoms: {
          asymptomatic: true,
          fever: true,
          feverValue: "1456",
          vomiting: true,
          others: true,
          othersValue: "asddasd",
        },
        comorbidities: {
          none: true,
          hypertension: true,
          gastrointestinal: true,
          neurologicalDisease: true,
          others: true,
          othersValue: "adads",
        },
        pregnant: "Yes",
        lmp: Date.now(),
        highRiskPregnancy: "Yes",
        severeAcuteRespiratoryIllness: "No",
        chestImagingFindings: {
          dateOfChestImaging: Date.now(),
          imagingDone: "Chest radiography",
          chestImagingResults: "Lung ultrasound",
          otherChestImagingResultsValue: "asddasdas",
        },
      },
      labInfo: {
        testedPositiveBefore: "No",
        dateOfSpecimenCollection: Date.now(),
        laboratory: "adaasd",
        rtpcrCount: 3,
        labResultCollection: [
          {
            dateCollected: Date.now(),
            dateResultReleased: Date.now(),
            laboratory: "asdasda",
            testType: "Antigen test",
            antigenReason: " rtwerrewrtr",
            antigenBrandOfKit: "asddasda",
            testTypeOtherValue: "erwrwewr",
            results: "Negative",
            resultsOtherValue: " asdadsd",
          },
        ],
      },
      outcomeConditionAtTimeOfReport: {
        outcome: "Active",
        recovered: {
          dateOfRecovery: Date.now(),
        },
        died: {
          dateOfDeath: Date.now(),
          immediateCause: "adadas",
          underlyingCause: "opupoipo",
          antecedentCause: "oijjli",
          contributoryConditions: "oilihlolio",
        },
      },
    },
    contactTracing: {
      exposureHistory: {
        exposureHistory: "Yes",
        dateOfLastContact: Date.now(),
      },
      travelHistory: {
        travelHistory: "Yes, International",
        internationalTravel: {
          countryOfOrigin: "adsad",
          inclusiveTravelDateFrom: Date.now(),
          inclusiveTravelDateTo: Date.now(),
          withOngoingCommunityTransmission: "Yes",
          airlineSeaVessel: "asdadas",
          flightVesselNumber: "asdads",
          dateOfDeparture: Date.now(),
          dateOfArrivalInPH: Date.now(),
        },
        localTravel: {
          places: {
            healthFacility: true,
            closedSettings: true,
            market: true,
            transportFacility: true,
          },
          healthFacility: {
            nameOfPlace: "asdad",
            address: "asdadad",
            inclusiveDateFrom: Date.now(),
            inclusiveDateTo: Date.now(),
            withOngoingCommunityTransmission: "No",
          },
          closedSettings: {
            nameOfPlace: "asdad",
            address: "asdadad",
            inclusiveDateFrom: Date.now(),
            inclusiveDateTo: Date.now(),
            withOngoingCommunityTransmission: "No",
          },
          market: {
            nameOfPlace: "asdad",
            address: "asdadad",
            inclusiveDateFrom: Date.now(),
            inclusiveDateTo: Date.now(),
            withOngoingCommunityTransmission: "No",
          },
          transportFacility: [
            {
              airline_seaVessel_busline_train: "asdsad",
              flight_vessel_busNo: "asdadad",
              placeOfOrigin: "ewtertwtwe",
              departureDate: Date.now(),
              destination: "aswerwwrwe",
              dateOfArrival: Date.now(),
            },
          ],
        },
      },
      personsWithPatient: [
        {
          name: "asdadds",
          contactNumber: "asdsdsads",
        },
        {
          name: "ryrtty",
          contactNumber: "fgghhfdfh",
        },
      ],
    },
  });

  const bytes = await cifForm.save();
  fs.writeFileSync(__dirname + "/cif form_result.pdf", bytes);
};

test("cif", async () => {
  await run();
});
