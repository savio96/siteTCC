import React from "react";

import styles from "../Header/header.module.scss";
import { NavigationBar } from "../NavigationBar/NavigationBar";
const Header = () => {
  return (
    <div className={styles["teste"]}>
      <NavigationBar />
    </div>
  );
};

export { Header };
