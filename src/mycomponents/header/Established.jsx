import { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Moving } from "./Moving";

export function Established() {
    const saRef = useRef(null);

    const data = [
        {   
            id:'gaia',
            title: 'Gaia Azerbaijan',
            imgUrl: 'gaia.png',
            description: 'Powering progress with precision. From oil & gas to construction and safety, Gaia delivers smart industrial solutions with global standards and local expertise — your one-stop partner for engineering, inspection, and innovation.',
            link: ''
        },
        {   
            id:'voyage',
            title: 'Gaia Voyage',
            imgUrl: 'gaia_voyage.png',
            description: 'Offers tailor-made tours and premium travel services across Azerbaijan. From cultural escapes to luxury experiences, we deliver personalized, seamless journeys filled with adventure, comfort, and local authenticity.',
            link: 'https://gaiavoyagebaku.com/en'
        },
        {   
            id:'health',
            title: 'Gaia Health',
            imgUrl: 'gaia_health.jpg',
            description: 'Is a nature-based wellness concept offering herbal detox, ancestral healing, and energy-balancing therapies in Azerbaijan. We use no machines or chemicals — only traditional wisdom, breathwork, and natural spaces.',
            link: ''
        },
        {   
            id:'eleven',
            title: 'Ten Eleven Baku',
            imgUrl: 'tenEleven.webp',
            description: 'Feel the rhythm of Baku nights! Colorful cocktails, live music, and an unforgettable atmosphere — where freedom, flavor, and rhythm come together in one vibrant bar and lounge.',
            link: 'https://www.instagram.com/tenelevenbaku/'
        },
        {   
            id:'live',
            title: 'Nine Lives',
            imgUrl: 'nine_lives.jpg',
            description: 'It’s good however I feel, we should have sections of hospitality ( Gaia voyage - Ten11/9 lives and event management), then Oil and Gas ( Gaia.az and Gaia Hazar ), then Health, Auto and Logistics',
            link: 'https://www.instagram.com/ninelivesbaku/'
        }
    ]
    const path = '/assets/img/'

    useEffect(() => {
        if (saRef.current) {
            saRef.current.style.opacity = 1;
            saRef.current.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <div ref={saRef} style={{ transform: 'translateY(50px)' }}
            className="opacity-0 transition-all duration-600 ease-in-out">
            <div className="max-w-[1240px] relative mx-auto pt-[20px] max-mini:px-4 px-6">
                <h1 className="text-[#fff7e1] leading-[1.115em] text-center text-[35px] md:text-[56px] lmd:text-[64px] font-[900] uppercase mb-4">Gaia holding</h1>


                <div className="flex justify-center flex-wrap gap-x-4 gap-y-8 py-6">
                    {data.map((item, i) => (
                        <article key={i} className="md:w-[45%] rounded-2xl overflow-hidden bg-[#e0e1cc] lg:w-[30%] flex flex-col">
                            <span className="bg-[#fffffe] overflow-hidden">
                                <img alt={item.title} className={`${item.id == 'health' ? 'scale-[1.3]' : ''} w-full object-cover md:aspect-square`} src={path + item.imgUrl} />
                            </span>
                            <div className="flex flex-col flex-1 p-6">
                                <h3 className="flex-1 text-currColor pb-2 text-lg font-semibold leading-snug">{item.title}</h3>
                                <span className="text-[13px] text-currColor">{item.description.slice(0, 165)}...</span>
                                {
                                    item.link ?
                                        <a href={item.link} target="_blank" className="bg-currColor max-w-[300px] w-full mx-auto text-center rounded-2xl py-[6px] mt-3 text-[#e0e1cc] hover:scale-[.94] transition-all duration-300">Visit</a> :
                                        <a className="bg-currColor max-w-[300px] w-full mx-auto cursor-pointer text-center rounded-2xl py-[6px] mt-3 text-[#e0e1cc] hover:scale-[.94] transition-all duration-300">{item.title == 'Gaia Azerbaijan' ? 'Visit' : 'Soon...'}</a>
                                }
                            </div>
                        </article>
                    ))}
                </div>



                <div className="mt-10">
                    <h2 className="text-[#fff7e1] leading-[1.115em] text-center text-[25px] md:text-[40px] mb-2 lmd:text-[48px] font-[900] uppercase">GAIA Established in 2021 <br className="max-[450px]:hidden" /> in Azerbaijan</h2>
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