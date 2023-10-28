<div className={styles.Right}>
<form className={styles.form}>
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
                                <button className={styles.buttons}> Next Step</button>
        </div>
</form>

</div>