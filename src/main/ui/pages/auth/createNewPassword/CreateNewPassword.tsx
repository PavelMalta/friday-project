import s from "./CreateNewPassword.module.scss";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button"
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";

export const CreateNewPassword = () => {
    return (
        <div className={s.forgotPassword}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2 value="Create new password"/>
                    <div className={s.form}>
                        <Input title="Password"
                                type= "password"
                                name="password"
                                id= "checkbox"
                                htmlFor= "checkbox"
                                style= {{marginTop:"40px"}} />
                    </div>
                    <span className={s.text}>Create new password and we will send you further instructions to email</span>
                    <div className={s.btn}>
                        <Button value="Create new password"
                                onClick={()=>{}}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}