import React from 'react'
import img28 from "../assets/Images & Videos/img28.webp";
import i5 from "../assets/Images & Videos 3/i5.webp";
import i6 from "../assets/Images & Videos 3/i6.webp";
import i7 from "../assets/Images & Videos 3/i7.webp";
import i8 from "../assets/Images & Videos 3/i8.webp";
import i9 from "../assets/Images & Videos 3/i9.webp";
import i10 from "../assets/Images & Videos 3/i10.webp";
import i11 from "../assets/Images & Videos 3/i11.webp";
import i12 from "../assets/Images & Videos 3/i12.webp";
import i13 from "../assets/Images & Videos 3/i13.webp";
import i14 from "../assets/Images & Videos 3/i14.webp";
import i15 from "../assets/Images & Videos 3/i15.webp";
import i16 from "../assets/Images & Videos 3/i16.webp";
import i17 from "../assets/Images & Videos 3/i17.webp";
import i18 from "../assets/Images & Videos 3/i18.webp";
import e2 from "../assets/videos3/e2.mp4";
import e3 from "../assets/videos3/e3.mp4";
import e4 from "../assets/videos3/e4.mp4";
import leopard from "../assets/Images & Videos/leopard.png";


function Art_Of_Retail() {
    return (
        <div>
            {/*ART OF RETAIL*/}
            <div className="relative w-full h-screen">
                <img className="absolute w-full h-full object-cover object-center" src={i5} alt="SABYASACHI AT HARRODS" />

                <div className='relative z-10 top-70 text-8xl text-white font-Alata flex justify-center items-center'>SABYASACHI</div>

                <div className="relative z-10 flex flex-col justify-end items-center h-full text-white pb-10 translate-y-[-30px]">
                    <p className='font-Alata pb-5'>WORLD OF SABYASACHI</p>
                    <h1 className="text-3xl mb-20  font-Alata">ART OF RETAIL</h1>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “My stores are a tribute to the dexterity of the human hand powered by human will. When you create a brand where craft, culture and fine artisanry is at the core, it’s important to sensitise your eco-system to the skill, art, history and intellect behind it. It’s not about a singular product, it’s larger than that. This is heritage, history and the perseverance of individuals all tied together. I think of my stores as living museums, where we celebrate what was and what can be. Where you get to experience, view and feel my latest collections of clothing, jewellery and accessories, but you also get to experience the finest of Indian traditional and heritage arts and crafts, and global antiques and antiquities.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*image+video*/}
            <div className='flex justify-center items-center p-10 gap-x-2'>
                <div>
                    <img src={i6} alt="ring" className="  object-contain " />
                </div>
                <div>
                    <video
                        className=" object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={e2} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className=' object-contain' src={i7} alt="image" />
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “Hi, I’m your host,” says a woman welcoming you to the Sabyasachi store—her black bandhani kurta, kajal-lined eyes, and discreet jewellery piled on high enough becoming a statement of its own. As the evening goes on, it reveals a number of these “hosts”, each wearing a uniform chic enough to own oneself. That someone aside from Sabyasachi Mukherjee can welcome you with confidence, warmth, and ease reveals a subtle brand rarity, and perhaps even a superpower: that of a family hosting an evening. Indeed, to build an empire takes a leader with vision and a legion of empowered individuals.” - Architectural Digest, 2023
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*Scroll Section*/}
            <div className="w-screen h-screen overflow-x-scroll flex snap-x snap-mandatory scroll-smooth no-scrollbar bg-white">
                {/* Section 1 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i16}
                        alt="Image 1"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 2 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start">
                    <img
                        src={i8}
                        alt="Image 2"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 3 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i9}
                        alt="Image 3"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 4 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i10}
                        alt="Image 4"
                        className="l h-full object-contain"
                    />
                </section>

                {/* Section 5 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i11}
                        alt="Image 5"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 6 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i12}
                        alt="Image 6"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 7 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i13}
                        alt="Image 7"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 8 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i14}
                        alt="Image 8"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 9 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <img
                        src={i15}
                        alt="Image 9"
                        className=" h-full object-contain"
                    />
                </section>

                {/* Section 10 */}
                <section className="flex items-center justify-center w-auto px-8 flex-shrink-0 snap-start ">
                    <video
                        className=" h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={e3} type="video/mp4" />
                        browser does not support the video
                    </video>
                </section>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    The notes of rose, sandalwood and frankincense waft through each store. Intermingling with the sounds of Rabindra Sangeet and Madonna to old Bollywood classics and Édith Piaf—each playlist carefully curated by Sabyasachi. Tea from the finest independent tea estates of India is served with small batch fruitcakes and ginger biscuits that are sourced from local artisanal bakeries. All under the warm glow of exquisite gleaming hand cut chandeliers and cosy hand knotted rugs and kilims. The art of retail at Sabyasachi is embedded in the artisanal and the handcrafted.
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6  sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “I'm uncomfortable about collecting art and craft for private consumption. Beautiful things need to be shared with the world. Everything I have collected over the last twenty years, be it museum quality textiles or flea market finds, be it the profound or the mundane, can all be viewed and experienced within my stores.”
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Each store is a living museum. Lined with hand painted art created by the Sabyasachi Art Foundation, layered between age-old original Tanjore paintings and Pichhwais in the Deccan, Nathdwara and Kota style. Around nooks you find vintage photography, Mughal miniatures, rare bronzes, 19th century Company Paintings and rare lithographs. Hand engraved curiosity cabinets sourced from souks in Morocco and Kashgar, 18th century handcarved Venetian furniture, rare French Art Nouveau cabinets and arrogant brass sculptures made by hand in Calcutta.
                </div>
                <div className='bg-white p-1'></div>
                <div className='bg-white px-6 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    Leather-bound books, Tang dynasty pottery, rare Canton vases and odd antiquities lie on retrofitted turn of the century furniture with fine inlay work, alongside the house’s now signature block printed silk velvet lined busts, vitrines and lampshades. From Rajasthan to Bengal, vintage, handwoven and crafted textiles from across India can be found all across the store, showcasing a sliver of India’s grand crafts legacy. While the wallpaper and upholstery are part of the Sabyasachi for Nilaya collection by Asian Paints, presenting various house motifs and hallmarks.
                </div>
            </div>

            <div className='flex justify-center items-center pt-13'>
                <img className='object-contain' src={i17} alt="image" />
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “There was a time, not so long ago, when most Indian homes had a glass display cabinet. We called it the showcase. From sports medals and wedding china to empty perfume bottles, postcards, silverware, vases, Boroline, conches, seashells, souvenirs of the Taj Mahal, Eiffel tower key rings, miniature liquor bottles and talcum powder tins—they were crammed with everything. Our lives through generations, curated and displayed for the occasional visitor. My stores are my showcase.”
                </div>
                <img className="max-w-[80px] mx-auto h-auto pb-15" src={leopard} alt="leopard" />
            </div>

            {/*image+video*/}
            <div className='flex justify-center items-center p-10 gap-x-2'>
                <div>
                    <img src={i18} alt="ring" className="  object-contain " />
                </div>
                <div>
                    <video
                        className=" object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={e4} type="video/mp4" />
                        browser does not support the video
                    </video>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='bg-white px-6 py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80 font-Alata text-center flex justify-center items-center'>
                    “All our stores serve tea from the independent tea estates of Bengal. On a personal level the tea ceremony is terribly important to me. Growing up middle class in Calcutta that’s all we had. Our tea. It was our marker of good taste, but it was more than that, it was a sign of holding on to our dignity even if we could not afford worldly luxuries.”
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

export default Art_Of_Retail
