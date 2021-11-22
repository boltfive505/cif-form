import { PDFDocument } from "pdf-lib";
import fs from "fs";
import CifForm from "./classes";

export const loadCifForm = async (): Promise<CifForm> => {
  const pdfBytes = fs.readFileSync(__dirname + "/CIF_-_Version_9_fillable.pdf");
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const _instance = new CifForm(pdfDoc);
  return _instance;
};
