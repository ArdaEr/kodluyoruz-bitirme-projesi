import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('renders Footer with Wrapper background', () => {
        const {getByText} = render(
            <Footer>Copyright</Footer>
        );
        const FooterTest = getByText(/Copyright/);
        expect(FooterTest).toHaveStyle('background-color: #5d5d5d');
    })
    test('renders Footer without crashing',() => {
        const wrapper = render(<Footer/>)

        expect(wrapper).toBeTruthy();
    })
});