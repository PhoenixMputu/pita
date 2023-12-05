import React from 'react';
import NavbarMobile from '../navbarMobile/navbar-mobile';
import HeroMobile from '../heroMobile/hero-mobile';
import GaleryMobile from '../galeryMobile/galery-mobile';
import VideoMobile from '../videoMobile/video-mobile';
import ExpoMobile from '../expoMobile/expo-mobile';
import BiographyDesktop from '../biographyDesktop/biography-desktop';
import EShopMobile from '../eShopMobile/eShop-Mobile';
import ContactSection from '../contactSection/contact-section';
import Footer from '../footer/footer';

const HomeScreenMobile = () => (
  <>
    <NavbarMobile />
    <HeroMobile />
    <GaleryMobile />
    <VideoMobile />
    <ExpoMobile />
    <div>
      <BiographyDesktop />
    </div>
    <EShopMobile />
    <ContactSection />
    <Footer />
  </>
);

export default HomeScreenMobile;
