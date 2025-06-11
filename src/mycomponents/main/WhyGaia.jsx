import { useEffect, useRef } from "react";
import { FaRegKeyboard, FaRegLemon, FaRegLightbulb, FaRegMap } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { PiTelegramLogoDuotone } from "react-icons/pi";

export function WhyGaia() {
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
        <section id="why-gaia" ref={saRef} style={{ transform: 'translateY(50px)' }} className="bg-white pt-10 md:pt-[80px] opacity-0 pb-8 transition-all duration-600 ease-in-out">
            <h2 className="text-center text-[#063936] mb-8 uppercase text-[24px] mini:text-[28px] md:text-[32px] font-[900]">Why gaia ?</h2>
            <div className="md:flex">
                <div className="md:w-[33%] max-md:py-[30px] md:p-[0_15px_15px_0] lg:p-[30px_45px_30px_0]">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-[#3fb33d] max-md:mx-auto rounded-full grid place-items-center">
                        <FaRegLightbulb className="text-[#3fb33d] lg:text-[25px]" />
                    </div>
                    <p className="font-[600] capitalize text-prmColor mt-2 max-md:text-center">Established presence on the ground in Central Asia</p>
                </div>
                <div className="md:w-[33%] max-md:py-[30px] md:p-[0_15px_15px_0] lg:p-[30px_45px_30px_0]">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-[#3fb33d] max-md:mx-auto rounded-full grid place-items-center">
                        <PiTelegramLogoDuotone className="text-[#3fb33d] lg:text-[25px]" />
                    </div>
                    <p className="font-[600] capitalize text-prmColor mt-2 max-md:text-center">Understanding of local Business Customs and Culture</p>
                </div>
                <div className="md:w-[33%] max-md:py-[30px] md:p-[0_15px_15px_0] lg:p-[30px_45px_30px_0]">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-[#3fb33d] max-md:mx-auto rounded-full grid place-items-center">
                        <FaRegKeyboard className="text-[#3fb33d] lg:text-[25px] text-[18px]" />
                    </div>
                    <p className="font-[600] capitalize text-prmColor mt-2 max-md:text-center">Proven Track Record in Delivery of Product & Services</p>
                </div>
            </div>
            <div className="md:flex md:pt-[25px]">
                <div className="md:w-[33%] max-md:py-[30px] md:p-[0_15px_15px_0] lg:p-[30px_45px_30px_0]">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-[#3fb33d] rounded-full max-md:mx-auto grid place-items-center">
                        <FaRegMap className="text-[#3fb33d] lg:text-[25px]" />
                    </div>
                    <p className="font-[600] capitalize text-prmColor max-md:text-center mt-2">Established Relationships</p>
                </div>
                <div className="md:w-[33%] max-md:py-[30px] md:p-[0_15px_15px_0] lg:p-[30px_45px_30px_0]">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-[#3fb33d] rounded-full max-md:mx-auto grid place-items-center">
                        <MdOutlinePhotoSizeSelectActual className="text-[#3fb33d] lg:text-[25px]" />
                    </div>
                    <p className="font-[600] capitalize text-prmColor max-md:text-center mt-2">Local custom cleared deliveries and payments in local currencies</p>
                </div>
                <div className="md:w-[33%] max-md:py-[30px] md:p-[0_15px_15px_0] lg:p-[30px_45px_30px_0]">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-[#3fb33d] rounded-full max-md:mx-auto grid place-items-center">
                        <FaRegLemon className="text-[#3fb33d] lg:text-[25px]" />
                    </div>
                    <p className="font-[600] capitalize text-prmColor max-md:text-center mt-2">Proactive Information Management & Relationship Management at all levels</p>
                </div>
            </div>
            <h2 className="mt-[50px] leading-[1.115em] capitalize text-prmColor text-center font-[600] text-[28px] md:text-[32px]">Investing in HR capital – one of the key drivers of GAIA success in the region</h2>
        </section>
    )
}