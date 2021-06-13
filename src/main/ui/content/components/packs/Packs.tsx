import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addCardsPackTC,
    deleteCardsPackTC, getPacksTC,
    getStartPacksTC, SelectValueType,
    setOptionsAC,
    updateCardsPackTC
} from "../../../../store/packs-reducer";
import {setCardsPackIdAC, setPackNameAC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";
import {PackResponseType} from "./api-packs";
import {PacksList} from "./packsList/PacksList";
import {LoginInitialStateType} from "../../../../store/login-reducer";



export const Packs = () => {

/*    const [options, setOptions] = useState<SelectValueType>(5)*/

    const userData = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const packsData = useSelector<AppRootStateType, PackResponseType>(state => state.packs.packsTableData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStartPacksTC({pageCount: options, page: packsData.page}))
    }, [dispatch])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: options}))
    }
    const deletePack = (packId: string) => {
        dispatch(deleteCardsPackTC(packId, {pageCount: options, page: packsData.page}))
    }
    const updatePack = (packId: string, title: string) => {
        dispatch(updateCardsPackTC({_id: packId, name: title}, {pageCount: options, page: packsData.page}))
    }
    const learnPack = (packId: string, packName: string) => {
        debugger
        dispatch(setCardsPackIdAC(packId))
        dispatch(setPackNameAC(packName))
    }
    const onChangePage = (page: number) => {
        dispatch(getPacksTC({pageCount: options, page: page}))
    }
    const onChangeOption = (value: SelectValueType) => {
        dispatch(setOptionsAC(value))
        dispatch(getPacksTC({pageCount: value}))
    }
    const onClickMyButton = () => {
        dispatch(getPacksTC({pageCount: options, user_id: userData.userID}))
    }
    const onClickAllButton = () => {
        dispatch(getPacksTC({pageCount: options}))
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
                       value={options}
                       onChangeOption={onChangeOption}
                       onClickMyButton={onClickMyButton}
                       onClickAllButton={onClickAllButton}
            />
        </div>
    )
}