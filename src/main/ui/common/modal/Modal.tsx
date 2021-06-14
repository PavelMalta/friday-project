import React from 'react';
import s from './Modal.module.css'


type ModalPropsType = {
    active: boolean,
    setActive: (active: boolean) => void
}

const Modal: React.FC<ModalPropsType> = ({active, setActive, children}) => {
    return <div className={active ? `${s.modal} + ${s.modalActive}` : s.modal} onClick={() => setActive(false)}>
        <div className={active ? `${s.modalContent} + ${s.modalContentActive}` : s.modalContent}
             onClick={(e) => e.stopPropagation()}>
            <button className={s.btn} onClick={() => setActive(false)}>x</button>
            {children}
        </div>
    </div>
}

export default Modal;