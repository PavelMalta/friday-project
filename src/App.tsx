import React from 'react';
import s from './App.module.scss';
import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import {RegistrationPage} from "./main/ui/content/components/registration/RegistrationPage";

// Прошу не удалять я с этим работаю (Люба;))




import { Head } from './main/ui/common/head/Head';

import { ProfileIvan } from './main/ui/content/components/profile/profileIvan/ProfileIvan';

import { ProfilePeter } from './main/ui/content/components/profile/profilePetr/ProfilePetr';
import { EditProfile } from './main/ui/content/components/profile/editProfile/EditProfile';



function App() {
    return (
        <div className={s.app}>

            {/* Осталось от фронта */}
            <Header/>
           {/* <Content/> */}
            {/* Тут подключены сверстанные странички */}
             <Head/>
            <div className={s.content}>
                <Content/>
                {/* <PacksList/> */}


            {/* <LoginPage/> */}
            {/* <Register/> */}
            {/* <ForgotPassword/> */}
            {/* <CheckEmail/> */}
            {/* <CreateNewPassword/> */}

           {/* <ProfileIvan/>
            <ProfilePeter/>
            <EditProfile/>*/}



            {/* <LoginPageTest/>  Material UI*/}
            </div>
                {/* <Error/> */}
        </div>
    );
}

export default App;
