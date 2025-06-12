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
        <section id="why-gaia" ref={saRef} style={{ transform: 'translateY(50px)' }} className="max-w-[1240px] mx-auto max-mini:px-4 px-6 pt-10 md:pt-[80px] opacity-0 pb-8 transition-all duration-600 ease-in-out">
            <h2 className="text-center text-[#063936] mb-8 uppercase text-[24px] mini:text-[28px] md:text-[40px] font-[900]">Why gaia ?</h2>
            <div className="flex max-md:flex-col gap-[15px]">
                <div className="md:w-[33%] md:min-h-[210px] hover:scale-[0.98] rounded-2xl bg-prmColor max-md:p-[30px_15px] md:p-[30px_15px] transition-all duration-300">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-white max-md:mx-auto rounded-full grid place-items-center">
                        <FaRegLightbulb className="text-white lg:text-[25px]" />
                    </div>
                    <p className="font-[600] text-[20px] capitalize text-white mt-2 max-md:text-center">Established presence on the ground in Central Asia</p>
                </div>
                <div className="md:w-[33%] md:min-h-[210px] hover:scale-[0.98] rounded-2xl bg-prmColor max-md:p-[30px_15px] md:p-[30px_15px] transition-all duration-300">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-white max-md:mx-auto rounded-full grid place-items-center">
                        <PiTelegramLogoDuotone className="text-white lg:text-[25px]" />
                    </div>
                    <p className="font-[600] text-[20px] capitalize text-white mt-2 max-md:text-center">Understanding of local Business Customs and Culture</p>
                </div>
                <div className="md:w-[33%] md:min-h-[210px] hover:scale-[0.98] rounded-2xl bg-prmColor max-md:p-[30px_15px] md:p-[30px_15px] transition-all duration-300">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-white max-md:mx-auto rounded-full grid place-items-center">
                        <FaRegKeyboard className="text-white lg:text-[25px] text-[18px]" />
                    </div>
                    <p className="font-[600] text-[20px] capitalize text-white mt-2 max-md:text-center">Proven Track Record in Delivery of Product & Services</p>
                </div>
            </div>
            <div className="flex max-md:flex-col gap-[15px] pt-[15px] md:pt-[25px]">
                <div className="md:w-[33%] md:min-h-[210px] hover:scale-[0.98] rounded-2xl bg-prmColor max-md:p-[30px_15px] md:p-[30px_15px] transition-all duration-300">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full max-md:mx-auto grid place-items-center">
                        <FaRegMap className="text-white lg:text-[25px]" />
                    </div>
                    <p className="font-[600] text-[20px] capitalize text-white max-md:text-center mt-2">Established Relationships</p>
                </div>
                <div className="md:w-[33%] md:min-h-[210px] hover:scale-[0.98] rounded-2xl bg-prmColor max-md:p-[30px_15px] md:p-[30px_15px] transition-all duration-300">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full max-md:mx-auto grid place-items-center">
                        <MdOutlinePhotoSizeSelectActual className="text-white lg:text-[25px]" />
                    </div>
                    <p className="font-[600] text-[20px] capitalize text-white max-md:text-center mt-2">Local custom cleared deliveries and payments in local currencies</p>
                </div>
                <div className="md:w-[33%] md:min-h-[210px] hover:scale-[0.98] rounded-2xl bg-prmColor max-md:p-[30px_15px] md:p-[30px_15px] transition-all duration-300">
                    <div className="w-[43px] h-[43px] lg:w-[52px] lg:h-[52px] border-2 border-white rounded-full max-md:mx-auto grid place-items-center">
                        <FaRegLemon className="text-white lg:text-[25px]" />
                    </div>
                    <p className="font-[600] text-[20px] capitalize text-white max-md:text-center mt-2">Proactive Information Management & Relationship Management at all levels</p>
                </div>
            </div>
            <h2 className="mt-[50px] leading-[1.115em] capitalize text-prmColor text-center font-[600] text-[22px] md:text-[32px]">Investing in HR capital – one of the key drivers of GAIA success in the region</h2>
        </section>
    )
}