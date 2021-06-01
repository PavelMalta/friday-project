import React, {ChangeEvent, useState} from "react";
import {recoverTC} from "../../../../store/passwordRecover-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";
import {PasswordRecover} from "./PasswordRecover";


export const PasswordRecoverContainer = () => {
    const [email, setEmail] = useState("shamashov87@mail.ru")

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
        <PasswordRecover email={email}
                         onChangeEmail={onChangeEmail}
                         onclickHandler={onclickHandler}
        />
    )
}

