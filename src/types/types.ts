import React, {ChangeEvent, MouseEventHandler} from 'react';

export type Colors = 'purple' | 'blue' | 'pink' | 'green' | 'yellow' | 'white' | 'emoji' | string | undefined;

export interface IconProps {
    name: string,
    width?: number,
    height?: number
}

export interface ButtonProps {
    link?: boolean,
    href?: string,
    id?: string,
    title?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | ChangeEvent<HTMLButtonElement> | undefined | any,
    children?: React.ReactNode,
    color?: Colors,
    classNames?: string,
}

export interface TooltipProps {
    placement: 'bottom' | 'top',
    content: React.ReactElement,
    children?: React.ReactElement
}
