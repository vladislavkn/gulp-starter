const srcFolder = "src";
const distFolder = "dist";

export default {
  src: {
    styles: `${srcFolder}/styles/**/*.scss`,
    html: `${distFolder}/**/*.html`,
  },
  dest: {
    folder: `${distFolder}/`,
    styles: `${distFolder}/assets/styles`,
    stylesFileName: "style.min.css",
  },
};
