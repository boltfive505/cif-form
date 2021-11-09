import _PageArea from "base_classes/_PageArea";
import Page from "base_classes/Page";
import { rgb } from "pdf-lib";
import { pixelsToUserSpace } from "src/utils";

interface Offset {
  x: number | 0;
  y: number | 0;
}

class _Field extends _PageArea {
  checkSvg: string = "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z";

  constructor(page: Page, xOrigin: number, yOrigin: number) {
    super(page, xOrigin, yOrigin);
  }

  protected writeText(text: string) {
    this.page.pdfPage.drawText(text, {
      x: this.xOrigin,
      y: this.yOrigin,
    });
  }

  protected writeCheckmark(offset: Offset) {
    this.page.pdfPage.drawSvgPath(this.checkSvg, {
      x: this.xOrigin + offset.x,
      y: this.yOrigin + pixelsToUserSpace(52) - offset.y,
      scale: 0.6,
      color: rgb(0, 0, 0),
    });
  }
}

export default _Field;
