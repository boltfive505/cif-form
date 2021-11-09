import Page from "base_classes/Page";
import _Field from "base_classes/_Field";
import { labelLeftMarginWidth } from "src/utils";

class TextField extends _Field {
  constructor(page: Page, xOrigin: number, yOrigin: number, label: string) {
    const x =
      xOrigin + labelLeftMarginWidth + page.getTextWidth(label + "    ");
    super(page, x, yOrigin);
  }

  writeText(text: string | undefined) {
    if (text?.length !== 0) {
      super.writeText(text || "");
    }
  }
}

export default TextField;
