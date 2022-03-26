import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 550px;
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
        object-fit: fill;
    }
`;

export const ContainerMobile = styled.div`
    width: 100%;
    height: 475px;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`