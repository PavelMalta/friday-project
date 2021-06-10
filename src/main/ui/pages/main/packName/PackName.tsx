import s from "./PackName.module.scss";
import Back from "./../../../assets/images/main/back.svg"
import { TitleH2 } from "../../../common/titleh2/TitleH2";
import { Search } from "../../../common/search/Search";
import { StringTablePN } from "./stringTablePN/StringTablePN";
import PaginationRounded from "../../../common/pagination/Pagination";
import { Dropdown } from "../../../common/dropdown/Dropdown";


export const PackName = () => {
    return (
        <div className={s.packName}>
            <div className={s.content}>
                <button className={s.back}>
                    <img className={s.icon} src={Back} alt="icon"/>
                    <TitleH2 value="Pack Name"
                            style={{textAlign: "left", paddingTop: "0"}}
                    />
                </button>
                <div className={s.search}>
                    <Search style={{width: "100%"}}/>
                </div>
                <div className={s.wrap}>
                    <table>
                        <tr>
                            <th className={s.item1}>Question</th>
                            <th className={s.item2}>Answer</th>
                            <th className={s.item3}>Last Updated</th>
                            <th className={s.item4}>Grade</th>
                        </tr>
                        <StringTablePN
                            value1="How This works in JavaScript?"
                            value2="This is how This works in JavaScript"
                            value3="18.03.2021"
                        />
                    </table>
                </div>
                <div className={s.pagination}>
                    <PaginationRounded/>
                    <Dropdown/>
                </div>
            </div>       
        </div>
    )
}
