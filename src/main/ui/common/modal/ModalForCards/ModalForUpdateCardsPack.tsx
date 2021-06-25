import React from 'react';
import Modal from '../Modal';
import { Input } from "../../input/Input";
import { Button } from '../../button/Button';
import s from './ModalForUpdateCardsPack.module.scss';



type ModalUpdatePropsType = {
    active: boolean,
    modalTitle: string,
    packTitle: string,
    setActive: (active: boolean) => void,
    setTitleCard: (t: string) => void,
    onClickUpdatePack: () => void
}

const ModalForUpdateCardsPack: React.FC<ModalUpdatePropsType> = ({setActive, packTitle, modalTitle,active, setTitleCard, onClickUpdatePack}) => {

    const handlerForUpdateTitleCard = (value: string) => {
        setTitleCard(value)
    }
    const updateModalHandlerCancel = () => {
        setActive(false)
    }
    return <div>
        <Modal active={active} setActive={setActive} modalTitle={modalTitle}>
            <div className={s.content}>
                <Input title={packTitle}
                    type={'text'}
                    name={'name pack'}
                    placeholder={'Write a new title for pack'}
                    onChange={handlerForUpdateTitleCard}
                />
                <div className={s.btn}>
                    <Button style={{ backgroundColor: "#D7D8EF", color: "#21268F", width: "124px"}}
                            onClick={updateModalHandlerCancel} value={"Cancel"}
                    />
                    <Button style={{ backgroundColor: "#21268F", color: "#D7D8EF", width: "124px"}}
                            onClick={onClickUpdatePack} value={"Update"}
                    />
                </div>
            </div>

        </Modal>
    </div>
}

export default ModalForUpdateCardsPack;