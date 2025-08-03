import s from './Auth.module.scss';
import useTitle from '../../../../hooks/useTitle.tsx';
import Header from '../../../layout/Header/Header.tsx';
import Footer from '../../../layout/Footer/Footer.tsx';
import cn from 'clsx';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../../store.tsx';
import UiButton from '../../../ui/Button/UiButton.tsx';
import UiModal from '../../../ui/Modal/UiModal.tsx';
import { getAuthData } from '../../../../modules/api/auth';

const Auth = () => {
    const { loading } = useSelector((state: RootState) => state.slice);
    const dispatch = useDispatch<AppDispatch>();
    const [showModal, setModal] = useState<boolean>(false);

    const onToggleModal = (): void => {
        setModal(true);
    };

    const onCloseModal = () => {
        setModal(false);
    };

    useTitle('Auth Page');

    useEffect(() => {
        dispatch(getAuthData());
    }, [dispatch]);

    return (
        !loading && <>
            <div className={s.auth}>
                <div className={cn(s.auth__container, 'container grid')}>
                    <Header />
                    <div className={s.auth__center}>
                        <UiButton color={'primary'} id={'authBtn'} classNames={s.auth__submit} onClick={onToggleModal}>
                            Deploy
                        </UiButton>
                    </div>
                    <Footer />
                </div>
            </div>

            <UiModal isShow={showModal} setClose={onCloseModal} title={'Enjoy Coding'} />
        </>
    );
};

export default Auth;
