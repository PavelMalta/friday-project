import { TitleH2 } from "../../../../common/titleh2/TitleH2";
import s from "./EditProfile.module.scss";
import profilePeter from "./../../../../assets/images/profile/profileIvan.png";
import aditPhoto from "./../../../../assets/images/profile/editPhoto.png";
import { Input } from "../../../../common/input/Input";
import { Button } from "../../../../common/button/Button";


export const EditProfile = (props:any) => {
    return (
        <div className={s.editProfile}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <TitleH2 value="Personal Information"/>
                    <div className={s.eidt}>
                        <img className={s.photo} src={profilePeter} alt="photo"/>
                        <div>
                            <img className={s.icon} src={aditPhoto} alt="photo"/>
                        </div>
                        
                    </div>
                    
                    <form className={s.form}>
                        <Input style= {{marginBottom:"25px"}}
                                title="Nickname"
                                type="text"
                                name="nickname"
                        />
                        <Input style= {{marginBottom:"106px"}}
                                title="Email"
                                type="email"
                                name="email"
                        />
                    </form>
                    <div className={s.btn}>
                        <Button style={{width: "125px", backgroundColor: "#D7D8EF", color: "#21268F"}}
                                value="Login"
                                onClick={props.onclickHandler}
                        />
                        <Button style={{width: "125px"}}
                                value="Save"
                                onClick={props.onclickHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}