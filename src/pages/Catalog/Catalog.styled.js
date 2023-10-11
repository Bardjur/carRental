import styled from '@emotion/styled';
import { query, colors } from '../../helpers';

export const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;

  ${query.tablet} {
    max-width: initial;
    width: calc(768px - 56px);
  }
  ${query.desktop} {
    padding: 62px 0;
    width: calc(1024px - 56px);
  }
`;

export const Btn = styled.button`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: ${colors.colorMain};
  text-decoration: underline;
  margin: 0 auto;
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${colors.colorSecondary};
  }
`;
