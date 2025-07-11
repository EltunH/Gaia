import { IoIosCall } from "react-icons/io";
import { useEffect, useRef } from "react";

export function Welcome() {
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
        <section ref={saRef}
            style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 pb-8 pt-10 opacity-0 md:pt-[80px] transition-all duration-600 ease-in-out">
            <h2 className="text-center text-currColor uppercase text-[24px] mini:text-[28px] md:text-[40px] font-[900]">Welcome to the GAIA</h2>
            <div className="mt-4 md:mt-12 md:flex gap-x-8 items-center">
                <div className="md:w-[48%] md:pr-4">
                    <h3 className="max-md:text-center text-currColor uppercase font-[900] text-[20px] md:text-2xl">What we do</h3>
                    <p className="mt-2 text-[#215546] text-justify font-bold text-[18px] max-md:text-center"> GAIA represents some of the world’s finest Brands in the region and provides a
                        “One Stop Shop” solution in terms of Mechanical, Electrical ,Instrumentation ,Civil,
                        Automation, Pipeline, and Safety Supplies for the Oil & Gas and associated industries.
                        <br />
                        In addition to supplying high-quality 
                        equipment and components, GAIA also supports its clients with integrated solutions tailored to project-specific needs, ensuring 
                        timely delivery, compliance with international standards, and technical excellence across all operations. With a strong regional presence, 
                        industry expertise, and a commitment to long-term partnerships, GAIA plays a vital role in supporting infrastructure development, 
                        plant efficiency, and operational safety across the energy sector.</p>
                    <a href="tel:+994555555555" className="uppercase mt-4 md:mt-6 h-[57px] group max-md:mx-auto flex items-center max-w-[183px] cursor-pointer hover:scale-[.95] px-4 rounded-full text-[14px] font-[900] bg-[#3fb33d] text-currColor transition-all duration-300">
                        <span className="text-nowrap"><IoIosCall className="text-[18px] inline-block" /> Call Us Today</span>
                    </a>
                </div>
                <div className="md:w-[52%] max-md:mt-8">
                    <img src="/assets/img/industry.jpg" className="h-[80vh] rounded-3xl md:rounded-4xl w-full object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}