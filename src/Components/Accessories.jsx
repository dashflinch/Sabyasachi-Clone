import React from 'react'
import m90 from "../assets/Images & Videos 2/m90.webp";
import m91 from "../assets/Images & Videos 2/m91.webp";
import m93 from "../assets/Images & Videos 2/m93.webp";
import m94 from "../assets/Images & Videos 2/m94.webp";
import m95 from "../assets/Images & Videos 2/m95.webp";
import m96 from "../assets/Images & Videos 2/m96.webp";
import m97 from "../assets/Images & Videos 2/m97.webp";
import m98 from "../assets/Images & Videos 2/m98.webp";
import m100 from "../assets/Images & Videos 2/m100.webp";
import leopard from "../assets/Images & Videos/leopard.png";




const Accessories = () => {
    return (
        <div>
            {/*Accessories*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={m90} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">ACCESSORIES</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “The first time I stared back into a tiger’s eyes was at Calcutta’s Alipore Zoo. I was six years old.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*Clutch Bags*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={m91} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">CLUTCH BAGS</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className=' object-contain' src={m100} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pt-5 pb-7 '>CROSSBODY BAGS</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*Sling Bags*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={m93} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">SLING BAGS</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className=' object-contain' src={m94} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pt-5 pb-7 '>BUCKET BAGS</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/* 2 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <div className='flex flex-col justify-center items-center'>
                    <img className="p-4  object-contain" src={m95} alt="fashion" />
                    <div className='flex flex-col justify-center items-center pb-10 '>
                        <h1 className='font-Alata text-2xl pb-7 '>MINI BAGS</h1>
                        <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className="p-4 object-contain" src={m96} alt="fashion" />
                    <div className='flex flex-col justify-center items-center pb-10 '>
                        <h1 className='font-Alata text-2xl pb-7 '>TOTE BAGS</h1>
                        <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                    </div>
                </div>
            </div>

            {/*BELTS*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={m97} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">BELTS</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-10'></div>

            {/*FINE EYEWEAR*/}
            <div className="relative w-full h-screen ">
                <img className="absolute  w-full h-full object-cover" src={m98} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">BELTS</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “A while ago, I came across this battered vintage leather bag studded with old copper coins at a flea market. And my mind started racing... pineapples and palm trees, the Taj and the tiger, dragonflies and alligators...”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

        </div>
    )
}

export default Accessories
