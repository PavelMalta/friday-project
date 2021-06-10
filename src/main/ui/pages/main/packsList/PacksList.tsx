import { Actions } from "../../../common/actions/Actions";
import { Button } from "../../../common/button/Button";
import { Dropdown } from "../../../common/dropdown/Dropdown";
import PaginationRounded from "../../../common/pagination/Pagination";
import RangeSlider from "../../../common/rangeSlider/RangeSlider";
import { Search } from "../../../common/search/Search";
import { SideButton } from "../../../common/sideButton/SideButton";
import { StringTablePL } from "./stringTablePL/StringTablePL";
import { TitleH2 } from "../../../common/titleh2/TitleH2";
import s from "./PacksList.module.scss";



export const PacksList = () => {
    return (
        <div className={s.packsList}>
            <aside className={s.aside}>
                <h3 className={s.titleH3}>Show packs cards</h3>
                <SideButton />
                <h3 className={s.titleH3}>Number of cards</h3>
                <div className={s.rangeSlider}>
                    <RangeSlider/>
                </div>               
            </aside>
            <div className={s.content}>
                <TitleH2 value="Packs list"
                    style={{ textAlign: "start", padding: "24px 0 15px 0"}} />
                <div className={s.form}>
                    <Search/>
                    <Button value="Add new pack"
                            style= {{width: "184px", marginLeft: "24px" }} onClick= {()=>{}}/>
                </div>
                
                <div className={s.wrap}>
                    <table>
                        <tr>
                            <th className={s.item1}>Name</th>
                            <th className={s.item2}>Cards</th>
                            <th className={s.item3}>Last Updated</th>
                            <th className={s.item4}>Created by</th>
                            <th className={s.item5}>Actions</th>
                        </tr>
                            <StringTablePL
                                value1="Pack Name"
                                value2="4"
                                value3="18.03.2021"
                                value4="Ivan Ivanov"
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