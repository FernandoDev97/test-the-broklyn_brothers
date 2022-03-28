import * as S from './styles';
import useIsMobile from '../../hooks/useIsMobile';
import { useContext } from 'react';
import { context } from '../../context/userContext';

function BannerHero() {
  const isMobile = useIsMobile();
  const ctx = useContext(context);
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
            src="/img/BannerHero2.png"
            alt="Banner inlustrativo informando as vantagem dos produtos IntiBiome"
          />
        </S.Container>
      )}
      {ctx.isShowAbout && (
        <S.NavAboutUs
          onMouseEnter={() => ctx.setIsShowAbout(true)}
          onMouseLeave={() => ctx.setIsShowAbout(false)}
        >
          <div>
            <p>brand philosophy</p>
            <p>product technology</p>
          </div>
        </S.NavAboutUs>
      )}
      {ctx.isShowProducts && (
        <S.NavProducts
          onMouseEnter={() => ctx.setIsShowProducts(true)}
          onMouseLeave={() => ctx.setIsShowProducts(false)}
        >
          <div>
            <p>all products</p>
            <p>intibiome wellness</p>
            <p>intibiome active</p>
            <p>intibiome active</p>
          </div>
        </S.NavProducts>
      )}
      {ctx.isShowHealth && (
        <S.NavHealth
          onMouseEnter={() => ctx.setIsShowHealth(true)}
          onMouseLeave={() => ctx.setIsShowHealth(false)}
        >
          <div>
            <p>article 1</p>
            <p>article 2</p>
            <p>article 3</p>
            <p>faq</p>
          </div>
        </S.NavHealth>
      )}
    </>
  );
}

export default BannerHero;
