import _PageArea from "../_PageArea";
import Page from "../Page";

class Section extends _PageArea {
  constructor(page: Page, xOrigin: number, yOrigin: number) {
    super(page, xOrigin, yOrigin);
  }
}

export default Section;
