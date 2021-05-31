import React from 'react';
import s from './App.module.scss';
import {Register} from './main/ui/pages/auth/register/Register';
import {LoginContainer} from "./main/ui/pages/auth/loginPage/LoginContainer";
import {Provider} from "react-redux";

function App() {
    return (
        <div className={s.app}>
            <div>hi2</div>
            {/*/!* Осталось от фронта *!/*/}
            {/*/!* <Header/>*/}
            {/*<Navigation/>*/}
            {/*<Content/> *!/*/}
            

            {/*/!* Тут подключены сверстанные странички *!/*/}
            <div className={s.content}>
            <LoginContainer/>
            {/*<Register/>*/}
            </div>
        </div>
    );
}

export default App;
