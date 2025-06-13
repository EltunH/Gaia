import { useEffect, useRef } from "react";
import viska from "../../assets/viska.jpg";

export function Services() {
    const saRef = useRef(null);
    const serviceArr = [
        "Inspection for safety and certification of drilling rigs on land and at sea.",
        "Engineering Services.",
        "Calibration Services for Instruments and Valves.",
        "Installation of pressure vesselsAdditive for pipeline.",
        "Maintenance contracts with professional engineers.",
        "Calibration Services for Instruments and Valves."
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (saRef.current && window.scrollY + window.innerHeight - 250 >= saRef.current.offsetTop) {
                saRef.current.style.opacity = 1;
                saRef.current.style.transform = 'translateY(0)';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);    return (
        <section id="services" ref={saRef}
            style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 opacity-0 py-8 transition-all duration-600 ease-in-out">
            <div className="md:flex gap-x-8 items-center">
                <div className="md:w-[48%] md:pr-4">
                    <h3 className="max-md:text-center text-currColor uppercase font-[900] text-[20px] md:text-2xl">Services</h3>
                    {serviceArr.map((service, index) => (
                        <p key={index} className="mt-2 text-[#215546] md:max-w-[500px] font-bold max-md:text-center">{service}</p>))}
                </div>
                <div className="md:w-[52%] max-md:mt-8">
                    <img src={viska} className="h-[80vh] w-full rounded-3xl md:rounded-4xl object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}