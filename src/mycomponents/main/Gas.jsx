import { useEffect, useRef } from "react";

export function Gas() {
    const saRef = useRef(null);
    const gasArr = [
        "Lifting Equipment Inspection.",
        "Tank Calibration Services.",
        "Occupational Safety Solutions & Advanced Training.",
        "API Threaded Casing Connection Services.",
        "Integrated Technical Solutions.",
        "Electrical, mechanical, instrumentation, equipment, construction.",
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
                    <h3 className="max-md:text-center text-currColor uppercase font-[900] text-[20px] md:text-2xl">Our services mainly are forOil & Gas / Construction</h3>
                    <p className="mt-2 mb-4 text-[#215546] md:max-w-[500px] font-bold text-justify md:text-[18px] max-md:text-center">
                        GAIA delivers specialized technical services tailored to the needs of the Oil & Gas and Construction 
                        industries. With a strong focus on safety, compliance, and quality, we support industrial operations through the 
                        following core services:
                    </p>
                    <ul className="list-disc pl-4">
                        {gasArr.map((service, index) => (
                            <li key={index} className="mt-2 text-[#215546] md:max-w-[500px] font-bold ">{service}</li>))}
                    </ul>
                </div>
                <div className="md:w-[52%] order-1 max-md:mt-8">
                    <img src="/public/assets/img/human.jpg" className="h-[80vh] w-full rounded-3xl md:rounded-4xl object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}