import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 16px #00000014;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    height: 70px;
  }
`;
export const Menu = styled.div`
  width: 40%;
  justify-content: start;
  align-items: center;
  display: flex;
  padding-left: 2rem;
  img {
    width: 24px;
    height: 24px;
    @media (min-width: 640px) {
      display: none;
    }
  }
`;
export const Logo = styled.img`
  width: 195px;
  height: 100%;
  @media (max-width: 640px) {
    height: 58px;
    width: 143px;
  }
`;

export const Search = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5rem;
  img {
    width: 24px;
    height: 24px;
    @media (min-width: 640px) {
    }
  }
`;

export const NavHeader = styled.nav`
  width: 100%;
  height: 49px;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 4px 16px #00000014;
  display: flex;
  justify-content: center;
  @media (max-width: 640px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
export const ContainerItems = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    width: 190px;
    height: 100%;
    color: ${({ theme }) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    svg {
      height: 1.5rem;
      width: 1.5rem;
      margin-top: 3px;
      margin-left: 5px;
    }
  }
`;
