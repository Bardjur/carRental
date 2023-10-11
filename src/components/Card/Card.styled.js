import styled from '@emotion/styled';
import colors from '../../helpers/colors';
import Button from '../Button';

export const Wrapper = styled.li`
  position: relative;
  max-width: 274px;
  padding-bottom: 72px;
  box-shadow: 2px 2px 5px -1px ${colors.textSecondary};
  border-radius: 14px;
  &:hover > div > img {
    transform: scale(1.15);
  }
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  border-radius: 14px;
  height: 268px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s;
`;

export const Heart = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 5px;
  font-size: 16px;
  line-height: 1.5;
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
  padding: 0 5px;
`;

export const AdditionalItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    border-right: 1px solid ${colors.textSecondary01};
    padding-right: 6px;
    margin-right: 6px;
  }
`;

export const ListBtn = styled(Button)`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
