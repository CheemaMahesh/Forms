import React from "react";
import styles from "../styles/PageThree.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiceFive, faCrown } from "@fortawesome/free-solid-svg-icons";
import { useValue } from "../../contextPai";

export default function PageThree() {
  const {page,setPage}=useValue();

  const handleF=(e)=>{
      e.preventDefault();
      setPage(4);
  }

  return (
    <div className={styles.PageTwo}>
      <div className={styles.Right}>
        <form className={styles.form} onSubmit={handleF}>
          <div className={styles.personalInfoDiv}>
            <div className={styles.pTop}>Select your plan</div>
            <div className={styles.pBottom}>
              You have the option of monthly or yearly billing.
            </div>
          </div>
          <div className={styles.inputDiv}>
            <form>
              <label className={styles.labesls}>
                <input type="checkbox" /> Online Services
                <div className={styles.labelwrap}>
                      
                </div>
              </label>
              <br />
              <label className={styles.labesls}>
                <input type="checkbox" /> Large Storage
              </label>
              <br />
              <label className={styles.labesls}>
                <input type="checkbox" /> Customizable Profile
              </label>
            </form>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.buttons} >Next Step</button>
          </div>
        </form>
      </div>
    </div>
  );
}
