import styled from 'styled-components';
import { InputPropsType } from 'view/component/common/input/Input.interface';
import { colorStyle, getResponsiveMediaQuery } from 'Styled.GlobalStyle';

export const Input = styled.input<Partial<InputPropsType>>`
  padding: 0 12px;
  border-radius: 0.375rem;
  border: 1px solid ${colorStyle.lightGray};
  font-size: 1rem;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  :disabled {
    background: ${colorStyle.mediumGray};
  }

  ${getResponsiveMediaQuery('sm')} {
    width: 100%;
  }
`;
