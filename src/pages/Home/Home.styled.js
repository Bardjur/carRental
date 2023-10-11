import styled from '@emotion/styled';
import img from '../../assets/imgs/car.jpg';
import colors from '../../helpers/colors';
import { Btn } from '../../components/Button/Button.styled';
import { Link } from 'react-router-dom';
import { query } from '../../helpers';

export const BG = styled.div`
  width: calc(100% + 20px);
  height: 100vh;
  margin-left: -20px;
  color: ${colors.colorWhite};
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: 100vh;
  margin: 0 auto;
  ${query.tablet} {
    justify-content: end;
    max-width: initial;
    width: calc(768px - 56px);
  }
  ${query.desktop} {
    width: calc(1024px - 56px);
  }
`;

export const ContentWrap = styled.div`
  text-align: center;
  padding-left: 25px;
  padding-right: 5px;

  ${query.tablet} {
    text-align: left;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
`;

export const Text = styled.div`
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
`;

export const NavBtn = Btn.withComponent(Link);
