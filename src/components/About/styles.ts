import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;
  width: 100%;
  max-width: 1132px;
  @media (max-width: 640px) {
      max-width: 392px;
  }
  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 39px;
    @media (max-width: 640px) {
      font-size: 31px;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
    margin-top: 1.5rem;
    margin-bottom: 3.5rem;
    @media (max-width: 640px) {
        width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: auto;
  margin-top: 1.5rem;
  @media (max-width: 640px) {
    width: 392px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  width: 90%;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export const Descriptions = styled.div`
  width: 744px;
  @media (max-width: 760px) {
      width: 100%;
  }
  @media (max-width: 640px){
      width: 100%
  }
  @media (max-width: 400px) {
    width: 300px;
  }
  h1 {
    text-align: center;
    @media(max-width: 640px) {
        font-size: 31px;
    }
  }
  p{
      width: 100%; 
      color: ${({ theme }) => theme.textColor};
      font-size: 20px;
      text-align: center;
      margin-top: 0.5rem;
      padding: 1rem;
      margin-bottom: 1rem;
      @media (max-width: 640px) {
          font-size: 16px;
          padding: 0;
          margin-top: 1.2rem;
      }
  }
`;
