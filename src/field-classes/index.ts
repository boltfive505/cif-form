import { PDFForm } from "pdf-lib";
import TextField from "./TextField";
import CheckField from "./CheckField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

const createTextField = (form: PDFForm, fieldName: string) =>
  new TextField(form, fieldName);

const createCheckField = (form: PDFForm, fieldName: string) =>
  new CheckField(form, fieldName);

const createSelectField = (form: PDFForm, fieldName: string) =>
  new SelectField(form, fieldName);

const createRadioField = (form: PDFForm, fieldName: string) =>
  new RadioField(form, fieldName);

export const createFieldBase = (form: PDFForm) => {
  return {
    text: (fieldName: string) => createTextField(form, fieldName),
    check: (fieldName: string) => createCheckField(form, fieldName),
    select: (fieldName: string) => createSelectField(form, fieldName),
    radio: (fieldName: string) => createRadioField(form, fieldName),
  };
};
