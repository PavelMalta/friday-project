import React, {useState} from "react";
import {setErrorAC} from "../../../../store/passwordRecover-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";
import {NewPassword} from "./NewPassword";
import {Redirect, useParams} from "react-router-dom";
import {resetPasswordTC} from "../../../../store/newPassword-reducer";
import s from "./NewPassword.module.scss";
import {Logo} from "../../../common/logo/Logo";
import {TitleH2} from "../../../common/titleh2/TitleH2";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";


export const NewPasswordContainer = () => {

    const {token} = useParams<{ token: string }>();
    const [password, setPassword] = useState("")
    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.newPassword.isFetching)
    const error = useSelector<AppRootStateType, string | null>((state) => state.newPassword.error)
    const success = useSelector<AppRootStateType, boolean>((state) => state.newPassword.success)
    const dispatch = useDispatch();


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
            debugger
            dispatch(resetPasswordTC(password, token))
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
        <div className={s.newPassword}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 style={{marginTop: "32px"}}
                            value="Create new password"/>
                    <div className={s.form}>
                        <Input title="New password"
                               type="password"
                               name="password"
                               value={password}
                               onChange={onChangePassword}
                               error={error}
                        /> {/*Нужно убрать глазик (логика)*/}
                    </div>
                    <span className={s.text}>Create new password and we will send you further instructions to email </span>
                    <div className={s.btn}>
                        {isFetching
                            ? <span>Loading...</span>
                            : <Button value="Create new password"
                                      onClick={onclickHandler}
                            />}
                    </div>
                    <div className={s.singUp}>
                        <a className={s.link} href="#">Did you remember your password?</a>
                        <a className={s.linkSingUp} href="#">Try logging in</a>
                    </div>
                </div>
            </div>
        </div>
        // <NewPassword     password={password}
        //                  error={error}
        //                  onChangePassword={onChangePassword}
        //                  onclickHandler={onclickHandler}
        //                  isFetching={isFetching}
        // />
    )
}

