
import React, { useState, useEffect, useRef } from 'react';

// Fix: Changed icon type from JSX.Element to React.ReactNode to fix type error.
const Pill: React.FC<{ children: React.ReactNode, icon: React.ReactNode }> = ({ children, icon }) => (
    <div className="inline-flex items-center gap-2 border border-brand-gray-light bg-brand-gray-dark px-3 py-1 rounded-full text-sm text-brand-text-light mb-4">
        {icon}
        <span>{children}</span>
    </div>
);

const AnimatedStatItem: React.FC<{ value: number; BuildProlabel: string; suffix?: string }> = ({ value, label, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const end = value;
                    const duration = 2000; // Animation duration in ms
                    let startTime: number | null = null;

                    const animate = (currentTime: number) => {
                        if (startTime === null) startTime = currentTime;
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        
                        // Ease-out function for a smoother stop
                        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                        
                        const currentCount = Math.floor(easeOutProgress * end);
                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end); // Ensure it ends on the exact value
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the item is visible
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [value]);

    return (
        <div ref={ref}>
            <p className="text-4xl font-bold text-brand-orange">{count}{suffix}</p>
            <p className="text-brand-text-light">{label}</p>
        </div>
    );
};


const About: React.FC = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Pill icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF602A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>}>
                            About Us
                        </Pill>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Explore Who We Are and What Drives Us
                        </h2>
                        <p className="text-brand-text-light mb-8">
                            We have provided creative solutions for businesses to grow and succeed in the digital world.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <AnimatedStatItem value={150} suffix="+" label="Projects Completed" />
                            <AnimatedStatItem value={15} suffix="+" label="Years of Experience" />
                            <AnimatedStatItem value={100} suffix="+" label="Satisfied Clients" />
                            <AnimatedStatItem value={20} suffix="+" label="Awards Won" />
                        </div>
                    </div>
                    <div>
                        <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*N9yijk5iJVqHaADD" alt="Office" className="rounded-2xl shadow-lg w-full h-auto object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
