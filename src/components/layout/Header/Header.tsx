import s from './Header.module.scss';
import {FC} from 'react';
import Icon from '../../ui/Icon/Icon';
import imageURL from '../../../helper/imagePath';
const Header: FC = () => {
    return (
        <div className={s.pageHeader}>
            <a href={'https://github.com/evscoder/react-starter'} className={s.pageHeader__title} target={'_blank'}>
                <img src={imageURL('Logo.svg')} alt={'React Starter'} width={120}></img>
                <Icon name={'icon-keyboard-down'} />
                React Starter
            </a>
        </div>
    );
};

export default Header;
