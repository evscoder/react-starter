import s from './Auth.module.scss';
import useTitle from '../../../hooks/useTitle';
import Button from "../../ui/Button/Button";

const Auth = () => {
    useTitle('Auth Page');

    return (
        <div className={s.auth}>
            <h1>React Starter</h1>
            <Button color={'primary'}>
                Deploy
            </Button>
        </div>
    );
};

export default Auth;
