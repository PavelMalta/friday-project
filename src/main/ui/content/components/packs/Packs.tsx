import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addCardsPackTC, deleteCardsPackTC, getPacksTC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";


export const Packs = () => {

    const dispatch = useDispatch();

   useEffect(() => {
        dispatch(getPacksTC({pageCount: 10}))
    },[])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 10}))
    }
    const deletePack = () => {
       const idPack = "60be87da47a0990004f874aa"
        dispatch(deleteCardsPackTC(idPack, {pageCount: 10}))
    }

    return (
        <div>
            <button onClick={addPack}>Add new pack</button>
            <button onClick={deletePack}>delete pack</button>
            <PacksTable/>
        </div>
    )
}