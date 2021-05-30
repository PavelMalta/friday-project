import React from 'react';
import s from './App.module.css';
import { Content } from './main/ui/content/Content';
import { Header } from './main/ui/header/Header';
import { Navigation } from './main/ui/navigation/Navigation';
import {Registration} from "./main/ui/content/components/registration/Registration";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Navigation/>
            <Content/>
            <Registration/>
        </div>
    );
}

export default App;
//test