import React, {useState} from 'react';
import Modal from '../Modal';
import { Input } from "../../input/Input";
import s from "./ModalForAddPack.module.scss";
import { Button } from '../../button/Button';


type ModalAddPropsType = {
    active: boolean,
    modalTitle:string,
    setActive: (active: boolean) => void
    addPackHandler: (name: string) => void,
   }

const ModalForAddPack: React.FC<ModalAddPropsType> = ({
                                                          active, setActive,
                                                          addPackHandler, modalTitle
                                                      }) => {

    const[namePack, setNamePack] = useState<string>('')

    const handlerForAddNamePack = (value: string) => {
        setNamePack(value)
    }
    const addNewPackHandler = () => {
        addPackHandler(namePack)
    }

    const addCardHandlerCancel = () => {
        setActive(false)
    }
    return <div>
        <Modal active={active} setActive={setActive} modalTitle={modalTitle}>
            <div className={s.content}>
                <Input title={'Name Pack'}
                    type={'text'}
                    onChange={handlerForAddNamePack}
                    placeholder={'Write title here'}
                />
                <div className={s.btn}>
                    <Button style={{ backgroundColor: "#D7D8EF", color: "#21268F", width: "124px" }}
                        onClick={addCardHandlerCancel} value={"Cancel"}
                    />
                    <Button style={{ backgroundColor: "#21268F", color: "#D7D8EF", width: "124px" }}
                        onClick={addNewPackHandler} value={"Save"}
                    />

                </div>
            </div>

        </Modal>
    </div>

}

export default ModalForAddPack;