import HalfRating from "../../../../../common/rating/Rating";
import {MouseEventHandler} from "react";

type StringTablePNType = {
    value1: string
    value2: string
    value3: string
    rating: number
    id: string

}

export const StringTablePN = (props: StringTablePNType) => {


    return (
        <tr>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>
                <HalfRating rating={props.rating} id={props.id}/>
            </td>
            <td>
                {/*<button value={1} onClick={() => props.onSendRating(1)}>не знал</button>*/}
                {/*<button value={2} onClick={() => props.onSendRating(2)}>Забыл</button>*/}
                {/*<button value={3} onClick={() => props.onSendRating(3)}>Долго думал</button>*/}
                {/*<button value={4} onClick={() => props.onSendRating(4)}>Перепутал</button>*/}
                {/*<button value={5} onClick={() => props.onSendRating(5)}>Знал</button>*/}
            </td>
        </tr>
    )
}