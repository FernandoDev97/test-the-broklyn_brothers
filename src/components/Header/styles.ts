import styled, { keyframes } from 'styled-components';
const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 16px #00000014;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 640px) {
    height: 70px;
    box-shadow: 0px 4px 16px #00000014;
  }
`;
export const Menu = styled.div`
  width: 40%;
  justify-content: start;
  align-items: center;
  display: flex;
  padding-left: 1.8rem;
  img {
    width: 24px;
    height: 24px;
    z-index: 10;
    cursor: pointer;
    animation: ${fadeInAnimation} 0.4s ease-in-out;
    transition: opacity 0.5s;
    transition-delay: 2s;
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
  padding-left: 2rem;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
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
    transition: opacity 0.5s;
    cursor: pointer;
    font-size: 16px;
    @media (max-width: 1000px) {
      width: 130px;
      font-size: 14px;
    }
    svg {
      height: 1.5rem;
      width: 1.5rem;
      margin-top: 2.5px;
      margin-left: 5px;
      @media (max-width: 1000px) {
        height: 1.2rem;
        width: 1.2rem;
        margin-top: 2px;
        margin-left: 4px;
      }
    }
  }
`;

