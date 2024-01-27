import {FC} from 'react';
import {IconProps} from '../../../types/types';

const Icon: FC<IconProps> = (icon) => {
    return (
        <svg className={`icon-${icon.name}`} width={icon.width} height={icon.height ? icon.height : icon.width}>
            <use xlinkHref={`#${icon.name}`}></use>
        </svg>
    );
};

export default Icon;
