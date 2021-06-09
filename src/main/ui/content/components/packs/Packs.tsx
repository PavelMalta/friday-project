import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCardsPackTC, deleteCardsPackTC, getPacksTC, updateCardsPackTC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";
import {getCardsTC, setCardsPackIdAC} from "../../../../store/cards-reducer";
import {isAuthUserData} from "../../../../store/login-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {PacksList} from "./packsList/PacksList";


export const Packs = () => {

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isAuthUserData())
    }, [])

    useEffect(() => {
        dispatch(getPacksTC({pageCount: 7}))
    }, [dispatch, isAuth])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 7}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: 7}))
    }
    const updatePack = (PackID: string, title: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: title}, {pageCount: 7}))
    }
    const learnPack = (PackID: string) => {
        dispatch(getCardsTC({cardsPack_id: PackID, pageCount: 100}))
        dispatch(setCardsPackIdAC(PackID))
    }

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
           {/* <button onClick={addPack}>Add new pack</button>*/}
           {/* <PacksTable userID={userID}
                        deletePack={deletePack}
                        updatePack={updatePack}
                        learnPack={learnPack}
            />*/}
            <PacksList userID={userID}
                       addNewPack={addPack}
                       deletePack={deletePack}
                       updatePack={updatePack}
                       learnPack={learnPack}/>
        </div>
    )
}