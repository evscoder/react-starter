import {forwardRef} from 'react';
import s from './Button.module.scss';
import cn from 'clsx';
import {ButtonProps} from '../../../types/types';
import {Link} from 'react-router-dom';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({link, id, children, color, classNames, ...props }, ref) => {
    const buttonClasses = cn(s.button, color && s[`button--${color}`], classNames);
    const button = () => {
        if (link) {
            const href = props.href as string;

            return (
                <Link {...props} data-testid={id} to={href} className={buttonClasses}>
                    { children }
                </Link>
            );
        }

        return (
            <button {...props} ref={ref} id={id} data-testid={id} className={buttonClasses}>
                { children }
            </button>
        );
    };

    return (
        button()
    );
});

export default Button;
