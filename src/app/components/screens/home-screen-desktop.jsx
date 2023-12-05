import React from 'react';
import NavbarDesktop from '../navbarDesktop/navbar-desktop';
import HeroDesktop from '../heroDesktop/hero-desktop';
import GaleryDesktop from '../galeryDesktop/galery-desktop';
import VideoDesktop from '../videoDesktop/video-desktop';
import ExpoDesktop from '../expoDesktop/expo-desktop';
import BiographyDesktop from '../biographyDesktop/biography-desktop';
import EShopDesktop from '../eShopDesktop/eShop-desktop';
import ContactSection from '../contactSection/contact-section';
import Footer from '../footer/footer';

const HomeScreenDesktop = () => (
  <>
    <NavbarDesktop />
    <HeroDesktop />
    <GaleryDesktop />
    <VideoDesktop />
    <ExpoDesktop />
    <BiographyDesktop />
    <EShopDesktop />
    <ContactSection />
    <Footer />
  </>
);

export default HomeScreenDesktop;
