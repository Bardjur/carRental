import styled from '@emotion/styled';
import { query } from '../../helpers';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  max-width: 1184px;
  margin: 0 auto 50px;
  padding: 0;
  list-style: none;

  ${query.desktop} {
    margin: 0 auto 100px;
  }
`;
