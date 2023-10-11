import styled from '@emotion/styled';
import colors from '../../helpers/colors';
import { query } from '../../helpers';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;

  ${query.desktop} {
    align-items: end;
    flex-direction: row;
    max-width: initial;
  }
`;

export const SelectsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  ${query.tablet} {
    flex-direction: row;
  }
`;

export const BrandWrap = styled.div`
  ${query.desktop} {
    width: 224px;
  }
`;

export const PriceWrap = styled.div`
  ${query.desktop} {
    width: 125px;
  }
`;

export const Caption = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
  color: ${colors.caption};
`;

export const InputWrap = styled.div``;
