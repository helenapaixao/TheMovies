import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Input from '../../components/Input';
import { render, fireEvent, wait } from '@testing-library/react';

jest.mock('@unform/core', () => {
    return {
        useField() {
            return {
                fieldName: 'email',
                defaultValue: '',
                error: '',
                registerField: jest.fn(),
            };
        },
    };
});

describe('Input component', () => {
    it('should be able to render an input', () => {
        const { getByPlaceholderText } = render(
            <Input name="email" placeholder="E-mail" />,
        );

        expect(getByPlaceholderText('E-mail')).toBeTruthy();
    });

    it('should renders highlight on input focus', async () => {
        const { getByPlaceholderText, getByTestId } = render(
            <Input name="email" placeholder="E-mail" />,
        );

        const inputElement = getByPlaceholderText('E-mail');
        const containerElement = getByTestId('input-container');

        fireEvent.focus(inputElement);

        await wait(() => {
            expect(containerElement).toHaveStyle('border-color: #FFB20F;');
            expect(containerElement).toHaveStyle('color: #FFB20F;');
        });

        fireEvent.blur(inputElement);

        await wait(() => {
            expect(containerElement).not.toHaveStyle('border-color: #FFB20F;');
            expect(containerElement).not.toHaveStyle('color: #FFB20F;');
        });
    });

    it('should keep input border highlight when input filled', async () => {
        const { getByPlaceholderText, getByTestId } = render(
            <Input name="email" placeholder="E-mail" />,
        );

        const inputElement = getByPlaceholderText('E-mail');
        const containerElement = getByTestId('input-container');
        fireEvent.change(inputElement, {
            target: { value: 'hp.helenapaixao@gmail.com' },
        });

        fireEvent.blur(inputElement);

        await wait(() => {
        
            expect(containerElement).not.toHaveStyle('color: #FFB20F;');
        });
    });
});