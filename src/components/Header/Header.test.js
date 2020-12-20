import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';


const SimpleHeader = () => {
    return(
        <Router>
            <Header/>
        </Router>
    )
}


describe('Header',() => {
    test('renders Header without crashing',() => {
        const wrapper = render(<SimpleHeader/>)

        expect(wrapper).toBeTruthy();

    })

});
