import CifForm from "~/classes";
import TextField from "~field-classes/TextField";
import RadioField from "~field-classes/RadioField";
import SelectField from "~field-classes/SelectField";
import { createFieldBase } from "~field-classes";
import moment from "moment";

class PatientInfoSection {
  fields: PatientInfoFields;

  constructor(cifForm: CifForm) {
    const createField = createFieldBase(cifForm.getForm());

    this.fields = {
      profile: {
        lastName: createField.text("Last Name"),
        firstNameAndSuffix: createField.text("First Name and Suffix"),
        middleName: createField.text("Middle Name"),
        birthday: createField.text("Birthday"),
        age: createField.text("Age"),
        sex: createField.radio("Sex"),
        civilStatus: createField.select("Civil Status"),
        nationality: createField.text("Nationality"),
        occupation: createField.text("Occupation"),
        worksInClosedSetting: createField.radio("Works in Closed Setting"),
      },
      currentAddress: {
        houseNo_lot_bldg: createField.text("House NoLotBldgRow1"),
        street_purok_sitio: createField.text("StreetPurokSitioRow1"),
        barangay: createField.text("BarangayRow1"),
        municipality_city: createField.text("MunicipalityCityRow1"),
        province: createField.text("ProvinceRow1"),
        homePhoneNo_areaCode: createField.text("Home Phone No  Area CodeRow1"),
        cellphoneNo: createField.text("Cellphone NoRow1"),
        emailAddress: createField.text("Email AddressRow1"),
      },
      permanentAddress: {
        houseNo_lot_bldg: createField.text("House NoLotBldgRow1_2"),
        street_purok_sitio: createField.text("StreetPurokSitioRow1_2"),
        barangay: createField.text("BarangayRow1_2"),
        municipality_city: createField.text("MunicipalityCityRow1_2"),
        province: createField.text("ProvinceRow1_2"),
        homePhoneNo_areaCode: createField.text(
          "Home Phone No  Area CodeRow1_2"
        ),
        cellphoneNo: createField.text("Cellphone NoRow1_2"),
        emailAddress: createField.text("Email AddressRow1_2"),
      },
      currentWorkplaceAddress: {
        lot_bldg: createField.text("LotBldgRow1"),
        street: createField.text("StreetRow1"),
        barangay: createField.text("BarangayRow1_3"),
        municipality_city: createField.text("MunicipalityCityRow1_3"),
        province: createField.text("ProvinceRow1_3"),
        nameOfWorkplace: createField.text("Name of WorkplaceRow1"),
        phoneNo_cellphoneNo: createField.text("Phone NoCellphone NoRow1"),
        emailAddress: createField.text("Email AddressRow1_3"),
      },
      specialPopulation: {
        healthCareWorker: {
          isHealthCareWorker: createField.radio("Health Care Worker"),
          healthFacilityName: createField.text("Health Facility Name"),
          healthFacilityLocation: createField.text("Health Facility Location"),
        },
        returningOverseasFilipino: {
          isReturningOverseasFilipino: createField.radio(
            "Returning Overseas Filipino"
          ),
          countryOfOrigin: createField.text("Country of Origin ROF"),
          passportNumber: createField.text("Passport Number ROF"),
          OFW: createField.radio("OFW"),
        },
        foreignTraveller: {
          isForeignTraveller: createField.radio("Foreign National"),
          countryOfOrigin: createField.text("Country of Origin FN"),
          passportNumber: createField.text("Passport Number FN"),
        },
        localTraveller: {
          isLocalTraveller: createField.radio("LSI-APOR-LocalTraveler"),
          cityMunicipalityProvinceOfOrigin: createField.text(
            "City, Municipality, and Province of origin"
          ),
          specific: createField.radio("LSI-APOR-LocalTraveler Specific"),
        },
        livesInClosedSettings: {
          isLivesInClosedSettings: createField.radio(
            "Lives in Closed Settings"
          ),
          institutionType: createField.text("Institution Type"),
          institutionName: createField.text("Institution Name"),
        },
      },
    };
  }

