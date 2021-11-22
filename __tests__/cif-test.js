const { loadCifForm } = require("../lib");
const fs = require("fs");

const test = async () => {
  const cifForm = await loadCifForm();

  cifForm.setValues({
    header: {
      diseaseReportingUnit: "testing",
      druRegionAndProvince: "adas",
      philHealthNo: "asdas",
      existingCase: {
        notApplicable_newCase: true,
        updateLabResult: true,
        others: true,
        othersField: "adsaa",
      },
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
        age: 25,
      },
      currentAddress: {
        houseNo_lot_bldg: "335",
        street_purok_sitio: "Magdalo",
        barangay: "Potol",
        municipality_city: "Kawit",
        province: "Cavite",
      },
    },
  });

  const bytes = await cifForm.save();
  fs.writeFileSync(__dirname + "/cif form_result.pdf", bytes);
};

test().catch((err) => console.error(err));
