
import {
  Aside,
  BurgerIcon,
  Icon,
  Logo,
  Nav,
  NavItem,
  NavItemLink,
  NavList,
  TopBlock
} from "./NavBar.styled";
import sprite from "../../assets/imgs/sprite.svg";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Aside className={isOpen ? 'open': ''}>
      <Nav>
        <TopBlock>
          {isOpen && <Logo>Autorent</Logo>}
          <BurgerIcon onClick={() => {setIsOpen(!isOpen)}}>
            <use href={`${sprite}${!isOpen? '#menu' : '#arrow'}`}></use>
          </BurgerIcon>
        </TopBlock>
        <NavList>
          <NavItem>
            <NavItemLink to='/'>
              <Icon>
                <use href={`${sprite}#garage`}></use>
              </Icon>
              <span>Home</span>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to='/catalog'>
              <Icon>
                <use href={`${sprite}#car`}></use>
              </Icon>
              <span>Catalog</span>
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink to='/favorites'>
              <Icon>
                <use href={`${sprite}#tire-burning`}></use>
              </Icon>
              <span>Favorites</span>
            </NavItemLink>
          </NavItem>
        </NavList>

      </Nav>
    </Aside>
  )
}