import React, {useState} from "react";
import {setErrorAC} from "../../../../store/passwordRecover-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";
import {NewPassword} from "./NewPassword";
import {Redirect, useParams} from "react-router-dom";
import {resetPasswordTC} from "../../../../store/newPassword-reducer";


export const NewPasswordContainer = () => {


    const [password, setPassword] = useState("")
    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.newPassword.isFetching)
    const error = useSelector<AppRootStateType, string | null>((state) => state.newPassword.error)
    const success = useSelector<AppRootStateType, boolean>((state) => state.newPassword.success)
    const dispatch = useDispatch();
    const {resetPasswordToken} = useParams<{ resetPasswordToken: string }>();

    const onChangePassword = (password: string) => {
        setPassword(password)
        if (error !== null) {
            dispatch(setErrorAC(null))
        }
    }

    const onclickHandler = () => {
        if (password === "") {
            dispatch(setErrorAC('Required'))
        }  else if (password.length < 8) {
            dispatch(setErrorAC('Password must be more 7 symbols'))
        } else {
            dispatch(resetPasswordTC(password, resetPasswordToken))
        }
    }

    if (isFetching) {
        return <div>Loading...</div>
    }
    if (success) {
        return (
            <div>
                <Redirect to={'/login'}/>
            </div>
        )
    }

    return (
        <NewPassword     password={password}
                         error={error}
                         onChangePassword={onChangePassword}
                         onclickHandler={onclickHandler}
                         isFetching={isFetching}
        />
    )
}

