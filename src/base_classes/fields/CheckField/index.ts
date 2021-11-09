import Page from "base_classes/Page";
import _Field from "base_classes/_Field";
import { labelLeftMarginWidth } from "src/utils";

interface CheckValue {
  value: string;
  x?: number;
  y?: number;
}

class CheckField extends _Field {
  values: CheckValue[];

  constructor(
    page: Page,
    xOrigin: number,
    yOrigin: number,
    label: string,
    values: CheckValue[]
  ) {
    const x = xOrigin + labelLeftMarginWidth + page.getTextWidth(label);
    super(page, x, yOrigin);

    this.values = values;
  }

  writeCheck(value: string) {
    const selectedValue = this.values.find((x) => x.value === value);
    super.writeCheckmark({
      x: selectedValue?.x || 0,
      y: selectedValue?.y || 0,
    });
  }
}

export default CheckField;
