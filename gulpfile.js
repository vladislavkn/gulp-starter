import gulp from "gulp";
import scss from "gulp-sass";
import concat from "gulp-concat";
import browserSyncPlugin from "browser-sync";
import uglifyPlugin from "gulp-uglify-es";
import autoprefixer from "gulp-autoprefixer";
import imagemin from "gulp-imagemin";
import htmlmin from "gulp-htmlmin";
import babel from "gulp-babel";
import del from "del";

import path from "./path-config.js";

const { src, dest, watch, parallel, series } = gulp;
const browserSync = browserSyncPlugin.create();
const uglify = uglifyPlugin.default;

const serve = () =>
  browserSync.init({
    server: { baseDir: path.dest.folder },
  });

const clean = () => del(path.dest.folder);

const styles = () =>
  src(path.src.styles)
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
      })
    )
    .pipe(concat(path.dest.stylesFileName))
    .pipe(dest(path.dest.styles));

const scripts = () =>
  src(path.src.scripts)
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(concat(path.dest.scriptsFileName))
    .pipe(dest(path.dest.scripts));

const html = () =>
  src(path.src.html)
    .pipe(
      htmlmin({
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        sortAttributes: true,
      })
    )
    .pipe(dest(path.dest.html));

const fonts = () => src(path.src.fonts).pipe(dest(path.dest.fonts));

const images = () =>
  src(path.src.images).pipe(imagemin()).pipe(dest(path.dest.images));

const watchFiles = () => {
  watch([path.src.styles], styles).on("change", browserSync.reload);
  watch([path.src.html], html).on("change", browserSync.reload);
  watch([path.src.scripts], scripts).on("change", browserSync.reload);
  watch([path.src.images], images).on("change", browserSync.reload);
  watch([path.src.fonts], fonts).on("change", browserSync.reload);
};

export const build = series(
  clean,
  parallel(scripts, styles, html, images, fonts)
);

export default series(build, parallel(serve, watchFiles));
