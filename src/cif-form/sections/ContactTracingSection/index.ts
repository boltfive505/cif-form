import CifForm from "~/cif-form";
import { createFieldBase } from "~field-classes";
import {
  ContactTracingFields,
  ContactTracingValues,
  LocalTravelFields,
  LocalTravelTransportFacilityFields,
  PersonWithPatientFields,
} from "./interfaces";
import { formatDate } from "~/cif-form/utils";

class ContactTracingSection {
  fields: ContactTracingFields;

  constructor(cifForm: CifForm) {
    const createField = createFieldBase(cifForm.getForm());

    // local travel fields
    const localTravelHealthFacility: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceHealth Facility"),
      address: createField.text(
        "Address Region Province MunicipalityCityHealth Facility"
      ),
      inclusiveDateFrom: createField.text("FromHealth Facility"),
      inclusiveDateTo: createField.text("ToHealth Facility"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local1"
      ),
    };

    const localTravelClosedSettings: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceClosed Settings"),
      address: createField.text(
        "Address Region Province MunicipalityCityClosed Settings"
      ),
      inclusiveDateFrom: createField.text("FromClosed Settings"),
      inclusiveDateTo: createField.text("ToClosed Settings"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local2"
      ),
    };

    const localTravelSchool: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceSchool"),
      address: createField.text(
        "Address Region Province MunicipalityCitySchool"
      ),
      inclusiveDateFrom: createField.text("FromSchool"),
      inclusiveDateTo: createField.text("ToSchool"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local3"
      ),
    };

    const localTravelWorkplace: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceWorkplace"),
      address: createField.text(
        "Address Region Province MunicipalityCityWorkplace"
      ),
      inclusiveDateFrom: createField.text("FromWorkplace"),
      inclusiveDateTo: createField.text("ToWorkplace"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local4"
      ),
    };

    const localTravelMarket: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceMarket"),
      address: createField.text(
        "Address Region Province MunicipalityCityMarket"
      ),
      inclusiveDateFrom: createField.text("FromMarket"),
      inclusiveDateTo: createField.text("ToMarket"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local6"
      ),
    };

    const localTravelSocialGathering: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceSocial Gathering"),
      address: createField.text(
        "Address Region Province MunicipalityCitySocial Gathering"
      ),
      inclusiveDateFrom: createField.text("FromSocial Gathering"),
      inclusiveDateTo: createField.text("ToSocial Gathering"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local5"
      ),
    };

    const localTravelOthers: LocalTravelFields = {
      nameOfPlace: createField.text("Name of PlaceOthers"),
      address: createField.text(
        "Address Region Province MunicipalityCityOthers"
      ),
      inclusiveDateFrom: createField.text("FromOthers"),
      inclusiveDateTo: createField.text("ToOthers"),
      withOngoingCommunityTransmission: createField.radio(
        "CommunityTransmission-Local7"
      ),
    };

    // local travel transport facility fields
    const localTravelTransportFacility1: LocalTravelTransportFacilityFields = {
      airline_seaVessel_busline_train: createField.text(
        "Airline Sea vessel Bus line TrainRow1"
      ),
      flight_vessel_busNo: createField.text("Flight Vessel Bus NoRow1"),
      placeOfOrigin: createField.text("Place of OriginRow1"),
      departureDate: createField.text("Departure Date Row1"),
      destination: createField.text("DestinationRow1"),
      dateOfArrival: createField.text("Date of Arrival Row1"),
    };

    const localTravelTransportFacility2: LocalTravelTransportFacilityFields = {
      airline_seaVessel_busline_train: createField.text(
        "Airline Sea vessel Bus line TrainRow2"
      ),
      flight_vessel_busNo: createField.text("Flight Vessel Bus NoRow2"),
      placeOfOrigin: createField.text("Place of OriginRow2"),
      departureDate: createField.text("Departure Date Row2"),
      destination: createField.text("DestinationRow2"),
      dateOfArrival: createField.text("Date of Arrival Row2"),
    };

    // person with patient fields
    const personWithPatientFields1: PersonWithPatientFields = {
      name: createField.text("Close contact name 1"),
      contactNumber: createField.text("Close contact number 1"),
    };

    const personWithPatientFields2: PersonWithPatientFields = {
      name: createField.text("Close contact name 2"),
      contactNumber: createField.text("Close contact number 2"),
    };

    const personWithPatientFields3: PersonWithPatientFields = {
      name: createField.text("Close contact name 3"),
      contactNumber: createField.text("Close contact number 3"),
    };

    const personWithPatientFields4: PersonWithPatientFields = {
      name: createField.text("Close contact name 4"),
      contactNumber: createField.text("Close contact number 4"),
    };

    // all fields
    this.fields = {
      exposureHistory: {
        exposureHistory: createField.radio("ExposureHistory"),
        dateOfLastContact: createField.text("Date of last contact"),
      },
      travelHistory: {
        travelHistory: createField.radio("TravelHistory"),
        internationalTravel: {
          countryOfOrigin: createField.text(
            "If International Travel country of origin"
          ),
          inclusiveTravelDateFrom: createField.text("From"),
          inclusiveTravelDateTo: createField.text("To"),
          withOngoingCommunityTransmission: createField.radio(
            "CommunityTransmission-Int"
          ),
          airlineSeaVessel: createField.text("AirlineSea vessel"),
          flightVesselNumber: createField.text("FlightVessel NumberRow1"),
          dateOfDeparture: createField.text("Date of departure"),
          dateOfArrivalInPH: createField.text("Date of arrival in PH"),
        },
        localTravel: {
          places: {
            healthFacility: createField.check("LHealth Facility"),
            closedSettings: createField.check("LClosed Settings"),
            school: createField.check("LSchool"),
            workplace: createField.check("LWorkplace"),
            market: createField.check("LMarket"),
            socialGathering: createField.check("LSocial Gathering"),
            others: createField.check("LOthers"),
            transportFacility: createField.check("LTransport Service"),
          },
          healthFacility: localTravelHealthFacility,
          closedSettings: localTravelClosedSettings,
          school: localTravelSchool,
          workplace: localTravelWorkplace,
          market: localTravelMarket,
          socialGathering: localTravelSocialGathering,
          others: localTravelOthers,
          transportFacility: [
            localTravelTransportFacility1,
            localTravelTransportFacility2,
          ],
        },
      },
      personsWithPatient: [
        personWithPatientFields1,
        personWithPatientFields2,
        personWithPatientFields3,
        personWithPatientFields4,
      ],
    };
  }

  setValues(values: ContactTracingValues) {
    // exposure history
    if (values.exposureHistory) {
      this.fields.exposureHistory.exposureHistory.select(
        values.exposureHistory.exposureHistory
      );
      this.fields.exposureHistory.dateOfLastContact.setText(
        formatDate(values.exposureHistory.dateOfLastContact)
      );
    }
    // travel history
    if (values.travelHistory) {
      this.fields.travelHistory.travelHistory.select(
        values.travelHistory.travelHistory
      );
      // international travel
      if (values.travelHistory.internationalTravel) {
        this.fields.travelHistory.internationalTravel.countryOfOrigin.setText(
          values.travelHistory.internationalTravel.countryOfOrigin
        );
        this.fields.travelHistory.internationalTravel.inclusiveTravelDateFrom.setText(
          formatDate(
            values.travelHistory.internationalTravel.inclusiveTravelDateFrom
          )
        );
        this.fields.travelHistory.internationalTravel.inclusiveTravelDateTo.setText(
          formatDate(
            values.travelHistory.internationalTravel.inclusiveTravelDateTo
          )
        );
        this.fields.travelHistory.internationalTravel.withOngoingCommunityTransmission.select(
          values.travelHistory.internationalTravel
            .withOngoingCommunityTransmission
        );
        this.fields.travelHistory.internationalTravel.airlineSeaVessel.setText(
          values.travelHistory.internationalTravel.airlineSeaVessel
        );
        this.fields.travelHistory.internationalTravel.flightVesselNumber.setText(
          values.travelHistory.internationalTravel.flightVesselNumber
        );
        this.fields.travelHistory.internationalTravel.dateOfDeparture.setText(
          formatDate(values.travelHistory.internationalTravel.dateOfDeparture)
        );
        this.fields.travelHistory.internationalTravel.dateOfArrivalInPH.setText(
          formatDate(values.travelHistory.internationalTravel.dateOfArrivalInPH)
        );
      }
      // local traver
      if (values.travelHistory.localTravel) {
        // places
        if (values.travelHistory.localTravel.places) {
          this.fields.travelHistory.localTravel.places.healthFacility.toggle(
            values.travelHistory.localTravel.places.healthFacility
          );
          this.fields.travelHistory.localTravel.places.closedSettings.toggle(
            values.travelHistory.localTravel.places.closedSettings
          );
          this.fields.travelHistory.localTravel.places.school.toggle(
            values.travelHistory.localTravel.places.school
          );
          this.fields.travelHistory.localTravel.places.workplace.toggle(
            values.travelHistory.localTravel.places.workplace
          );
          this.fields.travelHistory.localTravel.places.market.toggle(
            values.travelHistory.localTravel.places.market
          );
          this.fields.travelHistory.localTravel.places.socialGathering.toggle(
            values.travelHistory.localTravel.places.socialGathering
          );
          this.fields.travelHistory.localTravel.places.others.toggle(
            values.travelHistory.localTravel.places.others
          );
          this.fields.travelHistory.localTravel.places.transportFacility.toggle(
            values.travelHistory.localTravel.places.transportFacility
          );
        }
        // health facility
        if (values.travelHistory.localTravel.healthFacility) {
          this.fields.travelHistory.localTravel.healthFacility.nameOfPlace.setText(
            values.travelHistory.localTravel.healthFacility.nameOfPlace
          );
          this.fields.travelHistory.localTravel.healthFacility.address.setText(
            values.travelHistory.localTravel.healthFacility.address
          );
          this.fields.travelHistory.localTravel.healthFacility.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.healthFacility.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.healthFacility.inclusiveDateTo.setText(
            formatDate(
              values.travelHistory.localTravel.healthFacility.inclusiveDateTo
            )
          );
          this.fields.travelHistory.localTravel.healthFacility.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.healthFacility
              .withOngoingCommunityTransmission
          );
        }
        // closed settings
        if (values.travelHistory.localTravel.closedSettings) {
          this.fields.travelHistory.localTravel.closedSettings.nameOfPlace.setText(
            values.travelHistory.localTravel.closedSettings.nameOfPlace
          );
          this.fields.travelHistory.localTravel.closedSettings.address.setText(
            values.travelHistory.localTravel.closedSettings.address
          );
          this.fields.travelHistory.localTravel.closedSettings.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.closedSettings.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.closedSettings.inclusiveDateTo.setText(
            formatDate(
              values.travelHistory.localTravel.closedSettings.inclusiveDateTo
            )
          );
          this.fields.travelHistory.localTravel.closedSettings.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.closedSettings
              .withOngoingCommunityTransmission
          );
        }
        // school
        if (values.travelHistory.localTravel.school) {
          this.fields.travelHistory.localTravel.school.nameOfPlace.setText(
            values.travelHistory.localTravel.school.nameOfPlace
          );
          this.fields.travelHistory.localTravel.school.address.setText(
            values.travelHistory.localTravel.school.address
          );
          this.fields.travelHistory.localTravel.school.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.school.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.school.inclusiveDateTo.setText(
            formatDate(values.travelHistory.localTravel.school.inclusiveDateTo)
          );
          this.fields.travelHistory.localTravel.school.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.school
              .withOngoingCommunityTransmission
          );
        }
        // workplace
        if (values.travelHistory.localTravel.workplace) {
          this.fields.travelHistory.localTravel.workplace.nameOfPlace.setText(
            values.travelHistory.localTravel.workplace.nameOfPlace
          );
          this.fields.travelHistory.localTravel.workplace.address.setText(
            values.travelHistory.localTravel.workplace.address
          );
          this.fields.travelHistory.localTravel.workplace.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.workplace.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.workplace.inclusiveDateTo.setText(
            formatDate(
              values.travelHistory.localTravel.workplace.inclusiveDateTo
            )
          );
          this.fields.travelHistory.localTravel.workplace.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.workplace
              .withOngoingCommunityTransmission
          );
        }
        // market
        if (values.travelHistory.localTravel.market) {
          this.fields.travelHistory.localTravel.market.nameOfPlace.setText(
            values.travelHistory.localTravel.market.nameOfPlace
          );
          this.fields.travelHistory.localTravel.market.address.setText(
            values.travelHistory.localTravel.market.address
          );
          this.fields.travelHistory.localTravel.market.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.market.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.market.inclusiveDateTo.setText(
            formatDate(values.travelHistory.localTravel.market.inclusiveDateTo)
          );
          this.fields.travelHistory.localTravel.market.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.market
              .withOngoingCommunityTransmission
          );
        }
        // social gathering
        if (values.travelHistory.localTravel.socialGathering) {
          this.fields.travelHistory.localTravel.socialGathering.nameOfPlace.setText(
            values.travelHistory.localTravel.socialGathering.nameOfPlace
          );
          this.fields.travelHistory.localTravel.socialGathering.address.setText(
            values.travelHistory.localTravel.socialGathering.address
          );
          this.fields.travelHistory.localTravel.socialGathering.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.socialGathering.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.socialGathering.inclusiveDateTo.setText(
            formatDate(
              values.travelHistory.localTravel.socialGathering.inclusiveDateTo
            )
          );
          this.fields.travelHistory.localTravel.socialGathering.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.socialGathering
              .withOngoingCommunityTransmission
          );
        }
        // others
        if (values.travelHistory.localTravel.others) {
          this.fields.travelHistory.localTravel.others.nameOfPlace.setText(
            values.travelHistory.localTravel.others.nameOfPlace
          );
          this.fields.travelHistory.localTravel.others.address.setText(
            values.travelHistory.localTravel.others.address
          );
          this.fields.travelHistory.localTravel.others.inclusiveDateFrom.setText(
            formatDate(
              values.travelHistory.localTravel.others.inclusiveDateFrom
            )
          );
          this.fields.travelHistory.localTravel.others.inclusiveDateTo.setText(
            formatDate(values.travelHistory.localTravel.others.inclusiveDateTo)
          );
          this.fields.travelHistory.localTravel.others.withOngoingCommunityTransmission.select(
            values.travelHistory.localTravel.others
              .withOngoingCommunityTransmission
          );
        }
        // transport facility
        if (values.travelHistory.localTravel.transportFacility) {
          values.travelHistory.localTravel.transportFacility.forEach(
            (item, index) => {
              this.fields.travelHistory.localTravel.transportFacility[
                index
              ].airline_seaVessel_busline_train.setText(
                item.airline_seaVessel_busline_train
              );
              this.fields.travelHistory.localTravel.transportFacility[
                index
              ].flight_vessel_busNo.setText(item.flight_vessel_busNo);
              this.fields.travelHistory.localTravel.transportFacility[
                index
              ].placeOfOrigin.setText(item.placeOfOrigin);
              this.fields.travelHistory.localTravel.transportFacility[
                index
              ].departureDate.setText(formatDate(item.departureDate));
              this.fields.travelHistory.localTravel.transportFacility[
                index
              ].destination.setText(item.destination);
              this.fields.travelHistory.localTravel.transportFacility[
                index
              ].dateOfArrival.setText(formatDate(item.dateOfArrival));
            }
          );
        }
      }
    }
    // persons with patient
    if (values.personsWithPatient) {
      values.personsWithPatient.forEach((item, index) => {
        this.fields.personsWithPatient[index].name.setText(item.name);
        this.fields.personsWithPatient[index].contactNumber.setText(
          item.contactNumber
        );
      });
    }
  }
}

export default ContactTracingSection;
