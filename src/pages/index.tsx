import { useContext } from 'react';
import {context} from '../context/userContext'
import useIsMobile from '../hooks/useIsMobile';
import Header from '../components/Header';
import NavMobile from '../components/NavMobile';
import BannerHero from '../components/BannerHero';
import About from '../components/About';
import OurProducts from '../components/OurProducts';
import BannerProducts from '../components/BannerProducts';
import SeeMore from '../components/SeeMore';
import Footer from '../components/Footer';


export default function Home() {
  const ctx = useContext(context)
  const isMobile = useIsMobile()
  return (
    <div className="container">
      <Header src="/img/LogoHeader.png" />
      {ctx.open && isMobile ? (
        <>
          <NavMobile />
        </>
      ) : (
        <>
          <BannerHero />
          <About />
          <OurProducts />
          <BannerProducts />
          <SeeMore />
          <Footer />
        </>
      )}
    </div>
  );
}
