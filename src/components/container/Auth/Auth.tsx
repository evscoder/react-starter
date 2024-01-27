import s from './Auth.module.scss';
import useTitle from '../../../hooks/useTitle';
import Button from '../../ui/Button/Button';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import cn from 'clsx';

const Auth = () => {
    useTitle('Auth Page');

    return (
        <div className={s.auth}>
            <div className={cn(s.auth__container, 'container grid')}>
                <Header />
                <div className={s.auth__center}>
                    <Button color={'primary'} id={'authBtn'} classNames={s.auth__submit}>
                        Deploy
                    </Button>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Auth;
