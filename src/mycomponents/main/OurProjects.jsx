import { useEffect, useRef } from "react";
import prjImg1 from "../../assets/prjImg1.jpg";
import prjImg2 from "../../assets/prjImg2.jpg";
import prjImg3 from "../../assets/prjImg3.jpg";
import prjImg4 from "../../assets/prjImg4.jpg";
import prjImg5 from "../../assets/prjImg5.jpg";
import prjImg6 from "../../assets/prjImg6.jpg";

export function OurProjects() {
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
        <section ref={saRef} style={{ transform: 'translateY(50px)' }} className="pt-10 md:pt-[80px] opacity-0 pb-8 transition-all duration-600 ease-in-out">
            <div className="max-w-[1240px] mx-auto max-mini:px-4 px-6">
                <h2 className="text-center text-[#063936] mb-8 uppercase text-[24px] mini:text-[28px] md:text-[40px] font-[900]">Our Recent Projects</h2>
                <h4 className="text-center text-[#063936] uppercase font-[900] mx-auto max-w-[800px] text-[18px] md:text-[20px]">
                    You can use these sections to highlight the features of heading. Use these paragraphs to focus on the topic you want. Make sure you keep it short and attractive.
                </h4>
            </div>
            <div className="lg:flex mt-10">
                <div className="lg:w-[50%]">
                    <img src={prjImg1} className="object-cover h-full w-full" alt="photo" />
                </div>
                <div className="lg:w-[50%] md:flex">
                    <div className="md:w-[50%]">
                        <img src={prjImg2} className="object-cover h-full w-full" alt="photo" />
                    </div>
                    <div className="md:w-[50%]">
                        <img src={prjImg3} className="object-cover h-full w-full" alt="photo" />
                    </div>
                </div>
            </div>
            <div className="lg:flex">
                <div className="md:flex lg:w-[50%]">
                    <div className="md:w-[50%]">
                        <img src={prjImg4} className="object-cover h-full w-full" alt="photo" />
                    </div>
                    <div className="md:w-[50%]">
                        <img src={prjImg5} className="object-cover h-full w-full" alt="photo" />
                    </div>
                </div>
                <div className="lg:w-[50%]">
                    <img src={prjImg6} className="object-cover h-full w-full" alt="photo" />
                </div>
            </div>
        </section>
    )
}