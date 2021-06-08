import React from 'react';
import s from './App.module.scss';
import {Content} from './main/ui/content/Content';
import {Header} from './main/ui/header/Header';
import {Navigation} from './main/ui/navigation/Navigation';
import {Packs} from "./main/ui/content/components/packs/Packs";
import {Cards} from "./main/ui/content/components/cards/Cards";
import {RegistrationPage} from "./main/ui/content/components/registration/RegistrationPage";

// Прошу не удалять я с этим работаю (Люба;))
import {LoginPage} from './main/ui/pages/auth/loginPage/LoginPage';
import {Register} from './main/ui/pages/auth/register/Register';
import {ForgotPassword} from './main/ui/content/components/passwordRecover/forgotPassword/ForgotPassword';
import {LoginPageTest} from './main/ui/pages/auth/loginPageTest/LoginPageTest';
import {CheckEmail} from './main/ui/pages/auth/сheckEmail/CheckEmail';
import {CreateNewPassword} from './main/ui/pages/auth/createNewPassword/CreateNewPassword';
import {Head} from './main/ui/common/head/Head';
import {CardsTable} from "./main/ui/content/components/cards/cardsTable/CardsTable";



function App() {
    return (
        <div className={s.app}>

            {/* Осталось от фронта */}
            <Header/>
            <Navigation/>


            {/* Тут подключены сверстанные странички */}
            {/* <Head/> */}
            <div className={s.content}>
                <Content/>
                {/*<Packs/>*/}
                {/*<Cards/>*/}
                <Packs/>
            </div>
        </div>
    );
}

export default App;
