import { useEffect, useRef } from "react";
import human from "../../assets/human.jpg";

export function Gas() {
    const saRef = useRef(null);
    const gasArr = [
        "Lifting Equipment Inspection.",
        "Tank calibration services.",
        "Solution in the field of labor safety and advanced training.",
        "API Threaded Casing Connection.",
        "Electrical, mechanical, instrumentation, equipment, construction.",
        "Solution in the field of labor safety and advanced training."
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
    }, []);

    return (
        <section id="products" ref={saRef}
            style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 opacity-0 py-8 transition-all duration-600 ease-in-out">
            <div className="md:flex gap-x-8 items-center">
                <div className="md:w-[48%] md:order-[2] md:pl-4">
                    <h3 className="max-md:text-center text-[#063936] uppercase font-[900] text-[20px] md:text-2xl">Our services mainly are forOil & Gas / Construction</h3>
                    {gasArr.map((service, index) => (
                        <p key={index} className="mt-2 text-[#215546] md:max-w-[500px] font-bold max-md:text-center">{service}</p>))}
                </div>
                <div className="md:w-[52%] order-1 max-md:mt-8">
                    <img src={human} className="h-[80vh] w-full rounded-3xl md:rounded-4xl object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}