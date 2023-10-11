import styled from '@emotion/styled';
import colors from '../../helpers/colors';

export const Btn = styled.button`
  padding: 12px;
  background-color: ${colors.colorMain};
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 600;
  color: ${colors.colorWhite};
  border-radius: 12px;
  border: none;
  display: inline-block;
  transition: background 0.4s, color 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${colors.colorSecondary};
  }
`;
