import React from 'react';
import {render} from '@testing-library/react';
import Layout from './Layout';

describe('Layout',() => {
    test('renders Layout without crashing',() => {
        const wrapper = render(<Layout/>)

        expect(wrapper).toBeTruthy();
    })
})