import { render, screen } from '@testing-library/react';

import { TextInput } from '.';

import userEvent from '@testing-library/user-event';


describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} searchValue={'testando'} />);

    const input = screen.getByPlaceholderText(/Type your search/i);

    expect(input.value).toBe('testando');



  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();

    render(<TextInput handleChange={fn} searchValue= "um valor qualquer" />);

    screen.debug();

    const input = screen.getByPlaceholderText(/type your search/i);

    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe("um valor qualquer");

    expect(fn).toHaveBeenCalledTimes(0);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<TextInput handleChange={fn} searchValue={"testando"} />);

    expect(container.firstChild).toMatchSnapshot();


  });
});
