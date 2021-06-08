import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addCardsPackTC, deleteCardsPackTC, getPacksTC, updateCardsPackTC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";


export const Packs = () => {

    const dispatch = useDispatch();

   useEffect(() => {
        dispatch(getPacksTC({pageCount: 10}))
    },[])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 10}))
    }
    const deletePack = (idPack: string) => {
        dispatch(deleteCardsPackTC(idPack, {pageCount: 10}))
    }
    const updatePack = () => {
        const idPack = "60bf261ce83ee23614112b9b"
        dispatch(updateCardsPackTC({_id: idPack, name: "Hello"}, {pageCount: 10}))
    }

    return (
        <div>
            <button onClick={addPack}>Add new pack</button>
            <PacksTable deletePack={deletePack}/>
        </div>
    )
}