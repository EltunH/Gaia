import { useEffect, useRef, useState } from "react";
import move1 from '../../assets/move1.jpg';
import move2 from '../../assets/move2.jpg';
import move3 from '../../assets/move3.jpg';
import move4 from '../../assets/move4.jpg';
import move5 from '../../assets/move5.jpg';
import move6 from '../../assets/move6.jpg';

export function Moving() {
    const imgArr1 = [move1, move2, move3, move4, move5, move6];
    const imgArr2 = [move1, move2, move6, move4, move5, move3];
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
            <div ref={boxRef} style={{ transform: `translateX(${scrollX}px)`, }} className="flex gap-4 md:gap-6 translate-x-[-50px]">
                {imgArr1.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`photo-${index}`} className="hover:scale-[.98] transition-all duration-300 cursor-pointer rounded-[8px] min-w-[150px] h-[144px] mini:min-w-[200px] mini:h-[192px] md:min-w-[240px] md:h-[226px] lg:min-w-[340px] lg:h-[321px]" />
                    </div>
                ))}
            </div>
            <div ref={boxRef} style={{ transform: `translateX(${scrollX1}px)`, }} className="flex mt-4 md:mt-6 gap-4 md:gap-6 translate-x-[-100px] mini:translate-x-[-150px] md:translate-x-[-200px]">
                {imgArr2.reverse().map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`photo-${index}`} className="hover:scale-[.98] transition-all duration-300 cursor-pointer rounded-[8px] min-w-[150px] h-[144px] mini:min-w-[200px] mini:h-[192px] md:min-w-[240px] md:h-[226px] lg:min-w-[340px] lg:h-[321px]" />
                    </div>
                ))}
            </div>
        </div>
    )
}
