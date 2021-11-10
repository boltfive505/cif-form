import Page from "~base_classes/Page";
import Section from "~base_classes/Section";
import TextField from "~base_classes/fields/TextField";
import CheckField from "~base_classes/fields/CheckField";
import moment from "moment";
import {
  pixelsToUserSpace,
  labelHeight,
  formThirthWidth,
  inputHeight,
} from "~/utils";

interface PatientProfileValues {
  lastName: string;
  firstName: string;
  middleName: string;
  //
  birthday: number | Date;
  age: number;
  sex: "male" | "female";
  //
  civilStatus?: "Single" | "Married" | "Divorced" | "Separated" | "Widowed";
  nationality: string;
  //
  occupation?: string;
  worksInClosedSetting?: "yes" | "no" | "unknown";
}

const sexValues = ["male", "female"];

class Patient_Profile extends Section {
  private lastName: TextField;
  private firstName: TextField;
  private middleName: TextField;

  private birthday: TextField;
  private age: TextField;
  private sex: CheckField;

  private civilStatus: TextField;
  private nationality: TextField;

  private occupation: TextField;
  // private worksInClosedSetting: CheckField;

  constructor(page: Page, parentSection: Section) {
    const y = parentSection.yOrigin - labelHeight * 2;
    super(page, page.xOrigin, y);

    // assign fields
    this.lastName = new TextField(
      page,
      this.xOrigin,
      this.yOrigin,
      "Last Name*"
    );
    this.firstName = new TextField(
      page,
      this.xOrigin + formThirthWidth,
      this.yOrigin,
      "First Name (and Suffix)*"
    );
    this.middleName = new TextField(
      page,
      this.xOrigin + formThirthWidth * 2,
      this.yOrigin,
      "Middle Name*"
    );

    this.birthday = new TextField(
      page,
      this.xOrigin,
      this.yOrigin - inputHeight,
      "Birthday (MM/DD/YYYY)*"
    );
    this.age = new TextField(
      page,
      this.xOrigin + formThirthWidth,
      this.yOrigin - inputHeight,
      "Age*"
    );
    this.sex = new CheckField(
      page,
      this.xOrigin + pixelsToUserSpace(178) + formThirthWidth * 2,
      this.yOrigin - inputHeight,
      "Sex*",
      sexValues.map((value, index) => ({
        value,
        x: index * (pixelsToUserSpace(495) / sexValues.length),
      }))
    );

    this.civilStatus = new TextField(
      page,
      this.xOrigin,
      this.yOrigin - inputHeight * 2,
      "Civil Status"
    );
    this.nationality = new TextField(
      page,
      this.xOrigin + formThirthWidth,
      this.yOrigin - inputHeight * 2,
      "Nationality*"
    );

    this.occupation = new TextField(
      page,
      this.xOrigin,
      this.yOrigin - inputHeight * 3,
      "Occupation"
    );
    // works in a closed setting
  }

  setValues(values: PatientProfileValues) {
    this.lastName.writeText(values.lastName);
    this.firstName.writeText(values.firstName);
    this.middleName.writeText(values.middleName);

    this.birthday.writeText(moment(values.birthday).format("MM/DD/YYYY"));
    this.age.writeText(values.age.toString());
    this.sex.writeCheck(values.sex);

    this.civilStatus.writeText(values.civilStatus);
    this.nationality.writeText(values.nationality);

    this.occupation.writeText(values.occupation);
    // works in closed setting
  }
}

export default Patient_Profile;
