import s from "./CardsList.module.scss";
import Back from "./../../../../assets/images/main/back.svg"
import {TitleH2} from "../../../../common/titleh2/TitleH2";
import {Search} from "../../../../common/search/Search";
import {StringTablePN} from "./stringTablePN/StringTablePN";
import PaginationRounded from "../../../../common/pagination/Pagination";
import {Dropdown} from "../../../../common/dropdown/Dropdown";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../store/store";
import {v1} from "uuid";
import {InitialStateType, updateAnswerQuestion, updateCardTC} from "../../../../../store/cards-reducer";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {SelectValueType} from "../../../../../store/packs-reducer";
import { Button } from "../../../../common/button/Button";

type CardsListType = {
    userID: string
    deleteCard: (cardID: string) => void
    updateCard: (cardID: string) => void
    onChangePage: (page: number) => void
    value: SelectValueType
    onChangeOption: (value: SelectValueType) => void
}

export const CardsList = React.memo((props: CardsListType) => {

    const cardsData = useSelector<AppRootStateType, InitialStateType>(state => state.cards);

    // const cardsData = {
    //     cardsTableData: {
    //         cards: [
    //             {
    //                 answer: "2",
    //                 cardsPack_id: "60c1758db6ecf40004d1dfaf",
    //                 comments: "",
    //                 created: "2021-06-23T15:01:21.427Z",
    //                 grade: 0,
    //                 more_id: "60bd24153a402900041d8b78",
    //                 question: "2",
    //                 rating: 0,
    //                 shots: 0,
    //                 type: "card",
    //                 updated: "2021-06-23T15:01:21.427Z",
    //                 user_id: "60bd24153a402900041d8b78",
    //                 __v: 0,
    //                 _id: "60d34cc13d2b6c00048b91b8",
    //             },
    //             {
    //                 answer: "answer",
    //                 answerImg: "",
    //                 answerVideo: "",
    //                 cardsPack_id: "60c1758db6ecf40004d1dfaf",
    //                 comments: "comment",
    //                 created: "2021-06-23T02:33:14.049Z",
    //                 grade: 0,
    //                 more_id: "60bd24153a402900041d8b78",
    //                 question: "1",
    //                 questionImg: "",
    //                 questionVideo: "",
    //                 rating: 0,
    //                 shots: 0,
    //                 type: "card",
    //                 updated: "2021-06-23T03:42:02.029Z",
    //                 user_id: "60bd24153a402900041d8b78",
    //                 __v: 0,
    //                 _id: "60d29d6af66efc0004adca2c",
    //             },
    //             {
    //                 answer: "no answer",
    //                 answerImg: "",
    //                 answerVideo: "",
    //                 cardsPack_id: "60c1758db6ecf40004d1dfaf",
    //                 comments: "comment",
    //                 created: "2021-06-21T23:33:44.386Z",
    //                 grade: 4.593813834467875,
    //                 more_id: "60bd24153a402900041d8b78",
    //                 question: "w12",
    //                 questionImg: "some img",
    //                 questionVideo: "",
    //                 rating: 0,
    //                 shots: 0,
    //                 type: "card",
    //                 updated: "2021-06-23T02:32:00.747Z",
    //                 user_id: "60bd24153a402900041d8b78",
    //                 __v: 0,
    //                 _id: "60d121d8d8b224000452f614",
    //             }
    //         ],
    //         cardsTotalCount: 0,
    //         maxGrade: 0,
    //         minGrade: 0,
    //         page: 0,
    //         pageCount: 0
    //     },
    //     isFetching: false,
    //     cardsPackId: "60c1758db6ecf40004d1dfaf",
    //     packName: "Jane"
    // }

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
                    <Button value="Add cards"
                            style= {{width: "184px" }}
                            onClick= {()=>{}}/>
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
                </div>
            </div>
        </div>
    )
})
