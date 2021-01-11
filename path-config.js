const srcFolder = "src";
const distFolder = "dist";

export default {
  src: {
    styles: `${srcFolder}/styles/**/*.scss`,
  },
  dest: {
    styles: `${distFolder}/assets/styles`,
    stylesFileName: "style.min.css",
  },
};
