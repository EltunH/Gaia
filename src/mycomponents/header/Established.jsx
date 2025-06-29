import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Moving } from "./Moving";

export function Established() {
    const saRef = useRef(null);

    useEffect(() => {
        if (saRef.current) {
            saRef.current.style.opacity = 1;
            saRef.current.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <div ref={saRef} style={{ transform: 'translateY(50px)' }}
            className="opacity-0 transition-all duration-600 ease-in-out">
            <div className="max-w-[1240px] relative mx-auto pt-[48px] md:pt-[56px] max-mini:px-4 px-6">
                <div className="relative">
                    <div className=" max-md:flex text-[#fff7e1] md:text-[18px] max-md:pb-5 justify-between md:absolute right-0 top-0">
                        <div className="max-md:w-[50%] max-md:items-center flex flex-col gap-y-2">
                            <a href="https://www.instagram.com/mr_racabov/" target="_blank" className="hover:text-[#3fb33d] hover:scale-[.96] transition-all duration-300">Link</a>
                            <a href="https://www.instagram.com/mr_racabov/" target="_blank" className="hover:text-[#3fb33d] hover:scale-[.96] transition-all duration-300">Link</a>
                        </div>
                        <div className="max-md:w-[50%] max-md:items-center flex flex-col gap-y-2 md:mt-2">
                            <a href="https://www.instagram.com/mr_racabov/" target="_blank" className="hover:text-[#3fb33d] hover:scale-[.96] transition-all duration-300">Link</a>
                            <a href="https://www.instagram.com/mr_racabov/" target="_blank" className="hover:text-[#3fb33d] hover:scale-[.96] transition-all duration-300">Link</a>
                        </div>
                    </div>
                    <h1 className="text-[#fff7e1] leading-[1.115em] md:pr-4 smd:pr-0 text-center text-[30px] md:text-[48px] mb-2 lmd:text-[56px] font-[900] uppercase">GAIA Established in 2021 <br className="max-[450px]:hidden" /> in Azerbaijan</h1>
                    <p className="text-[#e0e1cc] text-center text-[16px] md:text-[18px] font-medium">Our goal then and now is to provide quality on time projects</p>
                </div>
                <div className="grid place-items-center mt-4 md:mt-6">
                    <a href="tel:+994555555555" className="uppercase h-[57px] group gap-4 flex items-center cursor-pointer hover:scale-[.95] pl-4 pr-2 rounded-full text-[14px] font-[900] bg-[#3fb33d] text-currColor max-lmd:mr-4 transition-all duration-300">
                        <span className="text-nowrap">Send request</span>
                        <div className="w-[40px] h-[40px] group-hover:bg-[#0f623a] text-white group-hover:rotate-[-45deg] group-hover:scale-[.95] rounded-full grid place-items-center bg-currColor transition-all duration-300">
                            <FiArrowRight />
                        </div>
                    </a>
                </div>
            </div>
            <Moving />
        </div>
    )
}