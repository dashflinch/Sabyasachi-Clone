import React from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/Images & Videos/img1.webp";
import sab2 from "../assets/videos1/sab2.mp4";
import img2 from "../assets/Images & Videos/img2.webp";
import img3 from "../assets/Images & Videos/img3.webp";
import img4 from "../assets/Images & Videos/img4.jpg";
import sab3mov from "../assets/videos1/sab3mov.mov";
import img5 from "../assets/Images & Videos/img5.webp";
import img6 from "../assets/Images & Videos/img6.webp";
import img7 from "../assets/Images & Videos/img7.webp";
import img8 from "../assets/Images & Videos/img8.webp";
import leopard from "../assets/Images & Videos/leopard.png";



const Home = () =>{
    const navigate = useNavigate();

    return (
        <div>
            <div className='p-13 font-Alata flex justify-center items-center'>
                <p>“For culture to be relevant, it needs to be dynamic.”</p>
            </div>

            <section id="25yearsofsabyasachi">
            {/*25 YEARS SABYASACHI*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img1} alt="25 YEARS SABYASACHI" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">25 YEARS SABYASACHI</h1>
                    <button onClick={() => navigate("/25_years_of_sabyasachi")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>
            </section>

            <div className='bg-white p-8'></div>

            {/*A CALCUTTA SUMMER FEAST*/}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={sab2} type="video/mp4" />
                    browser does not support the video
                </video>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 ">
                    <h1 className="text-3xl mb-9  font-Alata">A CALCUTTA SUMMER FEAST</h1>
                    <button onClick={() => navigate("/calcutta_summer_feast")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </section>

            <div className='bg-white p-8'></div>

            {/*SABYASACHI X BERGDORF GOODMAN*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img2} alt="SABYASACHI X BERGDORF GOODMAN" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">SABYASACHI X BERGDORF GOODMAN</h1>
                    <button onClick={() => navigate("/sabyasachi_X_bergdorfgoodman")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-8'></div>

            {/*HIGH JEWELLERY*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img3} alt="IGH JEWELLERY" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">HIGH JEWELLERY</h1>
                    <button onClick={() => navigate("/high_jewellery")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-8'></div>

            {/*BRIDAL COUTURE 2025*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img4} alt="BRIDAL COUTURE 2025" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">BRIDAL COUTURE 2025</h1>
                    <button onClick={() => navigate("/bridal_couture_2025")}  className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-8'></div>

            {/*THE CURIOSITY, ART & ANTIQUITY PROJECT*/}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={sab3mov} type="video/mp4" />
                    browser does not support the video
                </video>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 ">
                    <h1 className="text-3xl mb-9  font-Alata">THE CURIOSITY, ART & ANTIQUITY PROJECT</h1>
                    <button onClick={() => navigate("/curiosity_art_antiquity")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </section>

            <div className='bg-white p-8'></div>

            {/*ACCESSORIES*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img5} alt="ACCESSORIES" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">ACCESSORIES</h1>
                    <button onClick={() => navigate("/accessories")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-8'></div>

            {/*WEDDINGS*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img6} alt="WEDDINGS" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">WEDDINGS</h1>
                    <button onClick={() => navigate("/weddings")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-8'></div>

            {/*LOVE. WANDERLUST. CURIOSITY*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img7} alt="LOVE. WANDERLUST. CURIOSITY" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">LOVE. WANDERLUST. CURIOSITY</h1>
                    <button onClick={() => navigate("/love_wanderlust_curiosity")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>

            <div className='bg-white p-8'></div>

            {/*ART OF RETAIL*/}
            <div className="relative w-full h-screen">
                <img className="absolute  w-full h-full object-cover" src={img8} alt="ART OF RETAIL" />

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <h1 className="text-3xl mb-9  font-Alata">ART OF RETAIL</h1>
                    <button onClick={() => navigate("/art_of_retail")} className='border-1 border-white pt-4 pb-4 pl-9 pr-9'>EXPLORE</button>
                </div>
            </div>


            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Crowded narrow lanes with balconies jutting out of beautiful old mansions and homes, jostling for space in North Calcutta. So rich in its nonchalance, between the clamour of grandeur and decay. It's almost spiritual, the neglect of luxury and the casual existence of glamour. It makes Calcutta unforgettable.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-25" src={leopard} alt="leopard" />
            </div>
        
        </div>
    )
}

export default Home
