import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p style={{ fontSize: "40px", textAlign: "center" }}>Banner</p>
      <hr />
    </div>
  );
};

export default Banner;
