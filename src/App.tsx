import React from 'react';
import s from './App.module.scss';
import { Content } from './main/ui/content/Content';
import { Head } from './main/ui/common/head/Head';
import { ProfileIvan } from './main/ui/content/components/profile/profileIvan/ProfileIvan';
import { ProfilePeter } from './main/ui/content/components/profile/profilePetr/ProfilePetr';
import { EditProfile } from './main/ui/content/components/profile/editProfile/EditProfile';
import { Error } from './main/ui/content/components/error/Error';
import { Question } from './main/ui/content/components/packs/learnPack/question/Question';
import { QuestionAnswer } from './main/ui/content/components/packs/learnPack/questionAnswer/QuestionAnswer';


function App() {
    return (
        <div className={s.app}>

            <Head/>
            <div className={s.content}>
                 <Content/>

            {/* <ProfileIvan/> */}
            {/* <ProfilePeter/> */}
            {/* <EditProfile/> */}

            </div>
            {/* <Error/> */}
        </div>
    );
}

export default App;