  setValues(values: PatientInfoValues) {
    // profile
    if (values.profile) {
      this.fields.profile.lastName.setText(values.profile.lastName);
      this.fields.profile.firstNameAndSuffix.setText(
        values.profile.firstNameAndSuffix
      );
      this.fields.profile.middleName.setText(values.profile.middleName);
      this.fields.profile.birthday.setText(
        moment(values.profile.birthday).format("MM/DD/YYYY")
      );
      this.fields.profile.age.setText(values.profile.age?.toString());
      if (values.profile.sex)
        this.fields.profile.sex.select(values.profile.sex);
      this.fields.profile.civilStatus.select(values.profile.civilStatus);
      this.fields.profile.nationality.setText(values.profile.nationality);
      this.fields.profile.occupation.setText(values.profile.occupation);
      if (values.profile.worksInClosedSetting)
        this.fields.profile.worksInClosedSetting.select(
          values.profile.worksInClosedSetting
        );
    }

    // current address
    if (values.currentAddress) {
      this.fields.currentAddress.houseNo_lot_bldg.setText(
        values.currentAddress.houseNo_lot_bldg
      );
      this.fields.currentAddress.street_purok_sitio.setText(
        values.currentAddress.street_purok_sitio
      );
      this.fields.currentAddress.barangay.setText(
        values.currentAddress.barangay
      );
      this.fields.currentAddress.municipality_city.setText(
        values.currentAddress.municipality_city
      );
      this.fields.currentAddress.province.setText(
        values.currentAddress.province
      );
      this.fields.currentAddress.homePhoneNo_areaCode.setText(
        values.currentAddress.homePhoneNo_areaCode
      );
      this.fields.currentAddress.cellphoneNo.setText(
        values.currentAddress.cellphoneNo
      );
      this.fields.currentAddress.emailAddress.setText(
        values.currentAddress.emailAddress
      );
    }

    // permanent address
    if (values.permanentAddress) {
      this.fields.permanentAddress.houseNo_lot_bldg.setText(
        values.permanentAddress.houseNo_lot_bldg
      );
      this.fields.permanentAddress.street_purok_sitio.setText(
        values.permanentAddress.street_purok_sitio
      );
      this.fields.permanentAddress.barangay.setText(
        values.permanentAddress.barangay
      );
      this.fields.permanentAddress.municipality_city.setText(
        values.permanentAddress.municipality_city
      );
      this.fields.permanentAddress.province.setText(
        values.permanentAddress.province
      );
      this.fields.permanentAddress.homePhoneNo_areaCode.setText(
        values.permanentAddress.homePhoneNo_areaCode
      );
      this.fields.permanentAddress.cellphoneNo.setText(
        values.permanentAddress.cellphoneNo
      );
      this.fields.permanentAddress.emailAddress.setText(
        values.permanentAddress.emailAddress
      );
    }

    // current workplace address
    if (values.currentWorkplaceAddress) {
      this.fields.currentWorkplaceAddress.lot_bldg.setText(
        values.currentWorkplaceAddress.lot_bldg
      );
      this.fields.currentWorkplaceAddress.street.setText(
        values.currentWorkplaceAddress.street
      );
      this.fields.currentWorkplaceAddress.barangay.setText(
        values.currentWorkplaceAddress.barangay
      );
      this.fields.currentWorkplaceAddress.municipality_city.setText(
        values.currentWorkplaceAddress.municipality_city
      );
      this.fields.currentWorkplaceAddress.province.setText(
        values.currentWorkplaceAddress.province
      );
      this.fields.currentWorkplaceAddress.nameOfWorkplace.setText(
        values.currentWorkplaceAddress.nameOfWorkplace
      );
      this.fields.currentWorkplaceAddress.phoneNo_cellphoneNo.setText(
        values.currentWorkplaceAddress.phoneNo_cellphoneNo
      );
      this.fields.currentWorkplaceAddress.emailAddress.setText(
        values.currentWorkplaceAddress.emailAddress
      );
    }

    // spedial population
    if (values.specialPopulation) {
      // health care worker
      if (values.specialPopulation.healthCareWorker) {
        this.fields.specialPopulation.healthCareWorker.isHealthCareWorker.select(
          values.specialPopulation.healthCareWorker.isHealthCareWorker
        );
        this.fields.specialPopulation.healthCareWorker.healthFacilityName.setText(
          values.specialPopulation.healthCareWorker.healthFacilityName
        );
        this.fields.specialPopulation.healthCareWorker.healthFacilityLocation.setText(
          values.specialPopulation.healthCareWorker.healthFacilityLocation
        );
      }

      // ofw
      if (values.specialPopulation.returningOverseasFilipino) {
        this.fields.specialPopulation.returningOverseasFilipino.isReturningOverseasFilipino.select(
          values.specialPopulation.returningOverseasFilipino
            .isReturningOverseasFilipino
        );
        this.fields.specialPopulation.returningOverseasFilipino.countryOfOrigin.setText(
          values.specialPopulation.returningOverseasFilipino.countryOfOrigin
        );
        this.fields.specialPopulation.returningOverseasFilipino.passportNumber.setText(
          values.specialPopulation.returningOverseasFilipino.passportNumber
        );
        this.fields.specialPopulation.returningOverseasFilipino.OFW.select(
          values.specialPopulation.returningOverseasFilipino.OFW
        );
      }

      // foreign traveller
      if (values.specialPopulation.foreignTraveller) {
        this.fields.specialPopulation.foreignTraveller.isForeignTraveller.select(
          values.specialPopulation.foreignTraveller.isForeignTraveller
        );
        this.fields.specialPopulation.foreignTraveller.countryOfOrigin.setText(
          values.specialPopulation.foreignTraveller.countryOfOrigin
        );
        this.fields.specialPopulation.foreignTraveller.passportNumber.setText(
          values.specialPopulation.foreignTraveller.passportNumber
        );
      }

      // local traveller
      if (values.specialPopulation.localTraveller) {
        this.fields.specialPopulation.localTraveller.isLocalTraveller.select(
          values.specialPopulation.localTraveller.isLocalTraveller
        );
        this.fields.specialPopulation.localTraveller.cityMunicipalityProvinceOfOrigin.setText(
          values.specialPopulation.localTraveller
            .cityMunicipalityProvinceOfOrigin
        );
        this.fields.specialPopulation.localTraveller.specific.select(
          values.specialPopulation.localTraveller.specific
        );
      }

      // lives in closed settings
      if (values.specialPopulation.livesInClosedSettings) {
        this.fields.specialPopulation.livesInClosedSettings.isLivesInClosedSettings.select(
          values.specialPopulation.livesInClosedSettings.isLivesInClosedSettings
        );
        this.fields.specialPopulation.livesInClosedSettings.institutionType.setText(
          values.specialPopulation.livesInClosedSettings.institutionType
        );
        this.fields.specialPopulation.livesInClosedSettings.institutionName.setText(
          values.specialPopulation.livesInClosedSettings.institutionName
        );
      }
    }
  }
}

