import { src, dest, watch, parallel } from "gulp";
import scss from "gulp-scss";
import concat from "gulp-concat";
import browserSyncPlugin from "browser-sync";
import uglifyPlugin from "gulp-uglify-es";

import path from "./path-config.js";

const browserSync = browserSyncPlugin.create();
const uglify = uglifyPlugin.default;

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

export const scripts = () =>
  src(path.src.scripts)
    .pipe(uglify())
    .pipe(concat(path.dest.scriptsFileName))
    .pipe(dest(path.dest.scripts))
    .pipe(browserSync.stream());

export const watchFiles = () => {
  watch([path.src.styles], styles);
  watch([path.src.html]).on("change", browserSync.reload);
  watch([path.src.scripts], scripts);
};

export default parallel(serve, watchFiles);
