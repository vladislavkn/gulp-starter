const srcFolder = "src";
const distFolder = "dist";
const scriptsFileName = "script.min.js";
const stylesFileName = "style.min.css";

export default {
  src: {
    styles: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    fonts: `${srcFolder}/fonts/**/*`,
    images: `${srcFolder}/img/**/*`,
  },
  dest: {
    stylesFileName,
    scriptsFileName,
    folder: distFolder,
    stylesRelative: `./assets/styles/${stylesFileName}`,
    scriptsRelative: `./assets/styles/${scriptsFileName}`,
    styles: `${distFolder}/assets/styles`,
    scripts: `${distFolder}/assets/scripts`,
    fonts: `${distFolder}/assets/fonts`,
    images: `${distFolder}/assets/img`,
    html: `${distFolder}`,
  },
  stylesPlaceholder: "<!--@styles-->",
  scriptsPlaceholder: "<!--@scripts-->",
};

// TODO: fonts paths, img paths
