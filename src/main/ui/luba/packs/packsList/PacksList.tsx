import {Button} from "../../../common/button/Button";
import {Dropdown} from "../../../common/dropdown/Dropdown";
import PaginationRounded from "../../../common/pagination/Pagination";
import RangeSlider from "../../../common/rangeSlider/RangeSlider";
import {Search} from "../../../common/search/Search";
import {SideButton} from "../../../common/sideButton/SideButton";
import {StringTablePL} from "./../../../content/components/packs/packsList/stringTablePL/StringTablePL";
import {TitleH2} from "../../../common/titleh2/TitleH2";
import s from "./PacksList.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";
import {PackResponseType} from "../../../content/components/packs/api-packs";
import {v1} from "uuid";
import {SelectValueType} from "../../../../store/packs-reducer";
import ModalForAddPack from "../../../common/modal/ModalForPack/ModalForAddPack";
import React from "react";




export const PacksList = () => {
    return (
        <div className={s.packsList}>
            <aside className={s.aside}>
                <div className={s.packsCard}>
                    <h3 className={s.titleH3}>Show packs cards</h3>
                    <SideButton
                    />
                </div>
                <div className={s.numberCard}>
                    <h3 className={s.titleH3}>Number of cards</h3>
                    <div className={s.rangeSlider}>
                        <RangeSlider/>
                    </div>
                </div>
            </aside>


            <div className={s.content}>
                <TitleH2 value="Packs list"
                         style={{textAlign: "start", padding: "24px 0 15px 0"}}/>
                <div className={s.form}>
                    <Search/>
                    <Button value="Add new pack"
                            style={{width: "184px"}}
                            onClick={()=>{}}
                    />
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
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/>
                        <StringTablePL/><StringTablePL/>
                        
                    </table>
                </div>
                <div className={s.pagination}>
                    <PaginationRounded />
                    <Dropdown/>
                </div>

            </div>
            {/* <ModalForAddPack active={props.activeModalAdd} setActive={props.setActiveModalAdd}
                             addPackHandler={props.addNewPack}
                             modalTitle={"Add new pack"}/> */}
        </div>

    )
}