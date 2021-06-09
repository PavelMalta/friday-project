import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCardsPackTC, deleteCardsPackTC, getPacksTC, updateCardsPackTC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";
import {getCardsTC} from "../../../../store/cards-reducer";
import {isAuthUserData} from "../../../../store/login-reducer";
import {AppRootStateType} from "../../../../store/store";


export const Packs = () => {

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAuthUserData())
    }, [])

    useEffect(() => {
        dispatch(getPacksTC({pageCount: 10}))
    }, [])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 10}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: 10}))
    }
    const updatePack = (PackID: string, title: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: title}, {pageCount: 10}))
    }
    const learnPack = (PackID: string) => {
        dispatch(getCardsTC({cardsPack_id: PackID, pageCount: 100}))
    }


    return (
        <div>
            <button onClick={addPack}>Add new pack</button>
            <PacksTable userID={userID}
                        deletePack={deletePack}
                        updatePack={updatePack}
                        learnPack={learnPack}
            />
        </div>
    )
}