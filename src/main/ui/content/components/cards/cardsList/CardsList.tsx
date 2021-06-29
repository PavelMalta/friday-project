import s from "./CardsList.module.scss";
import Back from "./../../../../assets/images/main/back.svg"
import {TitleH2} from "../../../../common/titleh2/TitleH2";
import {Search} from "../../../../common/search/Search";
import {StringTablePN} from "./stringTablePN/StringTablePN";
import PaginationRounded from "../../../../common/pagination/Pagination";
import {Dropdown} from "../../../../common/dropdown/Dropdown";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {v1} from "uuid";
import {addCardTC, InitialStateType} from "../../../../../store/cards-reducer";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {SelectValueType} from "../../../../../store/packs-reducer";
import {Button} from "../../../../common/button/Button";
import {ModalForAddCard} from "../cardsTable/ModalForAddCard";

type CardsListType = {
    userID: string
    deleteCard: (cardID: string) => void
    updateCard: (cardID: string) => void
    onChangePage: (page: number) => void
    addCards: () => void
    value: SelectValueType
    onChangeOption: (value: SelectValueType) => void
}

export const CardsList = React.memo((props: CardsListType) => {

    const cardsData = useSelector<AppRootStateType, InitialStateType>(state => state.cards);
    const cardsPackId = useSelector<AppRootStateType, string>(state => state.cards.cardsPackId);
    const dispatch = useDispatch()

    // Hooks for adding cards
    const [active, setActive]  = useState<boolean>(false);
    const [question, setQuestion]  = useState<string>('');
    const [answer, setAnswer]  = useState<string>('');

    const newCardPayload = {
        cardsPack_id: cardsPackId,
        question: question,
        answer: answer
    }


    // const onClickHandler = () => {
    //     setActive(true)
    // }

    const addCardHandler = () => {
        dispatch(addCardTC(newCardPayload, {cardsPack_id: cardsPackId, pageCount: 100}))
    }

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
                    <NavLink to={`/packs`}>
                        <img className={s.icon} src={Back} alt="icon"/>
                    </NavLink>
                    <TitleH2 value={cardsData.packName}
                             style={{textAlign: "left", paddingTop: "0"}}
                    />
                </button>
                <div className={s.search}>
                    <Search/>
                    <Button value="Add card"
                            style={{width: "184px"}}
                            onClick={() => setActive(true)}/>
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
                                    grade={item.grade}
                                    id={item._id}
                                    userID={item.user_id}
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
                    <ModalForAddCard modalTitle={'New card'}
                                     active={active}
                                     question={question}
                                     answer={answer}
                                     addCardHandler={addCardHandler}
                                     setQuestion={setQuestion}
                                     setAnswer={setAnswer}
                                     setActive={setActive}
                    />
                </div>
            </div>
        </div>
    )
})
