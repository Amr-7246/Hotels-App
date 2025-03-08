import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loading: React.FC = () => {
const dotsRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    if (!dotsRef.current) return;
    
    const ctx = gsap.context(() => {
    const dots = dotsRef.current!.querySelectorAll('.dot');
    
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        
        tl.to(dots, {
        y: -20,
        duration: 0.5,
        ease: 'power1.inOut',
        stagger: { each: 0.2, repeatDelay: 0.1 },
        });

        tl.to(dots, {
        scale: 1.3,
        rotation: 360,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.2,
        }, 0);

        tl.to(dots, {
        opacity: 0.3,
        duration: 0.4,
        ease: 'power1.out',
        stagger: 0.2,
    }, 0);
    }, dotsRef);

    return () => ctx.revert();
}, []);

return (
    <div className="flex flex-col w-full items-center justify-center h-[400px] ">
        <div ref={dotsRef} className="flex space-x-4">
            <div className="dot w-4 h-4 bg-teal-600 rounded-full shadow-lg"></div>
            <div className="dot w-4 h-4 bg-teal-600 rounded-full shadow-lg"></div>
            <div className="dot w-4 h-4 bg-teal-600 rounded-full shadow-lg"></div>
        </div>
    </div>
);
};

export default Loading;
