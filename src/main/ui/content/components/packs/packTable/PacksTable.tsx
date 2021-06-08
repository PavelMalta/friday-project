import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {PackResponseType} from "../api-packs";
import {v1} from "uuid";
import s from "./PacksTable.module.css"


type PacksTableType = {
    deletePack: (packID: string) => void
}

export const PacksTable = (props: PacksTableType) => {

    const packsData = useSelector<AppRootStateType, PackResponseType>(state => state.packs.packsTableData)

    const formatDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
    return (
        <div className={s.table}>
            {packsData.cardPacks.map((item) => {
                return (
                    <div key={v1()} className={s.row}>
                        <div className={s.item}>{item.name}</div>
                        <div className={s.item}>{item.cardsCount}</div>
                        <div className={s.item}>{formatDate(item.updated)}</div>
                        <div className={s.item}>{item.user_name}</div>

                        {item.user_id === "60be3008bf6f0f0bb0f722a9"
                            ? <div className={s.item}>
                                <button onClick={() => props.deletePack(item._id)}>Delete</button>
                                <button>Edit</button>
                                <button>Learn</button>
                              </div>
                            : <div className={s.item}>
                                <button>Learn</button>
                              </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}