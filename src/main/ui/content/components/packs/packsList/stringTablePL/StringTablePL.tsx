import React, {useState} from "react";
import { Actions } from "../../../../../common/actions/Actions";
import {NavLink} from "react-router-dom";
import ModalForDelete from "../../../../../common/modal/ModalForCards/ModalForDelete";
import ModalForUpdateCardsPack from "../../../../../common/modal/ModalForCards/ModalForUpdateCardsPack";

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

export const StringTablePL = (props: StringPropsType) => {

    const [activeModalDelete, setActiveModalDelete] = useState<boolean>(false)
    const [activeModalUpdate, setActiveModalUpdate] = useState<boolean>(false)
    const [titleCard, setTitleCard] = useState<string>('')

    const onClickDeletePack = () => {
        props.deletePack(props.packId)
    }

    const onClickUpdatePack = () => {
        props.updatePack(props.packId, titleCard)
    }

    const updateModalHandler = () => {
        setActiveModalUpdate(true)
        setTitleCard('')
    }
    const onClickLearnPack = () => {
        props.learnPack(props.packId, props.value1)
    }
    const onRemoveHandler = () => {
        setActiveModalDelete(true)
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
                             onClick={onRemoveHandler}
                    />
                    <Actions value="Edit"
                             onClick={updateModalHandler}
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
            <ModalForDelete active={activeModalDelete}
                            setActive={setActiveModalDelete}
                            onClickDeletePack={onClickDeletePack}
                            title={props.value1}
            />
            <ModalForUpdateCardsPack active={activeModalUpdate} setActive={setActiveModalUpdate}
                                     setTitleCard={setTitleCard}
                                     onClickUpdatePack={onClickUpdatePack}/>
        </tr>
    )
}