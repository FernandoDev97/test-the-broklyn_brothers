import BannerHero from "../components/BannerHero";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header src="/img/LogoHeader.png"/>
      <BannerHero />
    </div>
    
  );
}
