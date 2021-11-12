import React, {useContext} from "react";
import useStyles from "../styles/AttributionStyles";
import {ThemeContext} from "../contexts/ThemeContext";

function Attribution() {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { attribution } = classes;
  return (
    <div className={attribution}>
      Coded by{" "}
      <a href="https://github.com/Emanuelbessa">Emanuel Bessa</a>.
    </div>
  );
}

export default Attribution;
