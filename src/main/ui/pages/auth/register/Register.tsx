import s from "./Register.module.scss";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button";
import { Logo } from "../../../common/logo/Logo";
import { TitleH2 } from "../../../common/titleh2/TitleH2";




export const Register = () => {
    return (
        <div className={s.loginPage}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <Logo/>
                    <TitleH2/>
                    <div className={s.form}>
                        <Input title="Email"
                                    type= "email"
                                    name="email" />   {/* Нужно убрать глазик (логика) */} 
                        <Input title="Password"
                                type= "password"
                                name="password"
                            style= {{marginTop:"25px"}} />
                            <Input title="Confirm password"
                                type= "password"
                                name="Confirm password"
                            style= {{marginTop:"25px"}} />
                    </div>
                    <form className={s.btn}>
                        <Button value="Cancel"
                            style={{width:"124px", 
                                    backgroundColor: "#CDCEF4",
                                    color: "#21268F",
                                    marginRight: "36px"
                                    }} />
                        <Button value="Register"
                            style={{width:"187px"}}/>
                    </form>
                </div>
            </div>
        </div>
    )
}