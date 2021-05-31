import React, {ChangeEvent, useState} from "react";
import {recoverTC} from "../../../../store/passwordRecover-reducer";
import {useDispatch} from "react-redux";


export const PasswordRecover = () => {
    const [email, setEmail] = useState("")
    const dispatch = useDispatch();

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onclickHandler = () => {
        dispatch(recoverTC(email))
    }

    return (
        <div>
            <input type={'email'} placeholder={'Enter email'} onChange={onChangeEmail} value={email}/>
            <button onClick={onclickHandler}>Send</button>
        </div>
    )
}