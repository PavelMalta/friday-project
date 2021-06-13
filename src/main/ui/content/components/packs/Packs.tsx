import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCardsPackTC,
    deleteCardsPackTC, getPacksTC,
    getStartPacksTC, PacksInitialStateType, SelectValueType,
    setOptionsAC,
    updateCardsPackTC
} from "../../../../store/packs-reducer";
import {setCardsPackIdAC, setPackNameAC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {PacksList} from "./packsList/PacksList";
import {LoginInitialStateType} from "../../../../store/login-reducer";


export const Packs = () => {

    /*    const [options, setOptions] = useState<SelectValueType>(5)*/

    const userData = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStartPacksTC())
    }, [dispatch])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}))
    }
    const deletePack = (packId: string) => {
        dispatch(deleteCardsPackTC(packId))
    }
    const updatePack = (packId: string, title: string) => {
        dispatch(updateCardsPackTC({_id: packId, name: title}))
    }
    const learnPack = (packId: string, packName: string) => {
        debugger
        dispatch(setCardsPackIdAC(packId))
        dispatch(setPackNameAC(packName))
    }
    const onChangePage = (page: number) => {
        dispatch(getPacksTC({page: page}))
    }
    const onChangeSelectValue = (value: SelectValueType) => {
        dispatch(setOptionsAC({pageCount: value}))
        dispatch(getPacksTC())
    }
    const onClickMyButton = () => {
        dispatch(getPacksTC({user_id: userData.userID}))
    }
    const onClickAllButton = () => {
        dispatch(getPacksTC({user_id: ""}))
    }

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <PacksList userID={userData.userID}
                       addNewPack={addPack}
                       deletePack={deletePack}
                       updatePack={updatePack}
                       learnPack={learnPack}
                       onChangePage={onChangePage}
                       onChangeOption={onChangeSelectValue}
                       onClickMyButton={onClickMyButton}
                       onClickAllButton={onClickAllButton}
            />
        </div>
    )
}