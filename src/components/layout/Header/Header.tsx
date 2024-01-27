import s from './Header.module.scss';
import {FC} from 'react';
import {Logo} from '../../../data/data';
const Header: FC = () => {
    return (
        <div className={s.pageHeader}>
            <a href={'https://github.com/evscoder/react-starter'} className={s.pageHeader__title} target={'_blank'}>
                <img src={Logo} alt={'React Starter'} width={140} /> React Starter
            </a>
        </div>
    );
};

export default Header;
