import { truncate } from "fs";
import { Actions } from "../../../../common/actions/Actions";
import s from "./StringTablePL.module.scss";

export const StringTablePL = (props: any) => {
    return (
        <tr>
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
        </tr>
    )
}