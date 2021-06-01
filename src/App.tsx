import React from 'react';
import s from './App.module.scss';
import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import {RegistrationPage} from "./main/ui/content/components/registration/RegistrationPage";

function App() {
    return (
        <div className={s.app}>

            {/* Осталось от фронта */}
             <Header/>
            <Navigation/>

            <div className={s.content}>
            <Content/>


            {/* Тут подключены сверстанные странички */}

         {/*    <LoginPage/>*/}
            {/* <Register/> */}
           {/* <ForgotPassword/>
*/}

            {/* <LoginPageTest/> */}
            </div>
        </div>
    );
}

export default App;
