import React from 'react'
import img9 from "../assets/Images & Videos/img9.webp";
import sab4 from "../assets/videos1/sab4.mp4";
import sab5mp4 from "../assets/videos5/sab5mp4.mp4";
import sab6 from "../assets/videos5/sab6.mp4";
import leopard from "../assets/Images & Videos/leopard.png";
import img10 from "../assets/Images & Videos/img10.jpg";
import img11 from "../assets/Images & Videos/img11.webp";
import img12 from "../assets/Images & Videos/img12.webp";
import img13 from "../assets/Images & Videos/img13.webp";
import img14 from "../assets/Images & Videos/img14.webp";
import img15 from "../assets/Images & Videos/img15.webp";
import img16 from "../assets/Images & Videos/img16.webp";
import img17 from "../assets/Images & Videos/img17.webp";
import img18 from "../assets/Images & Videos/img18.webp";
import img19 from "../assets/Images & Videos/img19.webp";
import img20 from "../assets/Images & Videos/img20.webp";
import img21 from "../assets/Images & Videos/img21.webp";
import img22 from "../assets/Images & Videos/img22.webp";
import img23 from "../assets/Images & Videos/img23webp.webp";
import img24 from "../assets/Images & Videos/img24.webp";
import img25 from "../assets/Images & Videos/img25.webp";
import img26 from "../assets/Images & Videos/img26.webp";
import img27 from "../assets/Images & Videos/img27.webp";
import img28 from "../assets/Images & Videos/img28.webp";




const Sabyasachi_At_Harrods = () => {
    return (
        <div>
        
            {/*SABYASACHI AT HARRODS*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={img9} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">SABYASACHI AT HARRODS</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “I am honoured to present Sabyasachi High Jewellery at Harrods in London, the epicentre of taste and sophistication which showcases the pinnacle of the world’s finery. This residency will bring the best of Indian craftsmanship and design to the unparalleled, global clients of Harrods. Together we will delight the senses of the world’s most discerning and uncompromising customers.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*video*/}
            <div className='flex justify-center items-center'>
                <video
                    className=" object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={sab4} type="video/mp4" />
                    browser does not support the video
                </video>
            </div>

            <div className='bg-white p-13'></div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img10}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={img11}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img12}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img13}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img14}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img15}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img16}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img17}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 9 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img18}
                        alt="Image 9"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 10 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img19}
                        alt="Image 10"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 11 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img20}
                        alt="Image 11"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 12 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img21}
                        alt="Image 12"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 13 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img22}
                        alt="Image 13"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 14 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img23}
                        alt="Image 14"
                        className="h-full object-contain"
                    />
                </section>

                {/* Section 15 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <video
                        className=" h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={sab5mp4} type="video/mp4" />
                        browser does not support the video
                    </video>
                </section>
            </div>

            {/*image+video*/}
            <div className='flex justify-center items-center '>
                <div>
                    <img src={img24} alt="ring" className="w-1/2 object-contain " />
                </div>
                <div>
                    <video
                        className="w-3xl object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={sab6} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
            </div>

            <div>
                <img src={img25} alt="image" />
            </div>

            <div className='bg-white p-13'></div>
            <img src={img26} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center '>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Earrings crafted in 18k gold with tourmaline, garnet, opal, tanzanite and brilliant cut EF VVS VS diamonds.
                </div>
                <h1 className='font-Alata text-2xl pb-7 '> HIGH JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='bg-white p-13'></div>
            <img src={img27} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center '>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Necklace crafted in 18k gold with tourmaline, aquamarine, old mine cut and brilliant cut EF VVS VS diamonds.
                </div>
            </div>

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

export default Sabyasachi_At_Harrods
