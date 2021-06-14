import React from 'react';
import s from './App.module.scss';
import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import {RegistrationPage} from "./main/ui/content/components/registration/RegistrationPage";

// Прошу не удалять я с этим работаю (Люба;))
import { LoginPage } from './main/ui/pages/auth/loginPage/LoginPage';
import { Register } from './main/ui/pages/auth/register/Register';
import { ForgotPassword } from './main/ui/content/components/passwordRecover/forgotPassword/ForgotPassword';
import { LoginPageTest } from './main/ui/pages/auth/loginPageTest/LoginPageTest';
import { CheckEmail } from './main/ui/pages/auth/сheckEmail/CheckEmail';
import { CreateNewPassword } from './main/ui/pages/auth/createNewPassword/CreateNewPassword';
import { Head } from './main/ui/common/head/Head';
import {PacksList} from "./main/ui/pages/main/packsList/PacksList";
import { ProfileIvan } from './main/ui/pages/profile/profileIvan/ProfileIvan';
import { Error } from './main/ui/pages/error/Error';
import { ProfilePeter } from './main/ui/pages/profile/profilePetr/ProfilePetr';
import { EditProfile } from './main/ui/pages/profile/editProfile/EditProfile';



function App() {
    return (
        <div className={s.app}>

            {/* Осталось от фронта */}
            <Header/>
           {/* <Content/> */}
            {/* Тут подключены сверстанные странички */}
            {/* <Head/> */}
            <div className={s.content}>
                <Content/>
                {/* <PacksList/> */}


            {/* <LoginPage/> */}
            {/* <Register/> */}
            {/* <ForgotPassword/> */}
            {/* <CheckEmail/> */}
            {/* <CreateNewPassword/> */}

            {/* <ProfileIvan/> */}
            {/* <ProfilePeter/> */}
            {/* <EditProfile/> */}



            {/* <LoginPageTest/>  Material UI*/}
            </div>
                {/* <Error/> */}
        </div>
    );
}

export default App;
