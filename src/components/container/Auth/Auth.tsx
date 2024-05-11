import s from './Auth.module.scss';
import useTitle from '../../../hooks/useTitle';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import cn from 'clsx';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import {getRequestData} from '../../../api/data/getData';
import UiButton from '../../ui/Button/UiButton';
import UiModal from '../../ui/Modal/UiModal';

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
        dispatch(getRequestData());
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
