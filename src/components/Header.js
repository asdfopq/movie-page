import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: rgba(3, 37, 45, 1);
`;

const HeaderWrap = styled.div`
  height: 60px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const HeaderLeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const LogoLink = styled(Link)`
  img {
    width: 160px;
    height: 30px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

const NavItem = styled.li`
  padding: 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 600;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderLeftWrap>
          <LogoLink to="/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="TMDB 로고"
            />
          </LogoLink>
          <NavList>
            <NavItem>
              <NavLink to="/movie">영화</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Tv">Tv프로그램</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/person">인물</NavLink>
            </NavItem>
          </NavList>
        </HeaderLeftWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
