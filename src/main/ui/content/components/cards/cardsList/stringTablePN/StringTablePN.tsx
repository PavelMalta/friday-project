import HalfRating from "../../../../../common/rating/Rating";
import React, {useState} from "react";
import {UpdateArea} from "../../cardsTable/UpateArea";
import {Redirect} from "react-router-dom";
import {routes} from "../../../../../../router/routes";

type StringTablePNType = {
    value1: string
    value2: string
    value3: string
    grade: number
    id: string

}

export const StringTablePN = React.memo((props: StringTablePNType) => {

    const [editMode, setEditMode ] = useState<boolean>(false)

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }

    if(editMode) {
        return  <Redirect to={`/updateArea/${props.id}`}/>
    }

    return (
        <tr onDoubleClick={onDoubleClickHandler}>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>
                <HalfRating grade={props.grade} id={props.id}/>
            </td>
        </tr>
    )
})