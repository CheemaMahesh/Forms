import React from "react";
// import {styles} from "../styles/PageTwo.module.css"
import styles from "../styles/Pagetwo.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad ,faDiceFive,faCrown} from "@fortawesome/free-solid-svg-icons";

export default function PageTwo(){
    return(
        <div className={styles.PageTwo}>
                     <div className={styles.Right}>
                                    <form className={styles.form}>
                                            <div className={styles.personalInfoDiv}>
                                                <div className={styles.pTop}>Select your plan</div>
                                                <div className={styles.pBottom}>You hav option of monthly or yearly billing.</div>
                                            </div>
                                            <div className={styles.inputDiv}>

                                                <div className={styles.inputWrapper}>
                                                {/* <div className={styles.label}></div> */}
                                                <div  id="name-input" className={styles.inputs} type="text" >
                                                <FontAwesomeIcon icon={faGamepad} />
                                                <div className={styles.dd} id={styles.namesids}>Arcade</div>
                                                <div className={styles.price}>$10/mon</div>

                                                </div>
                                                </div>
                                                <div className={styles.inputWrapper}>
                                                {/* <div className={styles.label}></div> */}
                                                <div  id="email-input" className={styles.inputs} type="email" >
                                                <FontAwesomeIcon icon={faDiceFive} />
                                                <div className={styles.dd}>Advance</div>
                                                <div className={styles.price}>$12/mon</div>

                                                </div>
                                                </div>
                                                <div className={styles.inputWrapper}>                                                
                                                {/* <div className={styles.label}></div> */}
                                                <div id="phone-input" className={styles.inputs} type="number" >
                                                <FontAwesomeIcon icon={faCrown} />
                                                <div className={styles.dd}>Pro</div>
                                                <div className={styles.price}>$15/mon</div>

                                                </div>
                                                </div>
                                            </div>
                                            <div className={styles.buttonDiv}>
                                                                    <button className={styles.buttons}> Next Step</button>
                                            </div>
                                    </form>
                            
                        </div>

        </div>
    )
}

