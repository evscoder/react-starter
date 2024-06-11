import {FC} from 'react';
import s from './Footer.module.scss';
const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <p className={s.credit}>
                <a href="https://evscoder.pro/about.html" target={'_blank'}>© 2024 by Evgeny Staroverov</a>
            </p>
        </footer>
    );
};

export default Footer;
