
import React, {FC} from 'react';
import s from './Modal.module.scss';
import cn from 'clsx';

interface Props {
    isShow: {
        show: boolean,
        animate: boolean
    },
    type?: 'compact',
    side?: 'right',
    content: React.ReactElement,
    footer: React.ReactElement,
    classNames?: string,
    setClose: () => void
}

const closeModalAction = (setModal: any) => {
    setModal({ show: true, animate: false });

    setTimeout(() => {
        setModal({ show: false, animate: false });
    }, 310);
};

const Modal: FC<Props> = ({ isShow, type, content, footer, classNames, setClose }) => {
    return (
        <div className={cn(s.modal, isShow.show && s[`is-active`], isShow.animate && s[`is-animate`], s[`modal-${type}`], classNames)}>
            <div className={s.modal__overlay} data-dismiss="modal" onClick={setClose}></div>
            <div className={s.modal__wrap}>
                <div className={s.modal__window}>
                    <div className={s.modal__content}>
                        <div className={s.modal__body} data-modal={'modal-body'}>
                            <div className={s.modal__container}>
                                { content }
                            </div>
                        </div>
                        {footer &&
                            <div className={s.modal__footer} data-modal={'modal-footer'}>
                                <div className={s.modal__container}>
                                    { footer }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    closeModalAction
};

export default Modal;