interface PatientInfoFields {
  profile: {
    lastName: TextField;
    firstNameAndSuffix: TextField;
    middleName: TextField;
    birthday: TextField;
    age: TextField;
    sex: RadioField<"Male" | "Female">;
    civilStatus: SelectField<
      "Single" | "Married" | "Divorced" | "Separated" | "Widowed"
    >;
    nationality: TextField;
    occupation: TextField;
    worksInClosedSetting: RadioField<"Yes" | "No" | "Unknown">;
  };
  currentAddress: {
    houseNo_lot_bldg: TextField;
    street_purok_sitio: TextField;
    barangay: TextField;
    municipality_city: TextField;
    province: TextField;
    homePhoneNo_areaCode: TextField;
    cellphoneNo: TextField;
    emailAddress: TextField;
  };
  permanentAddress: {
    houseNo_lot_bldg: TextField;
    street_purok_sitio: TextField;
    barangay: TextField;
    municipality_city: TextField;
    province: TextField;
    homePhoneNo_areaCode: TextField;
    cellphoneNo: TextField;
    emailAddress: TextField;
  };
  currentWorkplaceAddress: {
    lot_bldg: TextField;
    street: TextField;
    barangay: TextField;
    municipality_city: TextField;
    province: TextField;
    nameOfWorkplace: TextField;
    phoneNo_cellphoneNo: TextField;
    emailAddress: TextField;
  };
  specialPopulation: {
    healthCareWorker: {
      isHealthCareWorker: RadioField<"Yes" | "No">;
      healthFacilityName: TextField;
      healthFacilityLocation: TextField;
    };
    returningOverseasFilipino: {
      isReturningOverseasFilipino: RadioField<"Yes" | "No">;
      countryOfOrigin: TextField;
      passportNumber: TextField;
      OFW: RadioField<"OFW" | "Non-OFW">;
    };
    foreignTraveller: {
      isForeignTraveller: RadioField<"Yes" | "No">;
      countryOfOrigin: TextField;
      passportNumber: TextField;
    };
    localTraveller: {
      isLocalTraveller: RadioField<"Yes" | "No">;
      cityMunicipalityProvinceOfOrigin: TextField;
      specific: RadioField<
        | "Locally Stranded Individual"
        | "Authorized Person Outside Residence / Local Traveler"
      >;
    };
    livesInClosedSettings: {
      isLivesInClosedSettings: RadioField<"Yes" | "No">;
      institutionType: TextField;
      institutionName: TextField;
    };
  };
}

