import styled from '@emotion/styled';
import { colors, query } from '../../helpers';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-right: ${props =>
    props.not_radius === 'right'
      ? `1px solid ${colors.textSecondary02}`
      : 'none'};
`;

export const Caption = styled.span`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  font-size: 18px;
  font-weight: 500;
`;

export const Ipt = styled.input`
  width: 135px;
  border-radius: ${props =>
    props.not_radius === 'left'
      ? '0 14px 14px 0'
      : props.not_radius === 'right'
      ? ' 14px 0 0 14px'
      : '14px'};
  border: none;
  padding: 14px;
  padding-left: 60px;
  background-color: ${colors.input};
  font-size: 18px;
  &:active,
  &:focus {
    outline: 1px solid ${colors.colorMain};
  }

  ${query.mobile} {
    width: 160px;
  }
`;
