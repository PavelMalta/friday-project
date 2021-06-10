import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCardsPackTC,
    deleteCardsPackTC,
    getStartPacksTC,
    updateCardsPackTC
} from "../../../../store/packs-reducer";
import {getCardsTC, setCardsPackIdAC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {PacksList} from "./packsList/PacksList";


export const Packs = () => {

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStartPacksTC({pageCount: 7}))
    }, [])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 7}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: 7}))
    }
    const updatePack = (PackID: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: "Voy voy polegche!"}, {pageCount: 7}))
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