import {TitleH2} from "../../../common/titleh2/TitleH2";
import s from "./EditProfile.module.scss";
import aditPhoto from "./../../../assets/images/profile/editPhoto.png";
import {Input} from "../../../common/input/Input";
import {Button} from "../../../common/button/Button";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProfileUserdataTC, updateProfileDataTC} from "../../../../store/login-reducer";
import {AppRootStateType} from "../../../../store/store";
import {Redirect} from "react-router-dom";

export const EditProfile = (props: any) => {

    const dispatch = useDispatch()


    //HOOKS

    const user = useSelector<AppRootStateType>(state => state.login.user);
    const userName = useSelector<AppRootStateType, string>(state => state.login.user.name);
    const userEmail = useSelector<AppRootStateType, string>(state => state.login.user.email);
    const avatar = useSelector<AppRootStateType, string>(state => state.login.user.avatar);
    const inRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        dispatch(getProfileUserdataTC())
        setName(userName)
    }, [dispatch, userName])


    //UPDATING PROFILE
    const [change, setChange] = useState(false)
    const [name, setName] = useState('');
    const [baseImage, setBaseImage] = useState(avatar);


    //ENCODING UPDATED DATA TO BASE64
    const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
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

    // const upload = (e: ChangeEvent<HTMLInputElement>) => {
    //     const reader = new FileReader();
    //     const formData = new FormData();
    //
    //     const newFile = e.target.files && e.target.files[0];
    //
    //     if (newFile) {
    //         setFile(newFile);
    //         setFileURL(window.URL.createObjectURL(newFile));
    //         formData.append('myFile', newFile, newFile.name);
    //         setFileData(formData);
    //
    //         if (code) { // reader
    //             reader.onloadend = () => {
    //                 setFile64(reader.result);
    //             };
    //
    //             if (base64) reader.readAsDataURL(newFile);
    //             else reader.readAsText(newFile);
    //         }
    //     }
    //
    // }
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
        dispatch(updateProfileDataTC(name, baseImage))
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
                           multiple
                           ref={inRef}
                           style={{display: 'none'}}
                           onChange={(e) => {
                               e.currentTarget.value.length !== 0 &&
                               uploadImage(e)
                           }}/>

                    <img className={s.photo} src={avatar} alt="photo" style={{width: "100px", borderRadius: "50px"}}/>
                    <img className={s.icon} src={aditPhoto} alt="photo"/>


                    <form className={s.form}>
                        <Input style={{marginBottom: "25px"}}
                               title='name'
                               type="text"
                               name="nickname"
                               value={name}
                               onChange={(e) => setName(e)}
                        />
                        <Input style={{marginBottom: "106px"}}
                               title="Email"
                               type="email"
                               name="email"
                               value={userEmail}
                        />

                        <button onClick={() => inRef && inRef.current && inRef.current.click()}
                                style={{
                                    width: "100px", height: "40px", margin: "10px", borderRadius: "50px"
                                }}>change image
                        </button>
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