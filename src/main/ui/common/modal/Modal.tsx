import React from 'react';
import s from './Modal.module.scss';
import close from "./../../assets/images/close.svg"


type ModalPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
    modalTitle?: string
}


const Modal: React.FC<ModalPropsType> = ({ active, setActive, modalTitle, children }) => {
    return <div className={active ? `${s.modal} + ${s.modalActive}` : s.modal} onClick={() => setActive(false)}>
        <div className={s.modalDialog}>
            <div className={active ? `${s.modalContent} + ${s.modalContentActive}` : s.modalContent}
                onClick={(e) => e.stopPropagation()}>
                <div className={s.modalHeader}>
                    <h4 className={s.modalTitle}>{modalTitle}</h4>
                    <button className={s.btn} onClick={() => setActive(false)}>
                        <img src={close} alt="close" className={s.close} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    </div>
}

export default Modal;