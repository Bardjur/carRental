import styled from '@emotion/styled';
import { query, colors } from '../../helpers';
import { Btn } from '../../components/Button/Button.styled';

export const Wrapper = styled.div`
  max-width: 461px;
  max-height: 80vh;
  overflow: auto;
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 248px;
  border-radius: 14px;

  ${query.tablet} {
    width: 461px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Info = styled.h2`
  margin-top: 14px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
  color: ${colors.textMain};

  & span {
    color: ${colors.colorMain};
  }
`;

export const AdditionalList = styled.ul`
  margin-top: 8px;
  color: ${colors.textSecondary};
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
`;

export const AdditionalItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 6px;
    border-right: 1px solid ${colors.textSecondary01};
    padding-right: 6px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  color: ${colors.textMain};
`;

export const Title = styled(Text)`
  margin-top: 24px;
  font-weight: 500;
`.withComponent('h3');

export const Box = styled.ul`
  margin-top: 8px;
`;

export const BoxItem = styled.li`
  display: inline-block;
  margin-bottom: 8px;
  padding: 7px 14px;
  font-size: 12px;
  line-height: 1.5;
  color: #363535;
  background-color: #f9f9f9;
  border-radius: 35px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  & span {
    color: ${colors.colorMain};
    font-weight: 600;
  }
`;

export const BoxP = BoxItem.withComponent('p');

export const Link = styled(Btn)`
  display: block;
  margin-top: 30px;
  text-align: center;
  width: 168px;
`.withComponent('a');
