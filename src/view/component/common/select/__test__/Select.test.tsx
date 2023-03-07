import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SelectPropsType } from 'view/component/common/select/Select.interface';
import Select from 'view/component/common/select/Select';

const renderComponent = (props: SelectPropsType) => render(<Select {...props} />);

describe('src/view/component/common/select/Select', () => {
  let props: SelectPropsType;
  const mockOnChangeFunc = jest.fn();

  beforeEach(() => {
    props = {
      dataTestId: 'test-select',
      children: <option>Test Select</option>,
      name: 'testSelectName',
      value: '',
      onChangeFunc: mockOnChangeFunc,
    };
  });

  it('render Select component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-select')).toBeInTheDocument();
  });

  it('test props values', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-select')).toHaveAttribute('width', '100%'); // default
    expect(getByTestId('test-select')).toHaveTextContent('Test Select');
  });

  it('test onChange event', () => {
    const { getByTestId } = renderComponent(props);
    const testSelect = getByTestId('test-select');
    fireEvent.change(testSelect, {
      target: {
        value: 'test1',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(1);
    fireEvent.change(testSelect, {
      target: {
        value: 'test2',
      },
    });
    expect(mockOnChangeFunc).toHaveBeenCalledTimes(2);
  });
});
