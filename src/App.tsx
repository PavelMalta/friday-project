import React from 'react';
import s from './App.module.scss';

import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import { Register } from './main/ui/pages/auth/register/Register';
import { LoginPage } from './main/ui/pages/auth/loginPage/LoginPage';
import { LoginPageTest } from './main/ui/pages/auth/loginPageTest/LoginPageTest';

// •••••••••••••••••••••••••••••••








// •••••••••••••••••••••••••••••••
function App() {
    return (
        <div className={s.app}>

            {/* Осталось от фронта */}
            {/* <Header/>
            <Navigation/>
            <Content/> */}
            

            {/* Тут подключены сверстанные странички */}
            <div className={s.content}>
            {/* <LoginPage/> */}
            <LoginPageTest/>  {/* Тестовая страница Material UI */}
            {/* <Register/> */}
            
            </div>
        </div>
    );
}

export default App;





