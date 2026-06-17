import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Gallery from '@/components/Gallery';
import Plans from '@/components/Plans';
import Promotions from '@/components/Promotions';
import Trainers from '@/components/Trainers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Gallery />
      <Plans />
      <Promotions />
      <Trainers />
      <Contact />
      <Footer />
    </main>
  );
}
