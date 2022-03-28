import { useContext, useState } from 'react';
import About from '../Components/About';
import BannerHero from '../Components/BannerHero';
import BannerProducts from '../Components/BannerProducts';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import NavMobile from '../Components/NavMobile';
import OurProducts from '../Components/OurProducts';
import SeeMore from '../Components/SeeMore';
import {context} from '../context/userContext'
import useIsMobile from '../hooks/useIsMobile';


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
