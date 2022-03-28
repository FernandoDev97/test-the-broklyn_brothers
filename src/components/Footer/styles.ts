import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 242px;
    background-color: ${({ theme }) => theme.primary};
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 640px) {
        flex-direction: column;
        height: 766px;
    }
`;

export const NavFooter = styled.div`
    width: 50%;
    height: 47px;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    @media(max-width: 1250px) {
        width: 60%
    }
    @media (max-width: 1000px) {
        width: 70%;
    }
    @media (max-width: 790px) {
        width: 85%;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        height: 50%;
    }
    p {
        font-size: 16px;
        cursor: pointer;
        color: ${({ theme }) => theme.background};
    }
    div {
        height: 1.5rem;
        width: 2px;
        border: 1px solid ${({ theme }) => theme.background};
        background-color: ${({ theme }) => theme.background};
        @media (max-width: 640px) {
            width: 1.5rem;
            height: 2px;
        }
    }
`
export const Icons = styled.div`
    width: 70%;
    height: 43px;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 1250px) {
        width: 80%
    }
    @media (max-width: 1000px) {
        width: 90%;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        height: 30%;
    }
    img{
        width: auto;
        object-fit: contain;
        height: auto;
    }
`