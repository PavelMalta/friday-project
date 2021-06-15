import { TitleH2 } from "../../../common/titleh2/TitleH2";
import s from "./EditProfile.module.scss";
import profilePeter from "./../../../assets/images/profile/profileIvan.png";
import aditPhoto from "./../../../assets/images/profile/editPhoto.png";
import { Input } from "../../../common/input/Input";
import { Button } from "../../../common/button/Button";
import {useEffect, useState} from "react";
import { ChangeEvent } from "react";
import {useDispatch, useSelector} from "react-redux";
import {isAuthUserData, updateProfileDataTC} from "../../../../store/login-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";

export const EditProfile =  (props: any) => {
    //HOOKS
    const dispatch = useDispatch()
    const user = useSelector<AppRootStateType >(state => state.login.user)

    //UPDATING PROFILE
    const [change, setChange] = useState(false)
    const [name, setName] = useState('')
    const [baseImage, setBaseImage] = useState('');

    //ENCODING UPDATED DATA TO BASE64
    const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            if (e.target.files[0].type !== 'image/jpeg' && 'image/png' && 'image/jpg') {
                console.log('The picture must be a file of type: jpeg, jpg, png')
            } else {
                const file = e.target.files[0];
                const base64: any = await convertBase64(file);
                setBaseImage(base64);
            }
        }
    };
    const convertBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    //SENDING DATA
    const updateProfileHandler = () => {
        setChange(!change)
        if (change) {
            dispatch(updateProfileDataTC(name, baseImage))
        }
    }


    if (user === null) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.editProfile}>
            <div className={s.wrapper}>
                <div className={s.inner}>
                    <TitleH2 value="Personal Information"/>
                    <div className={s.eidt}>
                        <div className={s.imgWrap}>
                            <img className={s.profileImg} style={{width: '100px', height: '100px'}} src={''} alt={'userPhoto'}/>
                        </div>
                        {change &&
                        <div className={s.inputWrap}>
                            <input className={s.profileInput} type='file' onChange={event => uploadImage(event)}/>
                        </div>
                        }


                        <button className={s.btnSave} onClick={updateProfileHandler} >{change ? 'save' : 'change'}</button>

                        <img className={s.photo} src={profilePeter} alt="photo"/>
                        <img className={s.icon} src={aditPhoto} alt="photo"/>
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
                                value="Cancel"
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