  import * as S from './styles';
  import useIsMobile from '../../hooks/useIsMobile';

  function BannerProducts() {
    const isMobile = useIsMobile();

    return (
      <>
        {isMobile ? (
          <S.ContainerMobile>
            <img src="/img/BannerProductsMobile.png" alt="" />
          </S.ContainerMobile>
        ) : (
          <S.Container>
            <img src="/img/BannerProducts.png" alt="" />
          </S.Container>
        )}
      </>
    );
  }

  export default BannerProducts;
