import { RxHamburgerMenu } from "react-icons/rx";
import { FiArrowRight } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { Established } from "./Established";

export function Header() {
    const menuArr = [
        "Home page",
        "About us",
        "Services",
        "Products range",
        "Our clients",
        "Why gaia?",
        "Contact us"
    ]
    const [flag, setFlag] = useState(false);

    const saRef = useRef(null);

    useEffect(() => {
        if (saRef.current) saRef.current.style.opacity = 1;
    }, []);

    function chngFlag() {
        setFlag(!flag);
    }
    const handleMenuClick = (item) => {
        if (item.toLowerCase() == 'home page') return location.href = '/index.html';
        let targetId = '';
        switch (item.toLowerCase()) {
            case 'home page':
                targetId = 'home';
                break;
            case 'about us':
                targetId = 'about';
                break;
            case 'services':
                targetId = 'services';
                break;
            case 'products range':
                break;
            case 'our clients':
                targetId = 'clients';
                break;
            case 'why gaia?':
                targetId = 'why-gaia';
                break;
            case 'contact us':
                targetId = 'contact';
                break;
            default:
                return;
        }

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        if (flag) {
            setFlag(false);
        }
    };

    return (
        <header className="bg-currColor rounded-[0_0_24px_24px] md:rounded-[0_0_40px_40px] pb-12 md:pb-[120px] fontFamily">
            <nav ref={saRef}
                className="max-w-[1340px] mx-auto opacity-0 transition-all duration-600 ease-in-out">
                <div className="flex relative bg-currColor max-mini:px-4 px-6 lmd:pb-6 pt-6 z-50 items-center gap-2 justify-between">
                    <a href="/index.html">
                        <img src="/assets/img/Logo_Gaia.png" alt="logo" className="min-w-[100px] max-md:max-w-[100px] md:w-[120px] rounded-full" />
                    </a>
                    <div className="bg-white w-full max-xls:h-[63px] rounded-[200px] p-[8px_12px] flex gap-x-1 justify-end lmd:justify-between items-center">
                        <menu className="flex items-center tracking-[-1px] max-lmd:hidden gap-3 lg:gap-4 text-[12px] xlg:text-[13px] xsm:text-[16px] uppercase font-[900] text-currColor">
                            {menuArr.map((item, i) => (
                                <li key={i} onClick={() => handleMenuClick(item)} className="text-nowrap cursor-pointer hover:text-[#3fb33d] transition-all duration-300">{item}</li>
                            ))}
                        </menu>
                        <div className="flex items-center justify-between">
                            <a href="tel:+994555555555" className="uppercase text-[12px] xlg:text-[13px] h-[57px] max-xls:h-[47px] group gap-3 flex items-center max-md:hidden cursor-pointer hover:scale-[.95] pl-4 pr-2 rounded-full font-[900] bg-[#3fb33d] text-currColor max-lmd:mr-4 transition-all duration-300">
                                <span className="text-nowrap tracking-[-1px]">Support our case</span>
                                <div className="max-xls:w-[35px] max-xls:h-[35px] w-[40px] h-[40px] group-hover:bg-[#0f623a] text-white group-hover:rotate-[-45deg] group-hover:scale-[.95] rounded-full grid place-items-center bg-currColor transition-all duration-300">
                                    <FiArrowRight />
                                </div>
                            </a>
                            <div onClick={chngFlag} className={`${flag ? "bg-[#3fb33d]" : "bg-currColor"} w-[40px] h-[40px] md:w-[48px] md:h-[48px] lmd:hidden rounded-full grid place-items-center cursor-pointer hover:scale-[.95] hover:bg-[#3fb33d] transition-all duration-300`}>
                                {
                                    flag ? <IoCloseOutline className="text-white text-[25px] md:text-[28px]" /> :
                                        <RxHamburgerMenu className=" text-white text-[25px] md:text-[28px]" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-mini:px-4 px-6">
                    <div className={`relative ${flag ? 'top-0' : 'top-[-1000px]'} lmd:hidden transition-all z-10 duration-500 ease-in-out`}>
                        <div className="absolute w-full mt-6 p-[24px_24px_32px] bg-white rounded-2xl">
                            <menu className=" flex flex-col items-start gap-4 text-[16px] uppercase font-[900] text-currColor">
                                {menuArr.map((item, i) => (
                                    <li key={i} onClick={() => handleMenuClick(item)} className="text-nowrap cursor-pointer hover:text-[#3fb33d] transition-all duration-300">{item}</li>
                                ))}
                                <li>
                                    <a href="tel:+994555555555" className="uppercase h-[57px] group gap-4 flex items-center md:hidden cursor-pointer hover:scale-[.95] pl-4 pr-2 rounded-full text-[14px] font-[900] bg-[#3fb33d] text-currColor transition-all duration-300">
                                        <span className="text-nowrap">Support our case</span>
                                        <div className="w-[40px] h-[40px] group-hover:bg-[#0f623a] text-white group-hover:rotate-[-45deg] group-hover:scale-[.95] rounded-full grid place-items-center bg-currColor transition-all duration-300">
                                            <FiArrowRight />
                                        </div>
                                    </a>
                                </li>
                            </menu>
                        </div>
                    </div>
                </div>
            </nav>
            <Established flag={flag} />
        </header>
    )
}