import TextField from "~field-classes/TextField";
import RadioField from "~field-classes/RadioField";
import SelectField from "~field-classes/SelectField";

export interface PatientInfoFields {
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
