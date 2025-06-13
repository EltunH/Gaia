import { useEffect, useRef } from "react";
import logo from '../../assets/Logo_Gaia.png';

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
        <footer id="contact" ref={saRef} style={{ transform: 'translateY(50px)' }} className="bg-currColor py-[64px] md:p-[80px_0_40px] lg:p-[120px_0_60px] opacity-0 rounded-[24px_24px_0_0] mt-8 md:rounded-[40px_40px_0_0] transition-all duration-600 ease-in-out font-[exo]">
            <section id="about" className="max-w-[1240px] mx-auto max-mini:px-4 px-6">
                <div className="md:flex justify-between">
                    <div className="md:w-[40%] md:flex gap-x-7">
                        <a className="max-md:flex justify-center" href="/index.html">
                            <img src={logo} alt="logo" className="max-w-[100px] max-h-[100px]" />
                        </a>
                        <div>
                            <p className="max-md:text-center text-[#fff7e1] max-md:mt-10">GAIA established in 2021 in Azerbaijan with team of professionals to cater to Caspian region.</p>
                            <p className="max-md:text-center text-[#fff7e1] mt-5">Copyright © 2025 Gaia</p>
                        </div>
                    </div>
                    <div className="md:w-[26%] md:pl-5 ">
                        <p className="max-md:text-center text-[#fff7e1] max-md:mt-8 font-bold text-[18px]">Contact Details</p>
                        <p className="max-md:text-center text-[#fff7e1] mt-3">
                            <a href="#" className="underline hover:no-underline">Baku</a>
                        </p>
                        <p className="max-md:text-center text-[#fff7e1] mt-3">
                            <a href="tel:+994518808988" className="underline hover:no-underline">+994 (51) 880 89 88</a>
                        </p>
                        <p className="max-md:text-center text-[#fff7e1] mt-3">
                            <a href="mailto:office@gaia.az" className="underline hover:no-underline">office@gaia.az</a>
                        </p>
                    </div>
                    <div className="md:w-[33%] max-md:mt-5">
                        <iframe className="w-full h-[250px] rounded-[24px] md:rounded-[10px]" title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6079.53268836896!2d49.838519!3d40.369705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db1247f14b3%3A0x774142cb1c94bcc5!2zMjEgSGFqaSBaZXluYWxhYmRpbiBUYWdoaXlldiBTdCwgQmFrdSAxMDA1LCDQkNC30LXRgNCx0LDQudC00LbQsNC9!5e0!3m2!1sru!2sus!4v1749826420481!5m2!1sru!2sus"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </footer>
    )
}