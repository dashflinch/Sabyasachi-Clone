import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import img29 from "../assets/Images & Videos/img29.webp";
import img30 from "../assets/Images & Videos/img30.jpg";
import img31 from "../assets/Images & Videos/img31.jpg";
import img32 from "../assets/Images & Videos/img32.jpg";
import img33 from "../assets/Images & Videos/img33.jpg";
import img34 from "../assets/Images & Videos/img34.jpg";
import img35 from "../assets/Images & Videos/img35.jpg";
import img36 from "../assets/Images & Videos/img36.jpg";
import img37 from "../assets/Images & Videos/img37.jpg";
import img38 from "../assets/Images & Videos/img38.jpg";
import img39 from "../assets/Images & Videos/img39.jpg";
import img40 from "../assets/Images & Videos/img40.jpg";
import img41 from "../assets/Images & Videos/img41.webp";
import img42 from "../assets/Images & Videos/img42.webp";
import img43 from "../assets/Images & Videos/img43.webp";
import img44 from "../assets/Images & Videos/img44.webp";
import img45 from "../assets/Images & Videos/img45.webp";
import img46 from "../assets/Images & Videos/img46.webp";
import img47 from "../assets/Images & Videos/img47.webp";
import img48 from "../assets/Images & Videos/img48webp.webp";
import img49 from "../assets/Images & Videos/img49.webp";
import img50 from "../assets/images5/img50.webp";
import img51 from "../assets/images5/img51.webp";
import img52 from "../assets/images5/img52.webp";
import img53 from "../assets/images5/img53.webp";
import img55 from "../assets/images5/img55.webp";
import img56 from "../assets/images5/img56.webp";
import imh57 from "../assets/Images & Videos/imh57.webp";
import img58 from "../assets/images5/img58.webp";
import img59 from "../assets/images5/img59.webp";
import img60 from "../assets/images5/img60.webp";
import sab7 from "../assets/videos5/sab7.mp4";
import sab8 from "../assets/videos4/sab8.mp4";
import sab9 from "../assets/videos4/sab9.mp4";
import sab10 from "../assets/videos4/sab10.mp4";
import leopard from "../assets/Images & Videos/leopard.png";



const Years_Of_Sabyasachi = () => {
    return (
        <div>

            {/*25 Years of Sabyasachi*/}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={sab7} type="video/mp4" />
                    browser does not support the video
                </video>

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">25 YEARS OF SABYASACHI</h1>
                </div>
            </section>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    "Our sense of place forever touches us. It is inescapable. Who we are and what we become is shaped by what surrounds us. I have lived in Calcutta all my life and Sabyasachi is a reflection of this magical city.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <img src={img29} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    "In Calcutta, one's life is surrounded by such rich history, one carries it into the future. Nostalgia automatically becomes a part of one's creative language. We don't buy products anymore. We buy philosophy, culture and values. Through our purchases, the mind can travel into a greater human community. It is essential for luxury to tell stories about provenance, the communities and the history that bring about their creation. Using traditional fabrics, heritage embroideries and generational crafts, we tell the story of local artisans and the many lifetimes of dedication embodied in each stitch.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img30}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={img31}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img32}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img33}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img34}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img35}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img36}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img37}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 9 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img38}
                        alt="Image 9"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 10 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img39}
                        alt="Image 10"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 11 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img40}
                        alt="Image 11"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 12 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img41}
                        alt="Image 12"
                        className=" h-full object-contain"
                    />
                </section>
            </div>

            <div className='bg-white p-13'></div>
            <img src={img42} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    "I firmly believe that what we buy, defines who we are and signals who we aren't—why else would luxury goods exist? Objects transcend form and function to create portraitsof ourselves."
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*image+video*/}
            <div className='flex justify-center items-center '>
                <div>
                    <img src={img43} alt="ring" className="p-4 h-1/2 object-contain " />
                </div>
                <div>
                    <video
                        className="p-4 h-1/2 object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={sab8} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Calcutta's unique perspective on art, academia and craft stems from various influences—from Catholic schools to bohemian art circles—and embodies conflict and debate inherent in its culture. This juxtaposition allows Calcuttans to reinterpret existing ideas creatively, they take something familiar and make it their own. The city's eclectic mix—from decadent villas to humble middle-class homes— Calcutta creates a narrative that celebrates everything unique.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/* 3 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <img className="p-4 w-1/3 object-contain" src={img44} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={img45} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={img46} alt="fashion" />
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Calcutta is an oasis of luxury which thrives within a deep presence of humanity. Where life has become increasingly mechanised, digitised and “smart”, Calcutta stands out as wise.
                </div>
            </div>

            <div>
                <img src={img47} alt="image" />
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    "As a Bengali, I've had access to the mixing of hedonism with the sophistication of culture. This is the environment I grew up in. It has shaped my consciousness.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img48}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={img49}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img50}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img51}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img52}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img53}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img59}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img55}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 9 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img56}
                        alt="Image 9"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 10 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={imh57}
                        alt="Image 10"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 11 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={img58}
                        alt="Image 11"
                        className=" h-full object-contain"
                    />
                </section>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Calcutta remains the cultural heartbeat of India even today. Historically, the epicentre of modern Indian literature and art movements. This unparalleled city, with its legacy of intellectual vigour and cultural girth, is a conduit for the continuation of great ideological and philosophical thought.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div>
                <img className='pb-10' src={img60} alt="image" />
            </div>

            {/*2 image*/}
            <div className='flex justify-center items-center '>
                <div>
                    <img src={img58} alt="ring" className="p-4 h-1/2 object-contain " />
                </div>
                <div>
                    <img src={img59} alt="ring" className="p-4 h-1/2 object-contain " />
                </div>
            </div>

            {/*2 video*/}
            <div className='flex justify-center items-center '>
                <div>
                    <video
                        className="p-4 h-1/2 object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={sab9} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
                <div>
                    <video
                        className="p-4 h-1/2 object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={sab10} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    "From the middle-class intellectuals of Calcutta, and their legendary addas in the coffee houses where the vitality of political and social debate is fuelled daily, to the lanes around College Street spilling with second-hand books on art, history, politics and social sciences, to the formidable art colleges nurturing the unique Bengal school of art, culture and thought permeates throughout the city.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
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

export default Years_Of_Sabyasachi
