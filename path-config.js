const srcFolder = "src";
const distFolder = "dist";

export default {
  src: {
    styles: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    scripts: `${srcFolder}/scripts/**/*.js`,
  },
  dest: {
    folder: `${distFolder}/`,
    styles: `${distFolder}/assets/styles`,
    stylesFileName: "style.min.css",
    scripts: `${distFolder}/assets/scripts`,
    scriptsFileName: "script.min.js",
  },
};
