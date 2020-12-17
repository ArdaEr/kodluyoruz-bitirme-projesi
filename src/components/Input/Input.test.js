import React, {useState} from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

const SimpleInput= () => {
    return <Input type="text" value="testValue" onChange={() => {}} />;
  };
  
  
  const SimpleInputWithFormatter= () => {
    const [text, setText] = useState('');
  
    return (
      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    );
  };
  
  describe('Input', () => {
    test('renders input tag', () => {
      const { getByDisplayValue } = render(<SimpleInput />);
  
      const input = getByDisplayValue(/testValue/);
      expect(input.tagName).toBe('INPUT');
    });
  
  
    test('gets formatted value', () => {
      const { container } = render(<SimpleInputWithFormatter />);
  
      const inputElement = container.querySelector('input') ;
  
      expect(inputElement.value).toBe('');
      userEvent.type(inputElement, '05/22');
      expect(inputElement.value).toBe('05/22');
    });
  });
  