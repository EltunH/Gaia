import { useEffect, useRef } from 'react';

export function About() {
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
        <section ref={saRef} style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 pb-8 pt-10 md:pt-[80px] opacity-0 transition-all duration-600 ease-in-out">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-center text-currColor uppercase text-[24px] mini:text-[28px] md:text-[40px] font-[900]">About Us</h2>
                <p className="text-currColor font-medium text-[16px] md:text-[18px] mt-4">
                    At Gaia, we're building elegant digital experiences for over 6,820 clients
                    — from web development to unique digital solutions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                <div className="text-center">
                    <div className='bg-[#eee] rounded-2xl hover:scale-[0.98] shadow-[0_0_15px_black] p-2 mb-8 transition-all duration-300'>
                        <img src="/public/assets/img/quyu.webp" className="mx-auto h-[50vh] md:h-[350px] w-full object-cover rounded-2xl" />
                    </div>
                    <p className="text-currColor">
                        GAIA represents some of the world’s finest Brands in the region and provides a
                        “One Stop Shop” solution in terms of Mechanical, Electrical, Instrumentation ,Civil,
                        Automation, Pipeline, and Safety Supplies for the Oil & Gas and associated industries
                    </p>
                </div>
                <div className="text-center">
                    <div className='bg-[#eee] rounded-2xl hover:scale-[0.98] shadow-[0_0_15px_black] p-2 mb-8 transition-all duration-300'>
                        <img src="/public/assets/img/quyu.webp" className="mx-auto h-[50vh] md:h-[350px] w-full object-cover rounded-2xl" />
                    </div>
                    <p className="text-currColor">
                        GAIA established in 2021 in Azerbaijan with team of professionals to cater to Caspian region.
                        Dedicated professionals to serve our clients
                    </p>
                </div>
                <div className="text-center">
                    <div className='bg-[#eee] rounded-2xl hover:scale-[0.98] shadow-[0_0_15px_black] p-2 mb-8 transition-all duration-300'>
                        <img src="/public/assets/img/quyu.webp" className="mx-auto h-[50vh] md:h-[350px] w-full object-cover rounded-2xl" />
                    </div>
                    <p className="text-currColor">
                        GAIA strength is our longstanding local presence in the C.Asian markets and understanding
                        of local business customs and practises. GAIA – The Right Partner – Information Management –
                        Delivery of Product & Services – Service Backup – Relationship Management
                    </p>
                </div>
            </div>
        </section >

    )
}