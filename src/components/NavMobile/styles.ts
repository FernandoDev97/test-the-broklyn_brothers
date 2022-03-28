import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 3
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  transition: opacity 0.5s;
  transition-delay: 2s;
  animation: ${fadeInAnimation} 0.4s ease-in-out;
  &::after{
    transition: opacity 0.5s;
    transition-delay: 2s;
  }
  p {
      font-size: 16px;
      cursor: pointer;
      color: ${({ theme}) => theme.background};
  }
`;
