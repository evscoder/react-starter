import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Auth from './Auth';

test('Check text button', async () => {
    const { getByTestId } = render(
        <Auth />
    );

    const btn = getByTestId('authBtn');

    fireEvent.click(btn);
    expect(btn).toHaveTextContent('Deploy');
});
