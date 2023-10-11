import styled from '@emotion/styled';
import colors from '../../helpers/colors';
import { NavLink } from 'react-router-dom';
import { query } from '../../helpers';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 100vh;
  padding-top: 20px;
  padding-left: 5px;
  background-color: ${colors.colorMain};
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  transition: width 0.4s;
  z-index: 99999;
  &.open {
    width: 140px;
  }

  ${query.tablet} {
    width: 54px;
    &.open {
      width: 155px;
    }
  }
`;

export const Nav = styled.nav`
  width: 155px;
`;
export const TopBlock = styled.div`
  padding: 0 0 12px 5px;
  margin-bottom: 5px;

  ${query.tablet} {
    padding: 0 0 12px 12px;
  }
`;
export const Logo = styled.span`
  padding-right: 12px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  vertical-align: middle;
  color: ${colors.colorWhite};
`;
export const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const NavItem = styled.li`
  border: 1px solid ${colors.colorWhite};
  border-right: none;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const NavItemLink = styled(NavLink)`
  padding: 10px 5px;
  background-color: ${colors.colorMain};
  font-size: 18px;
  line-height: 1.4;
  font-weight: 600;
  color: ${colors.colorWhite};
  transition: background 0.3s;
  display: block;
  &:hover,
  &.active {
    background-color: ${colors.colorSecondary};
  }

  ${query.tablet} {
    padding: 12px;
  }
`;
export const Icon = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  vertical-align: bottom;
  fill: ${colors.colorWhite};
`;

export const BurgerIcon = styled(Icon)`
  vertical-align: middle;
  margin: 0;
  cursor: pointer;
  &:hover {
    fill: ${colors.colorSecondary};
  }
`;
