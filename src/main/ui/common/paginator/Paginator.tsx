import React, {ChangeEvent, ChangeEventHandler, FC, useState} from "react";
import styles from "./Paginator.module.css";

type UsersPageType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
    maxCardsCount?: number,
    minCardsCount?: number,
}

export const Paginator: FC<UsersPageType> = ({
                                                 currentPage,
                                                 pageSize,
                                                 totalItemsCount,
                                                 onPageChanged,
                                                 portionSize = 20
                                             }) => {

    const [portionOfItems, setPortionOfItems] = useState<number>(pageSize);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPortionOfItems(+e.currentTarget.value)
    }

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionNumber = (portionNumber - 1) * portionOfItems + 1;
    const rightPortionNumber = portionNumber * portionOfItems;

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)}}>prev</button>}
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((p) => {
                return <a><span key={p} className={(currentPage === p) ? styles.selectedPage : styles.pageNumber}
                                onClick={() => {onPageChanged(p)}}>{p}</span></a>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        <select value={'amount of decks'} onChange={onChangeHandler}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>

        </select>
    </div>
}