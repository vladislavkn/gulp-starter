import { src, dest, watch, parallel } from "gulp";
import scss from "gulp-scss";
import concat from "gulp-concat";
import browserSyncFactory from "browser-sync";

import path from "./path-config.js";

const browserSync = browserSyncFactory.create();

export const serve = () =>
  browserSync.init({
    server: { baseDir: path.dest.folder },
  });

export const styles = () =>
  src(path.src.styles)
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat(path.dest.stylesFileName))
    .pipe(dest(path.dest.styles))
    .pipe(browserSync.stream());

export const watchFiles = () => {
  watch([path.src.styles], styles);
  watch([path.src.html]).on("change", browserSync.reload);
};

export default parallel(serve, watchFiles);
