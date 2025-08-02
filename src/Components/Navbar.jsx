import React from 'react';
import sab1 from "../assets/videos1/sab1.mp4";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <section className="relative h-screen w-full overflow-hidden">

            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={sab1} type="video/mp4" />
                browser does not support the video
            </video>

            {/* Navbar */}
            <div className='absolute z-20 w-full pl-15 pr-15  bg-transparent  text-white  hover:bg-white hover:text-black'>

                {/* Logo */}
                <div className='pb-7 pt-6.5 text-4xl font-bold font-Figtree  flex justify-center items-center ' >
                    SABYASACHI
                </div>

                {/* Menu Links */}
                <div className='flex flex-row justify-center gap-8 font-Alata text-sm'>

                    <a href="#25yearsofsabyasachi">
                    <div className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        WHAT'S NEW
                    </div>
                    </a>
                    <div onClick={() => navigate("/high_jewellery")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        HIGH JEWELLERY
                    </div>
                    <div onClick={() => navigate("/fine_jewellery")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        FINE JEWELLERY
                    </div>
                    <div onClick={() => navigate("/womenswear")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        WOMENSWEAR
                    </div>
                    <div onClick={() => navigate("/menswear")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        MENSWEAR
                    </div>
                    <div onClick={() => navigate("/weddings")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        WEDDINGS
                    </div>
                    <div onClick={() => navigate("/accessories")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        ACCESSORIES
                    </div>
                    <div onClick={() => navigate("/art_of_retail")} className='tracking-wide pb-7 border-b-2 border-b-transparent hover:border-b-black hover:cursor-pointer'>
                        WORLD OF SABYASACHI
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                <h1 className="text-5xl font-bold">Luxury Redefined</h1>
                <p className="text-lg mt-4 mb-4 font-Figtree">SABYASACHI AT HARRODS</p>
                <button onClick={() => navigate("/sabyasachi_harrods")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9 hover:cursor-pointer'>EXPLORE</button>
            </div>
        </section>
    )
}

export default Navbar



