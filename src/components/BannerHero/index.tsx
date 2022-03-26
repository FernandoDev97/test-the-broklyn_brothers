import * as S from './styles';
import useIsMobile from '../../hooks/useIsMobile';

function BannerHero() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <S.ContainerMobile>
           <img
            src="/img/BannerHeroMobile.png"
            alt="Banner inlustrativo informando as vantagem dos produtos IntiBiome"
          />
        </S.ContainerMobile>
      ) : (
        <S.Container>
          <img
            src="/img/BannerHero.png"
            alt="Banner inlustrativo informando as vantagem dos produtos IntiBiome"
          />
        </S.Container>
      )}
    </>
  );
}

export default BannerHero;
