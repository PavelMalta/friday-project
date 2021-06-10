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
import {PackResponseType} from "./api-packs";
import {PacksList} from "./packsList/PacksList";

export type SelectValueType = 5 | 10 | 25 | 50 | 100;

export const Packs = () => {

    const [options, setOptions] = useState<SelectValueType>(5)

    const userID = useSelector<AppRootStateType, string>(state => state.login.userID)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const packsData = useSelector<AppRootStateType, PackResponseType>(state => state.packs.packsTableData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStartPacksTC({pageCount: options, page: packsData.page}))
    }, [dispatch, options])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: options}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: options, page: packsData.page}))
    }
    const updatePack = (PackID: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: "Voy voy polegche!"}, {pageCount: options, page: packsData.page}))
    }
    const learnPack = (PackID: string) => {
        dispatch(getCardsTC({cardsPack_id: PackID, pageCount: 100}))
        dispatch(setCardsPackIdAC(PackID))
    }
    const onChangePage = (page: number) => {
        dispatch(getPacksTC({pageCount: options, page: page}))
    }
    const onChangeOption = (value: SelectValueType) => {
        setOptions(value)
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
                       value={options}
                       onChangeOption={onChangeOption}
            />
        </div>
    )
}