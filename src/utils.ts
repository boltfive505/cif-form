export const pixelsToUserSpace = (pixels: number) => {
  return (pixels / 300) * 72;
};

export const userSpaceToPixels = (userSpace: number) => {
  return (userSpace * 300) / 72;
};

export const labelFontSize = 6.5;

export const labelHeight = pixelsToUserSpace(42);
export const inputHeight = pixelsToUserSpace(52);

export const labelLeftMarginWidth = pixelsToUserSpace(26);
export const sectionsGapHeight = pixelsToUserSpace(25);

export const formFullWidth = pixelsToUserSpace(2253);
export const formHalfWidth = formFullWidth / 2;
export const formThirthWidth = formFullWidth / 3;
export const formFourthWidth = formFullWidth / 4;
export const formFifthWidth = formFullWidth / 5;
export const formSixthWidth = formFullWidth / 6;
