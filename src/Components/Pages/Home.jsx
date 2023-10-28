import React, { useEffect,useState } from "react";
import styles from "../styles/Home.module.css";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageOne from "./PageOne";
import PageFour from "./PageFour";
import { useValue } from "../../contextPai";

export default function Home() {
    const { page } = useValue();
    const [Pages, setPages] = useState(<PageOne />);
    const [number1,setNumbero]=useState("one")
    const [number2,setNumbert]=useState("")
    const [number3,setNumberth]=useState("")
    const [number4,setNumberf]=useState("")
    const [currentPage,setCurrentPage]=useState(number1)
    // const [number1,setNumber1]=useState("one")


    useEffect(() => {
        if (page === 2) {
            setPages(<PageTwo />);
            setNumbero("") 
            setNumbert("one")
        } else if (page === 3) {
            setPages(<PageThree />);
            setNumbert(""
            )
            setNumberth("one")
        } else if (page === 4) {
            setPages(<PageFour />);
            setNumberth("");
            setNumberf("one")
        }
    }, [page]);

    // const number1 = "one";
    // const number2 = "two";
    // const number3 = "three";
    // const number4 = "four";

    return (
        <div className={styles.Home}>
            <div className={styles.wrapper}>
                <div className={styles.Left}>
                    <div className={styles.stepOne}>
                        <div className={styles[`${number1}`]}>1</div>
                        <div className={styles.steps}>
                            <div className={styles.stepCount}>STEP 1</div>
                            <div className={styles.stepName}>YOUR INFO</div>
                        </div>
                    </div>
                    <div className={styles.stepOne}>
                        <div className={styles[`${number2}`]}>2</div>
                        <div className={styles.steps}>
                            <div className={styles.stepCount}>STEP 2</div>
                            <div className={styles.stepName}>SELECT PLAN</div>
                        </div>
                    </div>
                    <div className={styles.stepOne}>
                        <div className={styles[`${number3}`]}>3</div>
                        <div className={styles.steps}>
                            <div className={styles.stepCount}>STEP 3</div>
                            <div className={styles.stepName}>ADD ONS</div>
                        </div>
                    </div>
                    <div className={styles.stepOne}>
                        <div className={styles[`${number4}`]}>4</div>
                        <div className={styles.steps}>
                            <div className={styles.stepCount}>STEP 4</div>
                            <div className={styles.stepName}>SUMMARY</div>
                        </div>
                    </div>
                </div>
                {Pages}
            </div>
        </div>
    );
}
