import { useEffect, useRef } from "react";

export function Achievements() {
    const saRef = useRef(null);
    const numberRefs = useRef([]);

    const countUp = (el, target) => {
        let count = 0;
        const speed = 150;
        const increment = target / speed;

        const update = () => {
            if (count < target) {
                count += increment;
                el.innerText = Math.ceil(count).toLocaleString();
                requestAnimationFrame(update);
            } else {
                el.innerText = target.toLocaleString();
            }
        };

        update();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (saRef.current && window.scrollY + window.innerHeight - 250 >= saRef.current.offsetTop) {
                saRef.current.style.opacity = 1;
                saRef.current.style.transform = "translateY(0)";

                numberRefs.current.forEach((ref) => {
                    const target = +ref.dataset.target;
                    countUp(ref, target);
                });

                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={saRef} style={{ transform: "translateY(50px)" }}
            className="max-w-[1240px] md:flex mx-auto max-mini:px-4 px-6 opacity-0 py-8 transition-all duration-600 ease-in-out">
            <div className="flex md:w-[50%]">
                <div className="w-[50%] md:border-r border-[#999]">
                    <p ref={(el) => (numberRefs.current[0] = el)} data-target="7532" className="text-[#3fb33d] text-[40px] text-center md:text-[45px] font-[600]">0</p>
                    <p className="uppercase text-[13px] text-center tracking-[2px] md:text-[15px]">Clients</p>
                </div>
                <div className="w-[50%] md:border-r border-[#999]">
                    <p ref={(el) => (numberRefs.current[1] = el)} data-target="5200" className="text-[#3fb33d] text-[40px] text-center md:text-[45px] font-[600]">0</p>
                    <p className="uppercase text-[13px] text-center tracking-[2px] md:text-[15px]">Projects</p>
                </div>
            </div>
            <div className="flex md:w-[50%]">
                <div className="w-[50%] md:border-r border-[#999]">
                    <p ref={(el) => (numberRefs.current[2] = el)} data-target="4259" className="text-[#3fb33d] text-[40px] text-center md:text-[45px] font-[600]">0</p>
                    <p className="uppercase text-[13px] text-center tracking-[2px] md:text-[15px]">Repairing</p>
                </div>
                <div className="w-[50%]">
                    <p ref={(el) => (numberRefs.current[3] = el)} data-target="2455" className="text-[#3fb33d] text-[40px] text-center md:text-[45px] font-[600]">0</p>
                    <p className="uppercase text-[13px] text-center tracking-[2px] md:text-[15px]">Awards</p>
                </div>
            </div>
        </section>
    );
}
