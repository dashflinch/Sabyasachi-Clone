import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import i19 from "../assets/Images & Videos 3/i19.webp";
import i20 from "../assets/Images & Videos 3/i20.jpg";
import i21 from "../assets/Images & Videos 3/i21.webp";
import i22 from "../assets/Images & Videos 3/i22.jpg";
import i23 from "../assets/Images & Videos 3/i23.webp";
import i24 from "../assets/Images & Videos 3/i24.jpg";
import i25 from "../assets/Images & Videos 3/i25.jpg";
import i26 from "../assets/Images & Videos 3/i26.jpg";
import i27 from "../assets/Images & Videos 3/i27.jpg";
import i28 from "../assets/Images & Videos 3/i28.jpg";
import i29 from "../assets/Images & Videos 3/i29.jpg";
import i30 from "../assets/Images & Videos 3/i30.jpg";
import i31 from "../assets/Images & Videos 3/i31.jpg";
import i32 from "../assets/Images & Videos 3/i32.webp";
import i33 from "../assets/Images & Videos 3/i33.jpg";
import i34 from "../assets/Images & Videos 3/i34.jpg";
import i35 from "../assets/Images & Videos 3/i35.jpg";
import i36 from "../assets/Images & Videos 3/i36.jpg";
import i37 from "../assets/Images & Videos 3/i37.jpg";
import i38 from "../assets/Images & Videos 3/i38.jpg";
import i39 from "../assets/Images & Videos 3/i39.jpg";
import i40 from "../assets/Images & Videos 3/i40.jpg";
import i41 from "../assets/Images & Videos 3/i41.webp";
import i42 from "../assets/Images & Videos 3/i42.jpg";
import i43 from "../assets/Images & Videos 3/i43.jpg";
import e5comp from "../assets/videos3/e5comp.mp4";
import leopard from "../assets/Images & Videos/leopard.png";


const Love_Wanderlust_Curiosity = () => {
    return (
        <div>
            {/*WEDDINGS*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={i19} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">LOVE. WANDERLUST. CURIOSITY</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Fine resort wear made with Japanese cotton, Indian silks, recycled nylon and handwashed denim. Detailed with artisanal heritage embroideries and original prints created by The Sabyasachi Art Foundation. With a new repertoire of Fine and High Jewellery, and leather accessories from the house of Sabyasachi.
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*video*/}
            <div className='flex justify-center items-center'>
                <video
                    className=" w-1/3 object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={e5comp} type="video/mp4" />
                    browser does not support the video
                </video>
            </div>

            {/*2 image*/}
            <div className=' flex justify-center items-center p-10 gap-x-2'>
                <div>
                    <img src={i20} alt="ring" className="object-contain " />
                </div>
                <div>
                    <img src={i21} alt="ring" className="  object-contain " />
                </div>
            </div>

            {/* 2 image */}
            <div className="flex w-screen h-screen ">
                <div className="w-1/2 h-full">
                    <img src={i22} alt="ring" className="w-full h-full object-cover" />
                </div>

                <div className="w-1/2 flex flex-col justify-center items-center space-y-6 bg-white">
                    <img src={i23} alt="fashion" className="w-100 h-auto object-contain" />
                    <p className="text-sm tracking-[3px] uppercase text-gray-700">Fine Eyewear</p>
                    <h1 className="font-Alata text-3xl tracking-wide">THE TOLLY</h1>
                    <button className="border border-black bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-10'></div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i24}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={i25}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i26}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i27}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i28}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i29}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i30}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i31}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className=' object-contain' src={i32} alt="image" />
            </div>

            <div className='bg-white pb-10'></div>

            {/* 3 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <img className="p-4 w-1/3 object-contain" src={i33} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={i34} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={i35} alt="fashion" />
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Signature Sabyasachi saris in satin and chiffon, featuring prints created by The Sabyasachi Art Foundation. The prints are digital renderings of original hand painted artwork, celebrating vintage tropical flora.
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <img src={i36} alt="earings" className='w-1/3 h-auto object-cover' />
            </div>

            <div className='bg-white p-10'></div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i37}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={i38}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i39}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i40}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i41}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i42}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i43}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>
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

export default Love_Wanderlust_Curiosity
