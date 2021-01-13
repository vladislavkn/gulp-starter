const srcFolder = "src";
const distFolder = "dist";

export default {
  src: {
    styles: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    fonts: `${srcFolder}/fonts/**/*`,
    images: `${srcFolder}/img/**/*`,
  },
  dest: {
    folder: `${distFolder}/`,
    styles: `${distFolder}/assets/styles`,
    stylesFileName: "style.min.css",
    scripts: `${distFolder}/assets/scripts`,
    scriptsFileName: "script.min.js",
    fonts: `${distFolder}/assets/fonts`,
    images: `${distFolder}/assets/img`,
    html: `${distFolder}`,
  },
};

// TODO: fonts paths, img paths
