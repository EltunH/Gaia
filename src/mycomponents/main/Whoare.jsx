import { useEffect, useRef } from "react";
import whoareImg from "../../assets/whoare.jpg";

export function Whoare() {
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
            style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 opacity-0 py-8 transition-all duration-600 ease-in-out">
            <div className="md:flex gap-x-8 items-center">
                <div className="md:w-[48%] md:order-[2] md:pl-4">
                    <h3 className="max-md:text-center text-currColor uppercase font-[900] text-[20px] md:text-2xl">who we are</h3>
                    <p className="mt-2 text-[#215546] md:max-w-[500px] font-bold md:text-[20px] max-md:text-center"> The Right Partner – Information Management – Delivery of Product & Services –
                        Service Backup – Relationship Management</p>
                </div>
                <div className="md:w-[52%] order-1 max-md:mt-8">
                    <img src={whoareImg} className="h-[80vh] w-full rounded-3xl md:rounded-4xl object-cover" alt="industry" />
                </div>
            </div>
        </section>
    )
}