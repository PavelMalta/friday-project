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
    learnPack: (packID: string) => void
}

export const StringTablePL = (props: StringPropsType) => {
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
                             onClick={props.deletePack}
                             packId={props.packId}
                    />
                    <Actions value="Edit"
                             onClick={props.updatePack}
                             packId={props.packId}
                    />
                    <NavLink to={`/cards/${props.packId}`}>
                        <Actions value="Learn"
                                 onClick={props.learnPack}
                                 packId={props.packId}
                        />
                    </NavLink>
                </td>
                : <td>
                    <NavLink to={`/cards/${props.packId}`}>
                        <Actions value="Learn"
                                 onClick={props.learnPack}
                                 packId={props.packId}
                        />
                    </NavLink>
                </td>
            }

        </tr>
    )
}