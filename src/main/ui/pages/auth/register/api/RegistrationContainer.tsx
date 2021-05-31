import {Register} from "../Register";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNewUserTC} from "../../../../../store/registration-reducer";


export const RegistrationContainer = () => {

    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');
    let [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const onEmailChange = (email: string) => {
        setEmail(email)
    }
    const onPasswordChange = (password: string) => {
        setPassword(password)
    }
    const onPasswordConfirm = (passwordConfirm: string) => {
        setPasswordConfirm(passwordConfirm)
    }

    const registrationButtonClick = () => {
        if (password !== passwordConfirm) {
            alert('Password & confirm password fields are not equally');
            setPassword('');
            setPasswordConfirm('');
            return
        }
        dispatch(setNewUserTC(email, password));
        setEmail('');
        setPassword('');
        setPasswordConfirm('');

    }
    const cancelClick = () => {
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    }

    return <Register email={email}
                     password={password}
                     passwordConfirm={passwordConfirm}
                     onEmailChange={onEmailChange}
                     onPasswordChange={onPasswordChange}
                     onPasswordConfirmChange={onPasswordConfirm}
                     registrationButtonClock={registrationButtonClick}
                     cancelClick={cancelClick}
    />

}