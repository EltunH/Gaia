import { useEffect, useRef } from "react";
import { Carousel } from "../Swipper";

export function Clients() {
    const saRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (saRef.current && window.scrollY + window.innerHeight - 250 >= saRef.current.offsetTop) {
                saRef.current.style.opacity = 1;
                saRef.current.style.transform = 'translateY(0)';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="clients" ref={saRef} style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 pt-10 md:pt-[80px] opacity-0 pb-8 transition-all duration-600 ease-in-out">
            <h2 className="text-center text-[#063936] mb-8 uppercase text-[24px] mini:text-[28px] md:text-[40px] font-[900]">Our Clients</h2>
            <Carousel />
        </section>
    )
}