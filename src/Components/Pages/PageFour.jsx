import React from "react";
import styles from "../styles/PageFour.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiceFive, faCrown } from "@fortawesome/free-solid-svg-icons";

export default function PageFour() {
  return (
    <div className={styles.PageTwo}>
      <div className={styles.Right}>
        <form className={styles.form}>
          <div className={styles.personalInfoDiv}>
            <div className={styles.pTop}>Finishing Up</div>
            <div className={styles.pBottom}>
              Double check evrything before Conforming
            </div>
          </div>
          <div className={styles.inputDiv}>
            <form>
              <label className={styles.labesls}>
                <input type="checkbox" /> Option 1
                <div className={styles.labelwrap}>
                      
                </div>
              </label>
              <br />
              <label className={styles.labesls}>
                <input type="checkbox" /> Option 2
              </label>
              <br />
              <label className={styles.labesls}>
                <input type="checkbox" /> Option 3
              </label>
            </form>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.buttons}>Finish</button>
          </div>
        </form>
      </div>
    </div>
  );
}
