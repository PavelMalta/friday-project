import React from "react";
import { Actions } from "../../../../../common/actions/Actions";
import {NavLink} from "react-router-dom";

type StringPropsType = {
    value1: string
    value2: number
    value3: string
    value4: string
    packUserId: string
    userId: string
    packId: string
    deletePack: (packID: string) => void
    updatePack: (packID: string, title: string) => void
    learnPack: (packID: string, packName: string) => void
}

export const StringTablePL = (props: any) => {

    const onClickDeletePack = () => {
        props.deletePack(props.packId)
    }
    const onClickUpdatePack = () => {
        props.updatePack(props.packId, "Update successful")
    }
    const onClickLearnPack = () => {
        props.learnPack(props.packId, props.value1)
    }

    return (
        <tr>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>{props.value4}</td>
            {props.packUserId === props.userId
                ? <td>
                    <Actions value="Delete"
                             style={{backgroundColor: "#F1453D", color: "#fff"}}
                             onClick={onClickDeletePack}
                    />
                    <Actions value="Edit"
                             onClick={onClickUpdatePack}
                    />
                    <NavLink to={`/cards/${props.packId}`}>
                        <Actions value="Learn"
                                 onClick={onClickLearnPack}
                        />
                    </NavLink>
                </td>
                : <td>
                    <NavLink to={`/cards/${props.packId}`}>
                        <Actions value="Learn"
                                 onClick={onClickLearnPack}
                        />
                    </NavLink>
                </td>
            }

        </tr>
    )
}