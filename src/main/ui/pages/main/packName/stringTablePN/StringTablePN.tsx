import HalfRating from "../../../../common/rating/Rating";
import s from "./StringTablePN.module.scss";

export const StringTablePN = (props: any) => {
    return (
        <tr>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>
                <HalfRating/>
            </td>
        </tr>
    )
}