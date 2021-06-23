import React from 'react';
import s from './App.module.scss';
import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import { RegistrationPage } from "./main/ui/content/components/registration/RegistrationPage";
import { Head } from './main/ui/common/head/Head';
import { ProfileIvan } from './main/ui/content/components/profile/profileIvan/ProfileIvan';
import { ProfilePeter } from './main/ui/content/components/profile/profilePetr/ProfilePetr';
import { EditProfile } from './main/ui/content/components/profile/editProfile/EditProfile';
import { Error } from './main/ui/content/components/error/Error';
import { Question } from './main/ui/content/components/packs/learnPack/question/Question';
import { QuestionAnswer } from './main/ui/content/components/packs/learnPack/questionAnswer/QuestionAnswer';
import { CardsList } from './main/ui/content/components/cards/cardsList/CardsList';
import { Cards } from './main/ui/content/components/cards/Cards';


function App() {
    return (
        <div className={s.app}>

            <Header />
            <div className={s.header}>
                <Head />
            </div>           
            <div className={s.content}>
                {/* <Content/> */}

                {/* <ProfileIvan/> */}
                {/* <ProfilePeter/> */}
                {/* <EditProfile/> */}
                {/* <Question packName={"packName"} question={"card.question"} showAnswer={() => {}}/> */}
                {/* <QuestionAnswer  packName={"packName"}
                            question={"card.question"}
                            answer={"card.answer Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                            nextHandler={() => {}}
                            changeInputValue={() => {}}
                            disabledButton={false}
                /> */}
                <Cards/>
            </div>
            {/* <Error/> */}
        </div>
    );
}

export default App;
