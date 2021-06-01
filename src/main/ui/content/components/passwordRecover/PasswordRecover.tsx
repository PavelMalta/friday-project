import React, {ChangeEvent} from "react";

export type PasswordRecoverPropsType = {
    email: string
    error: string | null
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    onclickHandler: () => void
}
export const PasswordRecover = (props: PasswordRecoverPropsType) => {
    return (
        <div>
            <input type={'email'} placeholder={'Enter email'} onChange={props.onChangeEmail} value={props.email}/>
            {props.error !== null ? <span>{props.error}</span> : null}
            <button onClick={props.onclickHandler}>Send</button>
        </div>
    )
}