import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCardsPackTC,
    deleteCardsPackTC, getPacksTC,
    getStartPacksTC,
    updateCardsPackTC
} from "../../../../store/packs-reducer";
import {getCardsTC, setCardsPackIdAC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {PacksList} from "./packsList/PacksList";
import {PackResponseType} from "./api-packs";


export const Packs = () => {

    const [options, setOptions] = useState(1)

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const packsData = useSelector<AppRootStateType, PackResponseType>(state => state.packs.packsTableData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStartPacksTC({pageCount: 5, page: packsData.page}))
    }, [dispatch])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 5}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: 5, page: packsData.page}))
    }
    const updatePack = (PackID: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: "Voy voy polegche!"}, {pageCount: 5, page: packsData.page}))
    }
    const learnPack = (PackID: string) => {
        dispatch(getCardsTC({cardsPack_id: PackID, pageCount: 100}))
        dispatch(setCardsPackIdAC(PackID))
    }
    const onChangePage = (page: number) => {
        dispatch(getPacksTC({pageCount: 5, page: page}))
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
                       learnPack={learnPack}
                       onChangePage={onChangePage}
            />
        </div>
    )
}