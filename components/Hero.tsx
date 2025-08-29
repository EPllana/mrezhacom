
import React from 'react';

// Fix: Changed icon type from JSX.Element to React.ReactNode to fix type error.
const Pill: React.FC<{ children: React.ReactNode, icon: React.ReactNode }> = ({ children, icon }) => (
    <div className="flex items-center gap-2 border border-brand-gray-light bg-brand-gray-dark px-3 py-1 rounded-full text-sm text-brand-text-light">
        {icon}
        <span>{children}</span>
    </div>
);

const Hero: React.FC = () => {
    return (
        <section className="py-20 md:py-32 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-transparent"></div>
             <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[80%] h-[50%] bg-brand-orange/10 blur-[150px] rounded-full"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex justify-center mb-6">
                    <Pill icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF602A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}>
                        goMREZHA Serves 100+ Clients
                    </Pill>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                    Launch Smarter with Strategic<br />Design That Performs
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-brand-text-light mb-8">
                    Successful businesses grow and succeed with a beautiful and effective website that performs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="#" className="w-full sm:w-auto bg-brand-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-center transform hover:-translate-y-px hover:shadow-lg hover:shadow-brand-orange/20">
                        Start Your Project Now
                    </a>
                </div>
                 <p className="text-sm text-brand-text-light mt-4">✓ Trusted by 100+ companies worldwide</p>

                <div className="mt-16 relative">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1024&h=576&fit=crop&crop=entropy" alt="Team meeting" className="rounded-2xl mx-auto shadow-2xl shadow-brand-orange/10 border-2 border-brand-gray-light"/>
                    <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 hover:bg-white/30 transition-all transform hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
