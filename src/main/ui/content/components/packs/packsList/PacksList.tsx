import { Button } from "../../../../common/button/Button";
import { Dropdown } from "../../../../common/dropdown/Dropdown";
import PaginationRounded from "../../../../common/pagination/Pagination";
import RangeSlider from "../../../../common/rangeSlider/RangeSlider";
import { Search } from "../../../../common/search/Search";
import { SideButton } from "../../../../common/sideButton/SideButton";
import { String } from "../../../../common/string/String";
import { TitleH2 } from "../../../../common/titleh2/TitleH2";
import s from "./PacksList.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {PackResponseType} from "../api-packs";
import {v1} from "uuid";

type PacksListType = {
    userID: string
    addNewPack: () => void
    deletePack: (packID: string) => void
    updatePack: (packID: string ,title: string) => void
    learnPack: (packID: string) => void
    onChangePage: (page: number) => void
}

export const PacksList = (props: PacksListType) => {

    const packsData = useSelector<AppRootStateType, PackResponseType>(state => state.packs.packsTableData)

    const formatDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }

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
                            style= {{width: "184px", marginLeft: "24px" }}
                            onClick= {props.addNewPack}/>
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
                        {packsData.cardPacks.map((item) => {
                            return (
                        <tr key={v1()}>

                            <String
                                value1={item.name}
                                value2={item.cardsCount}
                                value3={formatDate(item.updated)}
                                value4={item.user_name}
                                packUserId={item.user_id}
                                userId={props.userID}
                                packId={item._id}
                                deletePack={props.deletePack}
                                updatePack={props.updatePack}
                                learnPack={props.learnPack}
                                />
                        </tr>)})}
                    </table>
                </div>
                <div className={s.pagination}>
                    <PaginationRounded packTotalCount={packsData.cardPacksTotalCount}
                                       packsPageCount={packsData.pageCount}
                                       page={packsData.page}
                                       onChangePage={props.onChangePage}
                    />
                    <Dropdown/>
                </div>
                
            </div>
        </div>

    )
}