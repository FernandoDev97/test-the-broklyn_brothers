import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 550px;
    margin-top: 5rem;
    @media (max-width: 1450px) {
        height: 400px
    }
    @media (max-width: 1000px) {
        height: 300px
    }
    @media (max-width: 640px ) {
        display: none;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContainerMobile = styled.div`
    width: 100%;
    margin-top:2rem ;
    @media (max-width: 640px) {
        height: 470px;
    }
    img {
        width: 100%;
        height: 100%;
        @media (max-width: 640px) {
        object-fit: fill;
    }
    }
`