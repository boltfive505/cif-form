import TextField from "~field-classes/TextField";
import RadioField from "~field-classes/RadioField";
import CheckField from "~field-classes/CheckField";

export interface ContactTracingFields {
  exposureHistory: {
    exposureHistory: RadioField<"Yes" | "No" | "Unknown">;
    dateOfLastContact: TextField;
  };
  travelHistory: {
    travelHistory: RadioField<
      "Yes, International" | "Yes, Local" | "No" | "Unknown Exposure"
    >;
    internationalTravel: {
      countryOfOrigin: TextField;
      inclusiveTravelDateFrom: TextField;
      inclusiveTravelDateTo: TextField;
      withOngoingCommunityTransmission: RadioField<"Yes" | "No">;
      airlineSeaVessel: TextField;
      flightVesselNumber: TextField;
      dateOfDeparture: TextField;
      dateOfArrivalInPH: TextField;
    };
    localTravel: {
      places: {
        healthFacility: CheckField;
        closedSettings: CheckField;
        school: CheckField;
        workplace: CheckField;
        market: CheckField;
        socialGathering: CheckField;
        others: CheckField;
        transportFacility: CheckField;
      };
      healthFacility: LocalTravelFields;
      closedSettings: LocalTravelFields;
      school: LocalTravelFields;
      workplace: LocalTravelFields;
      market: LocalTravelFields;
      socialGathering: LocalTravelFields;
      others: LocalTravelFields;
      transportFacility: [
        LocalTravelTransportFacilityFields,
        LocalTravelTransportFacilityFields
      ];
    };
  };
  personsWithPatient: [
    PersonWithPatientFields,
    PersonWithPatientFields,
    PersonWithPatientFields,
    PersonWithPatientFields
  ];
}

export interface LocalTravelFields {
  nameOfPlace: TextField;
  address: TextField;
  inclusiveDateFrom: TextField;
  inclusiveDateTo: TextField;
  withOngoingCommunityTransmission: RadioField<"Yes" | "No">;
}

export interface LocalTravelTransportFacilityFields {
  airline_seaVessel_busline_train: TextField;
  flight_vessel_busNo: TextField;
  placeOfOrigin: TextField;
  departureDate: TextField;
  destination: TextField;
  dateOfArrival: TextField;
}

export interface PersonWithPatientFields {
  name: TextField;
  contactNumber: TextField;
}

export interface ContactTracingValues {
  exposureHistory?: {
    exposureHistory?: "Yes" | "No" | "Unknown";
    dateOfLastContact?: string | number | Date;
  };
  travelHistory?: {
    travelHistory?:
      | "Yes, International"
      | "Yes, Local"
      | "No"
      | "Unknown Exposure";
    internationalTravel?: {
      countryOfOrigin?: string;
      inclusiveTravelDateFrom?: string | number | Date;
      inclusiveTravelDateTo?: string | number | Date;
      withOngoingCommunityTransmission?: "Yes" | "No";
      airlineSeaVessel?: string;
      flightVesselNumber?: string;
      dateOfDeparture?: string | number | Date;
      dateOfArrivalInPH?: string | number | Date;
    };
    localTravel?: {
      places?: {
        healthFacility: boolean | false;
        closedSettings: boolean | false;
        school: boolean | false;
        workplace: boolean | false;
        market: boolean | false;
        socialGathering: boolean | false;
        others: boolean | false;
        transportFacility: boolean | false;
      };
      healthFacility?: LocalTravelValues;
      closedSettings?: LocalTravelValues;
      school?: LocalTravelValues;
      workplace?: LocalTravelValues;
      market?: LocalTravelValues;
      socialGathering?: LocalTravelValues;
      others?: LocalTravelValues;
      transportFacility?: [
        LocalTravelTransportFacilityValues,
        LocalTravelTransportFacilityValues
      ];
    };
  };
  personsWithPatient?: [
    PersonWithPatientValues,
    PersonWithPatientValues,
    PersonWithPatientValues,
    PersonWithPatientValues
  ];
}

export interface LocalTravelValues {
  nameOfPlace?: string;
  address?: string;
  inclusiveDateFrom?: string | number | Date;
  inclusiveDateTo?: string | number | Date;
  withOngoingCommunityTransmission?: "Yes" | "No";
}

export interface LocalTravelTransportFacilityValues {
  airline_seaVessel_busline_train?: string;
  flight_vessel_busNo?: string;
  placeOfOrigin?: string;
  departureDate?: string | number | Date;
  destination?: string;
  dateOfArrival?: string | number | Date;
}

export interface PersonWithPatientValues {
  name?: string;
  contactNumber?: string;
}
