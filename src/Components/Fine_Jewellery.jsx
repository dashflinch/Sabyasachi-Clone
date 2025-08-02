import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import i56 from "../assets/Images & Videos 3/i56.webp";
import i57 from "../assets/Images & Videos 3/i57.webp";
import i58 from "../assets/Images & Videos 3/i58.webp";
import i59 from "../assets/Images & Videos 3/i59.webp";
import i62 from "../assets/Images & Videos 3/i62.webp";
import i63 from "../assets/Images & Videos 3/i63.webp";
import i64 from "../assets/Images & Videos 3/i64.webp";
import i65 from "../assets/Images & Videos 3/i65.webp";
import i66 from "../assets/Images & Videos 3/i66.webp";
import i67 from "../assets/Images & Videos 3/i67.webp";
import i68 from "../assets/Images & Videos 3/i68.webp";
import leopard from "../assets/Images & Videos/leopard.png";


const Fine_Jewellery = () => {
    return (
        <div>
            {/*Accessories*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={i56} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">FINE JEWELLERY</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    An homage to the iconic house insignia, the royal Bengal Tiger—its beauty, ferocity and strength. Timeless classics crafted in 18k gold with EF VVS VS diamonds.
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className=' object-contain' src={i58} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>THE CHOWRINGHEE EARRINGS</h1>
                <div className='bg-white px-6 pt-5 pb-5 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Crafted in 18k gold with South Sea pearls, black enamel and studded with EF VVS VS diamonds “Midsummer afternoons in Calcutta clubs, ladies playing Mahjong. Organza saris, faces layered with compact, copious amounts of hairspray and painted lips pursed in fierce concentration. Diamonds and pearls glinting in the sunlight."
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className=' object-contain' src={i59} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>THE SIGNET RINGS</h1>
                <div className='bg-white px-6 pt-5 pb-5 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Crafted in 18k gold with black enamel and studded with EF VVS VS diamonds “Barrister Roy came over on Sundays to discuss Marx, Ray and football over cups of Darjeeling. Always in a crisp white Dhaka muslin kurta, horn rimmed glasses and that strange signet ring on his left forefinger.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className=' object-contain' src={i62} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>TROPIC OF CALCUTTA</h1>
                <div className='bg-white px-6 pt-5 pb-5 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    A commitment to curiosities and fine craftsmanship. Coded classics crafted in 18k gold with multicoloured gemstones and EF VVS VS diamonds.
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='bg-white p-13'></div>
            <div className='flex flex-col justify-center items-center '>
                <img src={i63} alt="earings" className='w-1/2 h-auto object-cover' />
            </div>

            <div className='flex flex-col justify-center items-center '>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Earrings crafted in 18k gold with tourmaline, garnet, opal, tanzanite and brilliant cut EF VVS VS diamonds.
                </div>
                <h1 className='font-Alata text-2xl pb-7 '> HIGH JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className='w-1/2 object-contain' src={i64} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>THE ARYA RING</h1>
                <div className='bg-white px-6 pt-5 pb-5 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Inspired by the Navaratna—the congregation of nine celestial gemstones. Crafted in 18k gold with multicoloured gemstones and EF VVS VS diamonds.
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/* 3 images */}
            <div className='flex justify-center items-center gap-4 bg-white'>
                <img className="p-4 w-1/3 object-contain" src={i65} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={i66} alt="fashion" />
                <img className="p-4 w-1/3 object-contain" src={i67} alt="fashion" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <div className='bg-white px-6 pt-5 pb-5 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Ponte Vecchio, Saint-Ouen, Chor Bazaar or old Bond Street. Delightful precious wonders nestling between dusty ledges, moth-eaten velvets and the occasional chipped china. Winking at me through the stained windows of antique stores in the late afternoon sunlight.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className=' object-contain' src={i68} alt="image" />
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

export default Fine_Jewellery
