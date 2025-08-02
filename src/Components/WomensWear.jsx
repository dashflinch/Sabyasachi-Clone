import React from 'react'
import i49 from "../assets/Images & Videos 3/i49.webp";
import i50 from "../assets/Images & Videos 3/i50.webp";
import i51 from "../assets/Images & Videos 3/i51.webp";
import i52 from "../assets/Images & Videos 3/i52.webp";
import i53 from "../assets/Images & Videos 3/i53.webp";
import i55 from "../assets/Images & Videos 3/i55.webp";
import e6 from "../assets/videos3/e6.mp4";
import leopard from "../assets/Images & Videos/leopard.png";




const WomensWear = () => {
    return (
        <div>
            {/*Accessories*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={i49} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">WOMENSWEAR</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “It was the mid ‘80s in Calcutta. And I was growing up in the company of strong women. Artists from the Bengal School of Art and students of literature and politics from Presidency College. Heated debates at Coffee House. Tagore and Woolf, Sher-Gil and Kahlo. Strong-willed and culture proud. They wore their tradition with a severe modernity. Decorative but pragmatic.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className=' object-contain' src={i50} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>HERITAGE</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='bg-white p-13'></div>
            <img src={i51} alt="earings" className='w-full h-auto object-cover' />

            <div className='flex flex-col justify-center items-center '>
                <div className='bg-white px-6 pt-10 pb-2 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    THE BENGAL ROYALE COLLECTION
                </div>
                <h1 className='font-Alata text-2xl pb-7 '> HIGH JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*2 video*/}
            <div className='flex justify-center items-center '>
                <video
                    className="p-4 h-1/2 object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={e6} type="video/mp4" />
                    browser does not support the video
                </video>
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>INTERNATIONAL</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className=' object-contain' src={i52} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pb-5 pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>WEDDINGS</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/* 2 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <div className='flex flex-col justify-center items-center'>
                    <img className="p-4  object-contain" src={i53} alt="fashion" />
                    <div className='flex flex-col justify-center items-center pb-10 '>
                        <h1 className='font-Alata text-2xl pb-7 '>THE BENGAL TIGER ICON COLLECTION</h1>
                        <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className="p-4 object-contain" src={i55} alt="fashion" />
                    <div className='flex flex-col justify-center items-center pb-10 '>
                        <h1 className='font-Alata text-2xl pb-7 '>THE BENGAL TIGER ICON EARRINGS</h1>
                        <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WomensWear
