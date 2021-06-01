import React, {ChangeEvent, useState} from "react";
import {recoverTC, setErrorAC} from "../../../../store/passwordRecover-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";
import {PasswordRecover} from "./PasswordRecover";


export const PasswordRecoverContainer = () => {
    const [email, setEmail] = useState("shamashov87@mail.ru")

    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.passwordRecover.isFetching)
    const error = useSelector<AppRootStateType, string | null>((state) => state.passwordRecover.error)
    const dispatch = useDispatch();

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        if (error !== null) {
            dispatch(setErrorAC(null))
        }
    }

    const onclickHandler = () => {
        if (email === "") {
            dispatch(setErrorAC('Required'))
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            dispatch(setErrorAC('Invalid email address'))
        } else {
            dispatch(recoverTC(email))
            setEmail("")
        }
    }

    if (isFetching) {
        return <div>Loading...</div>
    }

    return (
        <PasswordRecover email={email}
                         error={error}
                         onChangeEmail={onChangeEmail}
                         onclickHandler={onclickHandler}
        />
    )
}

