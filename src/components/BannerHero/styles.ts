import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes `
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Container = styled.div`
    width: 100%;
    height: 570px;
    position: relative;
    z-index: 1;
    @media (max-width: 1450px) {
        height: 420px
    }
    @media (max-width: 1000px) {
        height: 340px
    }
    @media (max-width: 640px ) {
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;

export const ContainerMobile = styled.div`
    width: 100%;
    object-fit: cover;
    @media (max-width: 500px) {
        height: 475px
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const NavAboutUs = styled.div`
  width: 100%;
  height: 49px;
  position: absolute;
  top: 0;
  margin-top: 8rem;
  z-index: 3;
  transition: opacity 0.5s;
  animation: ${fadeInAnimation} 0.4s ease-in-out;
  background-color: ${({ theme }) => theme.textColor};
  div {
    margin-left: 16rem;
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1500px) {
        width: 40%;
        margin-left: 14rem;
    }
    @media (max-width: 1300px) {
        width: 45%;
        margin-left: 10rem;
    }
    @media (max-width: 1100px) {
        width: 55%;
        margin-left: 6rem;
        font-size: 14px
    }
    @media (max-width: 900px) {
        width: 70%;
        margin-left: 2rem;
        font-size: 12px
    }
    p {
      font-size: 16px;
      cursor: pointer;
      color: ${({ theme }) => theme.background};
    }
  }
`

export const NavProducts = styled.div`
  width: 100%;
  height: 49px;
  position: absolute;
  top: 0;
  margin-top: 8rem;
  z-index: 3;
  animation: ${fadeInAnimation} 0.4s ease-in-out;
  background-color: ${({ theme }) => theme.textColor};
  div {
    margin-left: 22rem;
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1500px) {
        width: 40%;
        margin-left: 14rem;
    }
    @media (max-width: 1300px) {
        width: 45%;
        margin-left: 10rem;
    }
    @media (max-width: 1100px) {
        width: 55%;
        margin-left: 6rem;
        font-size: 14px
    }
    @media (max-width: 900px) {
        width: 70%;
        margin-left: 2rem;
        font-size: 12px
    }
    @media (max-width: 700px) {
        width: 90%;
        margin-left: 2rem;
        font-size: 12px
    }
    p {
      font-size: 16px;
      cursor: pointer;
      color: ${({ theme }) => theme.background};
    }
  }
`
export const NavHealth = styled.div`
  width: 100%;
  height: 49px;
  position: absolute;
  top: 0;
  margin-top: 8rem;
  z-index: 3;
  animation: ${fadeInAnimation} 0.4s ease-in-out;
  background-color: ${({ theme }) => theme.textColor};
  div {
    margin-left: 17rem;
    width: 27%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1500px) {
        width: 40%;
        margin-left: 14rem;
    }
    @media (max-width: 1300px) {
        width: 45%;
        margin-left: 10rem;
    }
    @media (max-width: 1100px) {
        width: 55%;
        margin-left: 6rem;
        font-size: 14px
    }
    @media (max-width: 900px) {
        width: 70%;
        margin-left: 2rem;
        font-size: 12px
    }
    p {
      font-size: 16px;
      cursor: pointer;
      color: ${({ theme }) => theme.background};
    }
  }
`