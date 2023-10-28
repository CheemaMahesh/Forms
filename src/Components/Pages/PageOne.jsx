
import React from "react";
import styles from "../styles/PageOne.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiceFive, faCrown } from "@fortawesome/free-solid-svg-icons";
import { useValue } from "../../contextPai";

export default function PageOne() {
  const {page,setPage}=useValue();

  const handleF=(e)=>{
      e.preventDefault();
      setPage(2);
  }

  return (
    <div className={styles.PageOne}>
<div className={styles.Right}>
<form className={styles.form} onSubmit={handleF}>
        <div className={styles.personalInfoDiv}>
            <div className={styles.pTop}>Personal Info</div>
            <div className={styles.pBottom}>Please provide your name, email address, and phone number.</div>
        </div>
        <div className={styles.inputDiv}>

            <div className={styles.inputWrapper}>
            <div className={styles.label}><div className={styles.dd} id={styles.namesids}>Name</div><div className={styles.dd}></div></div>
            <input placeholder="Your name" id="name-input" className={styles.inputs} type="text" required/>
            </div>
            <div className={styles.inputWrapper}>
            <div className={styles.label}><div className={styles.dd}>Email Address</div><div className={styles.dd}></div></div>
            <input placeholder="Example@email.com" id="email-input" className={styles.inputs} type="email" required/>
            </div>
            <div className={styles.inputWrapper}>                                                
            <div className={styles.label}><div className={styles.dd}>Phone Number</div><div className={styles.dd}></div></div>
            <input placeholder="e.g. +1 234 567 890" id="phone-input" className={styles.inputs} type="number" required/>
            </div>
        </div>
        <div className={styles.buttonDiv}>
                                <button className={styles.buttons} > Next Step</button>
        </div>
</form>

</div>
    </div>
  );
}
