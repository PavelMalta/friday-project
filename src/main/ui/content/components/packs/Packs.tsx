import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCardsPackTC, deleteCardsPackTC, getPacksTC, updateCardsPackTC, setCurrentPageAC} from "../../../../store/packs-reducer";
import {PacksTable} from "./packTable/PacksTable";
import {Redirect} from "react-router-dom";
import {getCardsTC} from "../../../../store/cards-reducer";
import {AppRootStateType} from "../../../../store/store";
import {PackResponseType} from "./api-packs";
import {Paginator} from "../../../common/paginator/Paginator";
import {Preloader} from "../../../common/preloader/Preloader";


export const Packs = () => {
    const isFetching = useSelector<AppRootStateType, boolean>((state) => state.login.isFetching)
    const packsData = useSelector<AppRootStateType, PackResponseType>(state => state.packs.packsTableData)
    const dispatch = useDispatch();

   useEffect(() => {
       debugger
        dispatch(getPacksTC({pageCount: 20}))
    },[])

    const addPack = () => {
        dispatch(addCardsPackTC({name: "Y menia polychilos"}, {pageCount: 20}))
    }
    const deletePack = (PackID: string) => {
        dispatch(deleteCardsPackTC(PackID, {pageCount: 20}))
    }
    const updatePack = (PackID: string, title: string) => {
        dispatch(updateCardsPackTC({_id: PackID, name: title}, {pageCount: 10}))
    }
    const learnPack = (PackID: string) => {
        dispatch(getCardsTC({cardsPack_id: PackID, pageCount: 100}))
    }

    const changePage = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(getPacksTC({page: pageNumber, pageCount: 20}))
    }

    const [pageSize, setPageSize] = useState<number>(1)

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div>
            <Paginator totalItemsCount={packsData.cardPacksTotalCount}
                       pageSize={20}
                       currentPage={packsData.page}
                       onPageChanged={changePage}/>

            <button onClick={addPack}>Add new pack</button>
            <PacksTable deletePack={deletePack}
                        updatePack={updatePack}
                        learnPack={learnPack}
            />
        </div>
    )
}