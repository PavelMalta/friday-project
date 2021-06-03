import {Registration} from "./Registration";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNewUserTC} from "../../../../store/registration-reducer";
import {setEmailErrorAC, setPasswordErrorAC} from "../../../../store/registration-reducer";
import {AppRootStateType} from "../../../../store/store";


export const RegistrationPage = () => {
    const emailError = useSelector<AppRootStateType, string | null>((state) => state.registration.emailError)
    const passwordError = useSelector<AppRootStateType, string | null>((state) => state.registration.passwordError)
    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('nya-admin@nya.nya');
    let [password, setPassword] = useState<string>('1qazxcvBG');
    let [passwordConfirm, setPasswordConfirm] = useState<string>('1qazxcvBG');

    const onEmailChange = (email: string) => {
        setEmail(email)
        if (emailError !== null) {
            dispatch(setEmailErrorAC(null))
        }
    }
    const onPasswordChange = (password: string) => {
        setPassword(password)
        if (passwordError !== null) {
            dispatch(setPasswordErrorAC(null))
        }
    }
    const onPasswordConfirm = (passwordConfirm: string) => {
        setPasswordConfirm(passwordConfirm)
        if (passwordError !== null) {
            dispatch(setPasswordErrorAC(null))
        }
    }

    const registrationButtonClick = () => {
        if (email === "") {
            dispatch(setEmailErrorAC('Required'))
        } else if (password === "") {
            dispatch(setPasswordErrorAC('Required'))
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            dispatch(setEmailErrorAC('Invalid email address'))
        } else if (password.length < 8) {
            dispatch(setPasswordErrorAC('Password must be more 7 symbols'))
        } else if (password !== passwordConfirm) {
            dispatch(setPasswordErrorAC('Password & confirm password fields are not equally'));
            setPassword('');
            setPasswordConfirm('');
        } else {
            dispatch(setNewUserTC(email, password));
            setEmail('');
            setPassword('');
            setPasswordConfirm('');
        }
    }

    const cancelClick = () => {
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    }

    return <Registration email={email}
                         password={password}
                         emailError={emailError}
                         passwordError={passwordError}
                         passwordConfirm={passwordConfirm}
                         onEmailChange={onEmailChange}
                         onPasswordChange={onPasswordChange}
                         onPasswordConfirmChange={onPasswordConfirm}
                         registrationButtonClock={registrationButtonClick}
                         cancelClick={cancelClick}
    />

}