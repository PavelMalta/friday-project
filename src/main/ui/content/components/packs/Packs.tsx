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
    const deletePack = () => {
       const idPack = "60bf28cc73a1060004ae9166"
        dispatch(deleteCardsPackTC(idPack, {pageCount: 10}))
    }
    const updatePack = () => {
        const idPack = "60bf28cc73a1060004ae9166"
        dispatch(updateCardsPackTC({_id: idPack, name: "Hello"}, {pageCount: 10}))
    }

    return (
        <div>
            <button onClick={addPack}>Add new pack</button>
            <button onClick={deletePack}>delete pack</button>
            <button onClick={updatePack}>update pack</button>
            <PacksTable/>
        </div>
    )
}