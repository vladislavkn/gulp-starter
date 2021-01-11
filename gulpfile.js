import { src, dest, watch as watchFunction } from "gulp";
import scss from "gulp-scss";
import concat from "gulp-concat";

import path from "./path-config.js";

export const styles = () =>
  src(path.src.styles)
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat(path.dest.stylesFileName))
    .pipe(dest(path.dest.styles));

export const watch = () => watchFunction([path.src.styles], styles);
