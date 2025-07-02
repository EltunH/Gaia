import { useEffect, useRef } from "react";

export function Services() {
    const saRef = useRef(null);
    const serviceArr = [
        "Inspection & Certification of Drilling Rigs.",
        "Engineering Services.",
        "Calibration Services for Instruments and Valves.",
        "Installation of Pressure Vessels & Pipeline Additives.",
        "Maintenance Contracts with Qualified Engineers.",
        "Turnkey Solutions & Field Support."
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
    }, []); return (
        <section id="services" ref={saRef}
            style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 opacity-0 py-8 transition-all duration-600 ease-in-out">
            <div className="md:flex gap-x-8 items-center">
                <div className="md:w-[48%] md:pr-4">
                    <h3 className="max-md:text-center text-currColor uppercase font-[900] text-[20px] md:text-2xl">Services</h3>
                    <p className="mt-2 mb-4 text-[#215546] md:max-w-[500px] font-bold text-justify md:text-[18px] max-md:text-center">
                        GAIA offers a comprehensive suite of technical and engineering services that ensure safety, compliance,
                        operational continuity, and performance optimization across the oil & gas and energy sectors.
                        Our core service offerings include:
                    </p>
                    <ul className="list-disc pl-4">
                        {serviceArr.map((service, index) => (
                            <li key={index} className="mt-2 text-[#215546] md:max-w-[500px] font-bold ">{service}</li>))}
                    </ul>
                </div>
                <div className="md:w-[52%] max-md:mt-8">
                    <img src="/public/assets/img/viska.jpg" className="h-[80vh] w-full rounded-3xl md:rounded-4xl object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}