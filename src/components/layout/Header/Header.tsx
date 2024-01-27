import s from './Header.module.scss';
import {FC} from 'react';
const Header: FC = () => {
    return (
        <div className={s.pageHeader}>
            <a href={'https://github.com/evscoder/react-starter'} className={s.pageHeader__title} target={'_blank'}>
                React Starter
            </a>
        </div>
    );
};

export default Header;
