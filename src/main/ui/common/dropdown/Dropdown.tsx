import React from "react";
import { ChangeEvent } from "react";

import s from "./Dropdown.module.scss";

export const Dropdown = (props: any) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChangeOption(e.target.value)
    }

    return (
        <div className={s.dropdown}>
            <span className={s.text}>Show</span>
            <div className={s.dropdownSelect}>
                <select className={s.item} onChange={onChangeHandler}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <span className={s.text}>Cards per Page</span>
        </div>
    )
}