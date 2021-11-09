import Page from "../Page";

class _PageArea {
  page: Page;
  xOrigin: number;
  yOrigin: number;

  constructor(page: Page, xOrigin: number, yOrigin: number) {
    this.page = page;
    this.xOrigin = xOrigin;
    this.yOrigin = yOrigin;
  }
}

export default _PageArea;
