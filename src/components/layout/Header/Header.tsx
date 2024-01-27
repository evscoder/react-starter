import s from './Header.module.scss';
import {FC} from 'react';
const Header: FC = () => {
    return (
        <div className={s.pageHeader}>
            <a href={'#'} className={s.pageHeader__title}>Logotype</a>
        </div>
    );
};

export default Header;
