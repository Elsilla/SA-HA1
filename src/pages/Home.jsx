import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Testimonials from '../components/Testimonials'
import Carousel from "@/components/Carousel";
import ThematicCollections from '@/components/ThematicCollections';
import Benefits from '../components/Benefits'
import { carousel } from "@/lib/carousel";

const Home = () => {
  return (
    <div className='container-home'>
      <HeroSlider/>
      <Carousel products={carousel}/>
      {/* <ThematicCollections/> */}
      <Testimonials/>
      <Benefits/>
    </div>
  )
}

export default Home
