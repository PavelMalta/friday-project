import React from "react";
import style from './Registration.module.css'


export const Registration = () => {



    return (
        <div>
            <form action="" className={style.form}>
                <div>
                    <span>Email</span>
                    <input type="text" className={style.registrationInput}/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="text" className={style.registrationInput}/>
                </div>
                <div>
                    <span>Confirm Password</span>
                    <input type="text" className={style.registrationInput}/>
                </div>
                <button className={style.registrationButton}>Register</button>
            </form>
        </div>
    )
}