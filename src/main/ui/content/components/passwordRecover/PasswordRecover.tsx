import React, {ChangeEvent, useState} from "react";


export const PasswordRecover = () => {
    const [email, setEmail] = useState("")

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onclickHandler = () => {}

    return (
        <div>
            <input type={'email'} placeholder={'Enter email'} onChange={onChangeEmail} value={email}/>
            <button onClick={onclickHandler}>Send</button>
        </div>
    )
}