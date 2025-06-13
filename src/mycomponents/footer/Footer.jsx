import { useEffect, useRef } from "react";

export function Footer() {
    const saRef = useRef(null);
    
        useEffect(() => {
            const handleScroll = () => {
                if (saRef.current && window.scrollY + window.innerHeight - 150 >= saRef.current.offsetTop) {
                    saRef.current.style.opacity = 1;
                    saRef.current.style.transform = 'translateY(0)';
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <footer id="contact" ref={saRef} style={{ transform: 'translateY(50px)' }} className="bg-currColor py-[64px] md:py-[80px] lg:py-[120px] opacity-0 rounded-[24px_24px_0_0] mt-8 md:rounded-[40px_40px_0_0] transition-all duration-600 ease-in-out font-[exo]">
            <h1>oica</h1>
            <h1>oica</h1>
            <h1>oica</h1>
            <h1>oica</h1>
            <h1>oica</h1>
            <h1>oica</h1>
            <h1>oica</h1>
        </footer>
    )
}