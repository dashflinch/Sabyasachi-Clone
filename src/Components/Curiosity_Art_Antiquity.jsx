import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import im63 from "../assets/Images & Videos 2/im63.webp";
import m64 from "../assets/Images & Videos 2/m64.webp";
import m65 from "../assets/Images & Videos 2/m65.webp";
import m66 from "../assets/Images & Videos 2/m66.jpg";
import m67 from "../assets/Images & Videos 2/m67.jpg";
import m68 from "../assets/Images & Videos 2/m68.webp";
import m69 from "../assets/Images & Videos 2/m69.jpg";
import m70 from "../assets/Images & Videos 2/m70.webp";
import m71 from "../assets/Images & Videos 2/m71.webp";
import m72 from "../assets/Images & Videos 2/m72.webp";
import m73 from "../assets/Images & Videos 2/m73.webp";
import m74 from "../assets/Images & Videos 2/m74.webp";
import m75 from "../assets/Images & Videos 2/m75.jpg";
import m76 from "../assets/Images & Videos 2/m76.jpg";
import m77 from "../assets/Images & Videos 2/m77.webp";
import m78 from "../assets/Images & Videos 2/m78.jpg";
import m79 from "../assets/Images & Videos 2/m79.webp";
import m80 from "../assets/Images & Videos 2/m80.webp";
import m81 from "../assets/Images & Videos 2/m81.webp";
import m82 from "../assets/Images & Videos 2/m82.jpg";
import m83 from "../assets/Images & Videos 2/m83.webp";
import m84 from "../assets/Images & Videos 2/m84.jpg";
import m85 from "../assets/Images & Videos 2/m85.jpg";
import m86 from "../assets/Images & Videos 2/m86.webp";
import m87 from "../assets/Images & Videos 2/m87.webp";
import m88 from "../assets/Images & Videos 2/m88.jpg";
import m89 from "../assets/Images & Videos 2/m89.webp";
import v5 from "../assets/videos2/v5.mov";
import v6 from "../assets/videos2/v6.mov";
import v7 from "../assets/videos2/v7.mov";
import leopard from "../assets/Images & Videos/leopard.png";



const Curiosity_Art_Antiquity = () => {
    return (
        <div>
            {/*THE CURIOSITY, ART & ANTIQUITY*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={im63} alt="BRIDAL COUTURE 2025" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-20  font-Alata">THE CURIOSITY, ART & ANTIQUITY</h1>
                    <h1 className="text-3xl mb-20  font-Alata">PROJECT</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    At Sabyasachi, we believe there is nothing superior to tradition and indigenous craftsmanship- a belief that is reflected in every garment and every piece of jewellery that emerges from our atelier.
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6  sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Sabyasachi Couture currently employs, directly or indirectly, over 3900 artisans; many of whom are master weavers, dyers and printers who have won numerous textile awards. The vision of the brand is to create sustainable luxury with a focus on what are certainly the most splendid textile and handicraft legacies in the world.
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    In an attempt to preserve and showcase the intrinsic artistry of these crafts and textiles, the house of Sabyasachi introduces The Curiosity, Art & Antiquity Project. The project is an active step towards sustainable luxury and makes use of the rarest of rare materials and techniques; some of which are on the brink of extinction. We believe that our endeavour in promoting sustainable luxury will play a promising role in supporting the fragile eco-system of Indian textiles while simultaneously promoting crafts and techniques that are slowly becoming obsolete.
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    The textile clusters that Sabyasachi supports are based out of West Bengal, Assam, Bihar, Orissa, Uttar Pradesh, Gujarat, Rajasthan, Madhya Pradesh, Andhra Pradesh, Tamil Nadu, Karnataka, Punjab and Kashmir.
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Owning this garment makes you an inextricable part of our mission to protect, revive and uplift the rich heritage of Indian textiles and crafts.
                </div>
                <div className='bg-white p-1'></div>

                <img className="max-w-[80px] mx-auto h-auto pt-5 pb-5" src={leopard} alt="leopard" />
            </div>

            <div className='bg-white p-10'></div>

            {/*image+video*/}
            <div className='flex justify-center items-center '>
                <div>
                    <img src={m64} alt="ring" className="p-4 w-1/2 h-1/2 object-contain " />
                </div>
                <div>
                    <video
                        className="p-4 h-1/2 object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={v5} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
            </div>

            <div className='bg-white p-13'></div>
            <img src={m65} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pb-7 '> HIGH JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m66}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={m67}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m68}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m69}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m70}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m71}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m72}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m73}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 9 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m74}
                        alt="Image 9"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 10 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m75}
                        alt="Image 10"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 11 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m76}
                        alt="Image 11"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 12 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m77}
                        alt="Image 12"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 13*/}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m78}
                        alt="Image 13"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 14 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m79}
                        alt="Image 14"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 15*/}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m80}
                        alt="Image 15"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 16*/}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m81}
                        alt="Image 16"
                        className=" h-full object-contain"
                    />
                </section>
            </div>

            {/*video*/}
            <div className='flex justify-center items-center'>
                <video
                    className=" pt-13 object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={v6} type="video/mp4" />
                    browser does not support the video
                </video>
            </div>

            <div className='bg-white p-13'></div>
            <div className="flex justify-center">
                <img src={m82} alt="earings" className="w-1/2 h-auto object-cover" />
            </div>

            <div className='bg-white p-13'></div>
            <img src={m83} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center '>
                <h1 className='font-Alata text-2xl pb-7 '> HIGH JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/* 3 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <img className="p-4 w-1/3 object-contain" src={m84} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={m85} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={m86} alt="fashion" />
            </div>

            <div className='bg-white p-13'></div>
            <img src={m87} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center '>
                <h1 className='font-Alata text-2xl pb-3 '> ACCESSORIES</h1>
                <div className='bg-white px-6 py-2 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    THE ROYAL BENGAL MINAUDIÈRE
                </div>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*image+video*/}
            <div className="pt-13 flex h-screen">
                <div className="w-1/2 flex justify-center items-center">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={v7} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <img src={m88} alt="ring" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className='bg-white p-13'></div>

            <div>
                <img src={m89} alt="image" />
            </div>

            <div className='bg-white p-10'></div>

            {/*FIND A STORE*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img28} alt="ART OF RETAIL" />

                <div className="absolute w-full h-full bg-black/40"></div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-7  font-Alata">FIND A STORE</h1>
                    <p className='font-Alata pb-5'>Book an appointment to discover more in our boutiques</p>
                    <button className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

        </div>
    )
}

export default Curiosity_Art_Antiquity
