import React, {ChangeEvent} from "react";

export type PasswordRecoverPropsType = {
    email: string
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    onclickHandler: () => void
}
export const PasswordRecover = (props: PasswordRecoverPropsType) => {
    return (
        <div>
            <input type={'email'} placeholder={'Enter email'} onChange={props.onChangeEmail} value={props.email}/>
            <button onClick={props.onclickHandler}>Send</button>
        </div>
    )
}