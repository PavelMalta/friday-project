import { Actions } from "../actions/Actions";
import s from "./String.module.scss";

export const String = (props: any) => {
    return (
        <>
            <td>{props.value1}</td>
            <td>{props.value2}</td>
            <td>{props.value3}</td>
            <td>{props.value4}</td>
            <td>
                <Actions value="Delete"
                    style={{ backgroundColor: "#F1453D", color: "#fff" }} />
                <Actions value="Edit" />
                <Actions value="Learn" />
            </td>
        </>
    )
}