import React from 'react';
import s from './App.module.scss';
import {LoginContainer} from "./main/ui/pages/auth/loginPage/LoginContainer";
import {Navigation} from "./main/ui/navigation/Navigation";
import {Header} from "./main/ui/header/Header";
import {Content} from "./main/ui/content/Content";
import {Register} from "./main/ui/pages/auth/register/Register";
import {ForgotPassword} from "./main/ui/pages/auth/forgotPassword/ForgotPassword";

function App() {
    return (
        <div className={s.app}>

            {/* Осталось от фронта */}
            {/* <Header/>*/}
            {/*<Navigation/>*/}
            {/*<Content/>*/}

            {/* Тут подключены сверстанные странички */}
            <div className={s.content}>
            {/* <LoginPage/> */}
            {/* <Register/> */}
            {/*<ForgotPassword/>*/}


            {/* <LoginPageTest/> */}
            <LoginContainer/>
            <Register/>
            <ForgotPassword/>

            </div>
        </div>
    );
}

export default App;
