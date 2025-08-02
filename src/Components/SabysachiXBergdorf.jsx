import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import m1 from "../assets/images4/m1.jpg";
import m2 from "../assets/images4/m2.jpg";
import m3 from "../assets/images4/m3.jpg";
import m4 from "../assets/images4/m4.jpg";
import m5 from "../assets/images4/m5.jpg";
import m6 from "../assets/images4/m6.jpg";
import m7 from "../assets/images4/m7.jpg";
import m8 from "../assets/images4/m8.jpg";
import m9 from "../assets/images4/m9.webp";
import m10 from "../assets/images4/m10.webp";
import m11 from "../assets/images4/m11.webp";
import m12 from "../assets/images4/m12.webp";
import img83 from "../assets/images5/img83.jpg";
import img84 from "../assets/images5/img84.jpg";
import img85 from "../assets/images5/img85.jpg";
import img87 from "../assets/Images & Videos/img87.webp";
import rab16 from "../assets/videos1/rab16.mp4";
import sab15 from "../assets/videos5/sab15.mp4";
import leopard from "../assets/Images & Videos/leopard.png";


const SabysachiXBergdorf = () => {
    return (
        <div>
            {/*SABYASACHI X BERGDORF GOODMAN*/}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={rab16} type="video/mp4" />
                    browser does not support the video
                </video>

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">SABYASACHI X BERGDORF GOODMAN</h1>
                </div>
            </section>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Bergdorf Goodman has been a key supporter and partner of our brand for many years. It is a privilege to now bring the entire world of Sabyasachi to a dedicated space encompassing clothing, accessories and jewelry. This presentation marks a special moment where the best of India meets New York’s finest emporium.”
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
                    <source src={sab15} type="video/mp4" />
                    browser does not support the video
                </video>
            </div>

            {/* 3 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <img className="p-4 w-1/3 object-contain" src={img83} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={img84} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={img85} alt="fashion" />
            </div>

            <div className='bg-white p-13'></div>
            <img src={img87} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pb-7 '> HIGH JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m1}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={m2}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m3}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m4}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m5}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m6}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m7}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={m8}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>
            </div>

            {/* 4 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <img className="p-4 w-1/4 object-contain" src={m9} alt="fashion" />
                <img className="p-4 w-1/4 object-contain" src={m10} alt="fashion" />
                <img className="p-4 w-1/4 object-contain" src={m11} alt="fashion" />
                <img className="p-4 w-1/4 object-contain" src={m12} alt="fashion" />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pb-7 '> ACCESSORIES</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
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

export default SabysachiXBergdorf
