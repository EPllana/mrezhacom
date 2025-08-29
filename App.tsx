import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import SectionAnimator from './components/SectionAnimator';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark font-sans overflow-x-hidden">
      <Header />
      <main className="pt-24">
        <SectionAnimator><Hero /></SectionAnimator>
        <section id="about"><SectionAnimator><About /></SectionAnimator></section>
        <SectionAnimator><Partners /></SectionAnimator>
        <section id="works"><SectionAnimator><Showcase /></SectionAnimator></section>
        <section id="services"><SectionAnimator><Services /></SectionAnimator></section>
        <SectionAnimator><Process /></SectionAnimator>
        <SectionAnimator><Comparison /></SectionAnimator>
        <SectionAnimator><Team /></SectionAnimator>
        <section id="pricing"><SectionAnimator><Pricing /></SectionAnimator></section>
        <SectionAnimator><Faq /></SectionAnimator>
        <SectionAnimator><Testimonials /></SectionAnimator>
        <section id="contact">
          <SectionAnimator><Cta /></SectionAnimator>
        </section>
      </main>
      <SectionAnimator><Footer /></SectionAnimator>
      <BackToTopButton />
    </div>
  );
};

export default App;