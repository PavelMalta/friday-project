import s from "./CardsList.module.scss";
import Back from "./../../../../assets/images/main/back.svg"
import {TitleH2} from "../../../../common/titleh2/TitleH2";
import {Search} from "../../../../common/search/Search";
import {StringTablePN} from "./stringTablePN/StringTablePN";
import PaginationRounded from "../../../../common/pagination/Pagination";
import {Dropdown} from "../../../../common/dropdown/Dropdown";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {CardsResponseType} from "../api-cards";
import {v1} from "uuid";
import {SelectValueType} from "../../packs/Packs";
import {InitialStateType} from "../../../../../store/cards-reducer";

type CardsListType = {
    userID: string
    deleteCard: (cardID: string) => void
    updateCard: (cardID: string) => void
    onChangePage: (page: number) => void
    value: SelectValueType
    onChangeOption: (value: SelectValueType) => void
}

export const CardsList = (props: CardsListType) => {

    const cardsData = useSelector<AppRootStateType, InitialStateType>(state => state.cards)

    const formatDate = (date: string): string => {
        return new Date(date).toLocaleDateString("ru", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        })
    }

    return (
        <div className={s.packName}>
            <div className={s.content}>
                <button className={s.back}>
                    <img className={s.icon} src={Back} alt="icon"/>
                    <TitleH2 value={cardsData.packName}
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
                        {cardsData.cardsTableData.cards.map((item) => {
                            return (
                                <StringTablePN
                                    key={v1()}
                                    value1={item.question}
                                    value2={item.answer}
                                    value3={formatDate(item.updated)}
                                    rating={item.rating}
                                />)
                        })}
                    </table>
                </div>
                <div className={s.pagination}>
                    <PaginationRounded
                        totalCount={cardsData.cardsTableData.cardsTotalCount}
                        pageCount={cardsData.cardsTableData.pageCount}
                        page={cardsData.cardsTableData.page}
                        onChangePage={props.onChangePage}
                    />
                    <Dropdown
                        options={[5, 10, 25, 50, 100]}
                        value={props.value}
                        onChangeOption={props.onChangeOption}
                    />
                </div>
            </div>
        </div>
    )
}
