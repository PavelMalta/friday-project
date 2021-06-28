import {TitleH2} from "../../../common/titleh2/TitleH2";
import s from "./EditProfile.module.scss";
import editPhoto from "./../../../assets/images/profile/editPhoto.png";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileUserdataTC, updateProfileDataTC} from "../../../../store/login-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";

export const EditProfile =  (props: any) => {
    //HOOKS
    const user = useSelector<AppRootStateType>(state => state.login.user);
    const userName = useSelector<AppRootStateType, string>(state => state.login.user.name);
    const userEmail = useSelector<AppRootStateType, string>(state => state.login.user.email);
    const avatar = useSelector<AppRootStateType, string>(state => state.login.user.avatar);
    const inRef = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfileUserdataTC())
        setName(userName)
    }, [dispatch, userName])

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
                    <input type="file"
                           accept=".jpg, .jpeg, .png"
                           ref={inRef}
                           style={{display: 'none'}}
                           onChange={(e) => {
                               e.currentTarget.value.length !== 0 &&
                               uploadImage(e)
                           }}/>
                    <div className={s.edit}>
                        <img className={s.photo} src={avatar} alt="photo" style={{width: "80px", height: "70px",  borderRadius: "50px"}}/>
                        <div>
                            <a onClick={() => inRef && inRef.current && inRef.current.click()}>
                                <img className={s.icon} src={editPhoto} alt="photo"/>
                            </a>
                        </div>    
                    </div>
                    <form className={s.form}>
                        <Input style= {{marginBottom:"25px"}}
                               title="Nickname"
                               type="text"
                               name="nickname"
                               value={name}
                               onChange={(e) => setName(e)}/>

                        <Input style={{marginBottom: "106px"}}
                               title="Email"
                               type="email"
                               name="email"
                               value={userEmail}
                        />
                    </form>
                    <div className={s.btn}>
                        <Button style={{width: "125px", backgroundColor: "#D7D8EF", color: "#21268F"}}
                                value="Cancel"
                                onClick={props.onclickHandler}
                        />
                        <Button style={{width: "125px"}}
                                value="Save"
                                onClick={updateProfileHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}