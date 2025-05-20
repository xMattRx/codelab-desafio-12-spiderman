import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import teias from '../assets/teias.png';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center text-white font-jakarta overflow-x-hidden w-full">
        <img
          src={teias}
          alt="Teias de fundo"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        />

        <div className="relative z-10 max-w-[1196px] w-full px-6 flex flex-col items-center justify-center">
          <Header />
          <Hero />
        </div>
      </div>

      <Footer />
    </>
  );
}
