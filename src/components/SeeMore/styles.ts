import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1134px;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media(max-width: 640px) {
        margin-top: 2rem;
    }
  h1 {
    font-size: 39px;
    text-align: center;
    color: ${({ theme }) => theme.primary};
    @media(max-width: 640px) {
        font-size: 31px;
    }
  }
`;

export const ContainerCards = styled.div`
  height: 355px;
  width: 100%;
  display: flex;
  margin-top: 4rem;
  justify-content: space-between;
  @media (max-width: 1200px) {
    overflow-y: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 1rem;
  }
  @media(max-width: 640px) {
    margin-top: 2rem;
    }
`;

export const Card = styled.div`
  width: 356px;
  height: 100%;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 4px 16px #00000014;
  img {
    width: 100%;
    height: 70%;
  }
  div {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
      width: 292px;
      text-align: center;
      font-size: 20px;
      color: ${({ theme }) => theme.textColor};
  }
  
`;

export const Button = styled.div`
    width: 356px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.primary};
    @media(max-width: 640px) {
        margin-top: 2rem;
    }
    p {
        font-size: 20px;
        color: ${({ theme }) => theme.background}
    }
`
