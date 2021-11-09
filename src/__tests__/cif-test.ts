import CifForm from "..";
import fs from "fs";

const cifTest = async () => {
  const cifForm = await CifForm.load();
  cifForm.page1.patientInfo.patientProfile.setValues({
    lastName: "salcedo",
    firstName: "baldwin",
    middleName: "eugenio",
    birthday: new Date(1996, 7, 5),
    age: 25,
    sex: "male",
    civilStatus: "single",
    nationality: "Filipino",
    occupation: "N/A",
    worksInClosedSetting: "no",
  });
  const buffer = await cifForm.save();
  fs.writeFileSync(__dirname + "/edited.pdf", buffer);
};

test("Cif Test", async () => {
  await cifTest();
});
