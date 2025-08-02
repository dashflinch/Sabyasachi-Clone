import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import m13 from "../assets/images4/m13.webp";
import m14 from "../assets/images4/m14.webp";
import m15 from "../assets/images4/m15.webp";
import m16 from "../assets/images4/m16.webp";
import m17 from "../assets/images4/m17.webp";
import leopard from "../assets/Images & Videos/leopard.png";



const High_Jewellery = () => {
    return (
        <div>
            {/*HIGH JEWELLERY*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={m13} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">HIGH JEWELLERY</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Some of the most superlative jewellery ever made in India has been handcrafted by the master goldsmiths of Calcutta, colloquially known as the ‘babus’. I want to make this legacy thrive again.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15 object-contain" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center'>
                <img src={m14} alt="earings" className='w-1/2 object-contain' />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pt-5 pb-2 '> THE HERITAGE COLLECTION</h1>
                <p className='font-Alata  pb-7 '>The India that was and the India that is</p>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='flex justify-center items-center'>
                <img src={m15} alt="earings" className='w-1/2 object-contain' />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pt-5 pb-2 '> BENGAL ROYALE</h1>
                <p className='font-Alata  pb-7 '>The Georgian and Victorian influence on North Calcutta exuberance</p>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='flex justify-center items-center'>
                <img src={m16} alt="earings" className='w-1/2 object-contain' />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <h1 className='font-Alata text-2xl pt-5 pb-2 '> BENGAL BYZANTINE BROADWAY</h1>
                <p className='font-Alata  pb-7 '>The new silk route</p>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <img src={m17} alt="fashion" />

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “The value of jewellery for today’s connoisseur goes far beyond the provenance of gemstones. It’s about design, craft and wearability. As heritage crafts get rarer and as they become more endangered, their legacy will become more valuable than the most precious of gemstones. These are the heirlooms that will find their pride of place in museums tomorrow.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15 object-contain" src={leopard} alt="leopard" />
            </div>


        </div>
    )
}

export default High_Jewellery
