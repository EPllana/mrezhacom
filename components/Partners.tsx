import React from 'react';
import { useKeenSlider } from 'keen-slider/react';

const PartnerLogo: React.FC<{ imageUrl: string; invert?: boolean }> = ({ imageUrl, invert }) => (
    <div className="flex items-center justify-center h-52">
        <img 
            src={imageUrl} 
            alt="Partner logo" 
            className={`max-h-full w-auto object-contain ${invert ? 'invert' : ''}`} 
        />
    </div>
);

interface Partner {
    imageUrl: string;
    invert?: boolean;
}

const Partners: React.FC = () => {
    const partners: Partner[] = [
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/05/2020NewLogoUPDATED-2.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-2-6.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-1-1.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-2-7.png' },
        { imageUrl: 'https://dotcommatrix.com/wp-content/uploads/2024/04/client-4-1.png' },
    ];

    // Duplicate partners for a seamless looping marquee effect
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];
    
    const animation = { duration: 20000, easing: (t: number) => t };

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: {
            perView: "auto",
            spacing: 80,
        },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });

    return (
        <section className="py-2 md:py-2">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xl text-brand-text-light mb-12">
                    Powering success for 5,000+ companies globally
                </p>
                 <div className="relative">
                     <div ref={sliderRef} className="keen-slider">
                        {duplicatedPartners.map((partner, index) => (
                            <div key={index} className="keen-slider__slide" style={{ minWidth: 'auto' }}>
                                <PartnerLogo imageUrl={partner.imageUrl} invert={partner.invert} />
                            </div>
                        ))}
                    </div>
                    {/* Add gradient overlays for a fade-out effect on the edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-brand-dark to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
