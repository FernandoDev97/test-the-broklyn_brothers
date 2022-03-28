import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1132px;
  @media (max-width: 640px) {
    width: 100%;
  }
  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 39px;
    @media (max-width: 640px) {
      font-size: 31px;
    }
  }
`;

export const CardsContainer = styled.section`
  width: 100%;
  height: 530px;
  margin-top: 4rem;
  display: flex;
  gap: 1rem;
  /* background-color: purple; */
  justify-content: space-between;
  @media (max-width: 1200px) {
    overflow-y: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const CardBlue = styled.div`
  height: 100%;
  width: 356px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.1rem;
  box-shadow: 0px 4px 16px #00000014;
  img {
    width: 100%;
    height: 70%;
  }
  div {
    width: 292px;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      color: ${({ theme }) => theme.textColor};
      text-align: center;
    }
  }
  footer {
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 0 0 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 25px;
      color: ${({ theme }) => theme.background};
      text-align: center;
    }
  }
`;
export const CardGreen = styled.div`
  height: 100%;
  width: 356px;
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 1.1rem;
  box-shadow: 0px 4px 16px #00000014;
  img {
    width: 100%;
    height: 70%;
  }
  div {
    width: 300px;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 640px) {
      padding: 1px;
    }
    p {
      font-size: 20px;
      color: ${({ theme }) => theme.textColor};
      text-align: center;
    }
  }
  footer {
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.secudary};
    border-radius: 0 0 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 25px;
      color: ${({ theme }) => theme.background};
      text-align: center;
    }
  }
`;
export const CardRed = styled.div`
  height: 100%;
  width: 356px;
  display: flex;
  flex-direction: column;

  align-items: center;
  border-radius: 1.1rem;
  box-shadow: 0px 4px 16px #00000014;
  img {
    width: 100%;
    height: 70%;
  }
  div {
    width: 280px;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      color: ${({ theme }) => theme.textColor};
      text-align: center;
    }
  }
  footer {
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.tertiary};
    border-radius: 0 0 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 25px;
      color: ${({ theme }) => theme.background};
      text-align: center;
    }
  }
`;
