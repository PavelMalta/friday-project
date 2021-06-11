import HalfRating from "../../../../../common/rating/Rating";

type StringTablePNType = {
    value1: string
    value2: string
    value3: string
    rating: number
}

export const StringTablePN = (props: StringTablePNType) => {
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