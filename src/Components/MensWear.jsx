import React from 'react'
import i44 from "../assets/Images & Videos 3/i44.webp";
import i45 from "../assets/Images & Videos 3/i45.webp";
import i46 from "../assets/Images & Videos 3/i46.webp";
import i47 from "../assets/Images & Videos 3/i47.webp";
import i48 from "../assets/Images & Videos 3/i48.webp";
import leopard from "../assets/Images & Videos/leopard.png";


const MensWear = () => {
    return (
        <div>
            {/*MENSWEAR*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={i44} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WORLD OF SABYASACHI</p>
                    <h1 className="text-3xl mb-20  font-Alata">MENSWEAR</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “In the midst of Jamini Roy paintings, Ming vases and Osler chandeliers in an old North Calcutta mansion, I spotted him. A distinguished older man in a simple ivory khadi kurta and dhoti. It was only when he was leaving did I notice his walking stick—a handcrafted wooden beauty with a solid gold tiger head encrusted with old Burmese rubies. I watched transfixed, as he strode onto the porch outside, and disappeared into a black Ambassador car.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className=' object-contain' src={i45} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5'>
                <h1 className='font-Alata text-2xl pb-7 '>INTERNATIONAL</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className=' object-contain' src={i46} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5 '>
                <h1 className='font-Alata text-2xl pb-7 '>WEDDINGS</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            <div className='flex justify-center items-center pt-5'>
                <img className='w-1/2 object-contain' src={i47} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pt-5 pb-10'>
                <h1 className='font-Alata text-2xl pb-7 '>FINE JEWELLERY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*HERITAGE*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={i48} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">HERITAGE</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>


        </div>
    )
}

export default MensWear
