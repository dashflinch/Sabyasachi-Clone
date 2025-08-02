import React from 'react'
import i1 from "../assets/Images & Videos 3/i1.webp";
import i2 from "../assets/Images & Videos 3/i2.webp";
import i3 from "../assets/Images & Videos 3/i3.webp";
import i4 from "../assets/Images & Videos 3/i4.webp";
import e1 from "../assets/videos3/e1.mp4";
import leopard from "../assets/Images & Videos/leopard.png";



const Weddings = () => {
    return (
        <div>
            {/*WEDDINGS*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={i1} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WHAT'S NEW</p>
                    <h1 className="text-3xl mb-20  font-Alata">WEDDINGS</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “I prefer traditional clothing through the lens of maximalism or minimalism. The in between leaves me cold.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*heritage*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={i2} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WEDDINGS</p>
                    <h1 className="text-3xl mb-9  font-Alata">HERITAGE</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className='w-1/3 object-contain' src={i3} alt="image" />
            </div>

            <div className='flex flex-col justify-center items-center pb-10 '>
                <p className='font-Alata pt-5'>WEDDINGS</p>
                <h1 className='font-Alata text-2xl pt-2 pb-5 '>CONTEMPORARY</h1>
                <button className='border-1 border-black bg-black text-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
            </div>

            {/*WHITE WEDDINGS*/}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={e1} type="video/mp4" />
                    browser does not support the video
                </video>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WEDDINGS</p>
                    <h1 className="text-3xl mb-10  font-Alata">WHITE WEDDINGS</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </section>

            <div className='bg-white p-10'></div>

            {/*menswear*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={i4} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WEDDINGS</p>
                    <h1 className="text-3xl mb-9  font-Alata">MENSWEAR</h1>
                    <button className=' text-black bg-white border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

        </div>
    )
}

export default Weddings
