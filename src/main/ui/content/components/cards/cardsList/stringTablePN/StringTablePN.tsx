import HalfRating from "../../../../../common/rating/Rating";
import React from "react";

type StringTablePNType = {
    value1: string
    value2: string
    value3: string
    grade: number
    id: string

}

export const StringTablePN = React.memo((props: StringTablePNType) => {

    return (
        <tr>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>
                <HalfRating grade={props.grade} id={props.id}/>
            </td>
        </tr>
    )
})