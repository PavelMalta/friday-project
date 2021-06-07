import React from 'react';
import {useDispatch} from "react-redux";
import {getPacksTC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";


export const Packs = () => {

    const dispatch = useDispatch();

    const getPacks = () => {
        dispatch(getPacksTC({}))
    }
    return (
        <div>
            <button onClick={getPacks}>get Packs</button>
            <PacksTable/>
        </div>
    )
}