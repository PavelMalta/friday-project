import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addCardsPackTC, deleteCardsPackTC, getPacksTC, updateCardsPackTC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";
import {Redirect} from "react-router-dom";


export const Packs = () => {

    const dispatch = useDispatch();

   useEffect(() => {
        dispatch(getPacksTC({pageCount: 10}))
    },[])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 10}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: 10}))
    }
    const updatePack = (PackID: string, title: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: title}, {pageCount: 10}))
    }


    return (
        <div>
            <button onClick={addPack}>Add new pack</button>
            <PacksTable deletePack={deletePack}
                        updatePack={updatePack}
            />
        </div>
    )
}