import Page from "base_classes/Page";
import Section from "base_classes/Section";
import { pixelsToUserSpace, sectionsGapHeight, labelHeight } from "src/utils";

import Patient_Profile from "./subsections/1_Patient_Profile";

class Patient_Info extends Section {
  patientProfile: Patient_Profile;

  constructor(page: Page) {
    const y =
      page.yOrigin - pixelsToUserSpace(520) - sectionsGapHeight - labelHeight;
    super(page, page.xOrigin, y);

    this.patientProfile = new Patient_Profile(page, this);
  }
}

export default Patient_Info;
