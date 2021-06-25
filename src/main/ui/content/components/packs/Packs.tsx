import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCardsPackTC,
    deleteCardsPackTC,
    getPacksTC,
    getStartPacksTC,
    SelectValueType,
    setOptionsAC,
    updateCardsPackTC
} from "../../../../store/packs-reducer";
import {setCardsPackIdAC, setPackNameAC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {PacksList} from "./packsList/PacksList";
import {LoginInitialStateType} from "../../../../store/login-reducer";



export const Packs = () => {

    const userData = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const [activeModalAdd, setActiveModalAdd] = useState<boolean>(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStartPacksTC())
    }, [dispatch])

    const addPack = (name: string) => {
        dispatch(addCardsPackTC({name: name}))
        setActiveModalAdd(false)
    }
    const deletePack = useCallback((packId: string) => {
        dispatch(deleteCardsPackTC(packId))
    },[])
    const updatePack = useCallback((packId: string, title: string) => {
        dispatch(updateCardsPackTC({_id: packId, name: title}))
    },[])
    const learnPack = useCallback((packId: string, packName: string) => {
        dispatch(setCardsPackIdAC(packId))
        dispatch(setPackNameAC(packName))
    },[])
    const onChangePage = useCallback((page: number) => {
        dispatch(getPacksTC({page: page}))
    },[])
    const onChangeSelectValue = useCallback((value: SelectValueType) => {
        dispatch(setOptionsAC({pageCount: value}))
        dispatch(getPacksTC())
    },[])
    const onClickMyButton = useCallback(() => {
        dispatch(getPacksTC({user_id: userData.userID}))
    },[])
    const onClickAllButton = useCallback(() => {
        dispatch(getPacksTC({user_id: ""}))
    },[])

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
                       setActiveModalAdd={setActiveModalAdd}
                       activeModalAdd={activeModalAdd}
            />

        </div>
    )
}