export interface PatientInfoValues {
  profile: {
    lastName?: string;
    firstNameAndSuffix?: string;
    middleName?: string;
    birthday?: number | string | Date;
    age?: number;
    sex?: "Male" | "Female";
    civilStatus?: "Single" | "Married" | "Divorced" | "Separated" | "Widowed";
    nationality?: string;
    occupation?: string;
    worksInClosedSetting?: "Yes" | "No" | "Unknown";
  };
  currentAddress: {
    houseNo_lot_bldg?: string;
    street_purok_sitio?: string;
    barangay?: string;
    municipality_city?: string;
    province?: string;
    homePhoneNo_areaCode?: string;
    cellphoneNo?: string;
    emailAddress?: string;
  };
  permanentAddress: {
    houseNo_lot_bldg?: string;
    street_purok_sitio?: string;
    barangay?: string;
    municipality_city?: string;
    province?: string;
    homePhoneNo_areaCode?: string;
    cellphoneNo?: string;
    emailAddress?: string;
  };
  currentWorkplaceAddress: {
    lot_bldg?: string;
    street?: string;
    barangay?: string;
    municipality_city?: string;
    province?: string;
    nameOfWorkplace?: string;
    phoneNo_cellphoneNo?: string;
    emailAddress?: string;
  };
  specialPopulation: {
    healthCareWorker: {
      isHealthCareWorker?: "Yes" | "No";
      healthFacilityName?: string;
      healthFacilityLocation?: string;
    };
    returningOverseasFilipino: {
      isReturningOverseasFilipino?: "Yes" | "No";
      countryOfOrigin?: string;
      passportNumber?: string;
      OFW?: "OFW" | "Non-OFW";
    };
    foreignTraveller: {
      isForeignTraveller?: "Yes" | "No";
      countryOfOrigin?: string;
      passportNumber?: string;
    };
    localTraveller: {
      isLocalTraveller?: "Yes" | "No";
      cityMunicipalityProvinceOfOrigin?: string;
      specific?:
        | "Locally Stranded Individual"
        | "Authorized Person Outside Residence / Local Traveler";
    };
    livesInClosedSettings: {
      isLivesInClosedSettings?: "Yes" | "No";
      institutionType?: string;
      institutionName?: string;
    };
  };
}

export default PatientInfoSection;
