import { useEffect, useRef, useState } from "react";

export function Moving() {
    const imgArr1 = ["move1", "move2", "move3", "move4", "move5"];
    const imgArr2 = ["move1", "move2", "move4", "move5", "move3"];
    const boxRef = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollX1, setScrollX1] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollX(-window.scrollY / 7);
            setScrollX1(window.scrollY / 7);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="mt-12 overflow-x-hidden">
            <div ref={boxRef} style={{ transform: `translateX(${scrollX}px)`, }} className="flex w-[120%] gap-4 md:gap-6 translate-x-[150px] mini:translate-x-[400px] md:translate-x-[150px] lg:translate-x-[50px]">
                {imgArr1.map((item, index) => (
                    <div key={index} className="min-w-[150px] w-[25%]">
                        <img src={`/assets/img/${item}.jpg`} alt={`photo-${index}`} className="hover:scale-[.98] transition-all duration-300 cursor-pointer rounded-[8px] w-full h-full lg:h-[400px]" />
                    </div>
                ))}
            </div>
            <div ref={boxRef} style={{ transform: `translateX(${scrollX1}px)`, }} className="w-[120%] flex mt-4 md:mt-6 gap-4 md:gap-6 translate-x-[-500px] mini:translate-x-[-650px] md:translate-x-[-350px]">
                {imgArr2.reverse().map((item, index) => (
                    <div key={index} className="min-w-[150px] w-[25%]">
                        <img src={`/assets/img/${item}.jpg`} alt={`photo-${index}`} className="hover:scale-[.98] transition-all duration-300 cursor-pointer rounded-[8px] w-full h-full lg:h-[400px]" />
                    </div>
                ))}
            </div>
        </div>
    )
}
