import { useEffect, useRef } from "react";

export function Whoare() {
    const saRef = useRef(null);

    const data = [
        { title: "The Right Partner", desc: "We position ourselves not merely as a vendor, but as a trusted partner who understands your challenges and works alongside you to create tailored, effective solutions." },
        { title: "Information Management", desc: "With robust systems and processes, we ensure accurate, timely, and transparent information flow—empowering better decision-making and smoother project execution." },
        { title: "Delivery of Products & Services", desc: "We deliver a full range of high-quality products and services—reliably, efficiently, and always in line with industry standards and client expectations." },
        { title: "Service Backup", desc: "Our responsibility doesn’t end with delivery. We provide continuous post-sale technical support, spare parts availability, and service continuity to maximize uptime and performance." },
    ]

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
            style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 opacity-0 py-8 transition-all duration-600 ease-in-out">
            <div className="md:flex gap-x-8 items-center">
                <div className="md:w-[48%] md:order-[2] md:pl-4">
                    <h3 className="max-md:text-center text-currColor uppercase font-[900] text-[20px] md:text-2xl">who we are</h3>
                    <p className="mt-2 text-[#215546]  font-bold text-justify md:text-[18px] max-md:text-center"> At GAIA, we are more
                        than just a supplier—we are a strategic partner committed to excellence across every stage of your operations.</p>
                    <ul className="mt-2 list-disc pl-4 text-[#215546]  text-justify">
                        {data.map((item, i) => (
                            <li key={i}>
                                <p className="font-bold">{item.title}</p>
                                <span>{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-[52%] order-1 max-md:mt-8">
                    <img src="/public/assets/img/whoare.jpg" className="h-[80vh] w-full rounded-3xl md:rounded-4xl object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}