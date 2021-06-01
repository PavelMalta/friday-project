import React, {ChangeEvent, useState} from "react";
import {recoverTC} from "../../../../store/passwordRecover-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";


export const PasswordRecover = () => {
    const [email, setEmail] = useState("")

    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.passwordRecover.isFetching)
    const dispatch = useDispatch();

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onclickHandler = () => {
        dispatch(recoverTC(email))
    }

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <input type={'email'} placeholder={'Enter email'} onChange={onChangeEmail} value={email}/>
            <button onClick={onclickHandler}>Send</button>
        </div>
    )
}