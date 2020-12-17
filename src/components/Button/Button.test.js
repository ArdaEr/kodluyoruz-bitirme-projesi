import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button', () => {
    test('renders default button', () =>{
        const {getByRole} = render(<Button text="BUTTON" />);
        const button = getByRole ('button');
        expect(button.textContent).toBe('BUTTON');
    });
    test('triggers onClick', () => {
        const mockFn = jest.fn();
        const { getByRole } = render(<Button text="BUTTON" onClick={mockFn} />);
    
        const button = getByRole('button');
        userEvent.click(button);
        expect(mockFn).toHaveBeenCalledTimes(1);
      });
});

