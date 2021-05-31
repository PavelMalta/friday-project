import React from 'react';
import s from './App.module.scss';
import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import {Register} from "./main/ui/pages/auth/register/Register";
import {RegistrationContainer} from "./main/ui/pages/auth/register/api/RegistrationContainer";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Navigation/>
            <Content/>
            {/*<Register/>*/}
        </div>
    );
}

export default App;
