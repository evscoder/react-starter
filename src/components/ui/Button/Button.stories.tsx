import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from 'storybook-addon-react-router-v6';
import {FC} from 'react';
import Button  from './Button';
import '../../../styles/app.scss';

interface Props {
    color: string;
}

const ButtonStories: FC<Props> = ({color})  => {
    return (
        <>
            <Button color={color && 'primary'}>Primary Button</Button>
        </>
    );
};

const meta = {
    title: 'Example/Button',
    component: ButtonStories,
    decorators: [withRouter],
    tags: ['autodocs'],
    parameters: {
    },
    argTypes: {
    }
} satisfies Meta<typeof ButtonStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonCollection: Story = {
    args: {
        color: 'Purple'
    }
};
