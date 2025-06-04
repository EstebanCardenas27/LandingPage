
import Hero from '../components/sections/Hero';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import Booking from '../components/sections/Booking';
import Services from '../components/sections/Services';
import Features from '@/components/sections/Features';

export default function Home() {
  return (
    <main>      
      <Hero/>
      <Features/>
      <Gallery />
      <Services/>
      <Booking/>
      <Contact/>      
    </main>
  );
}
