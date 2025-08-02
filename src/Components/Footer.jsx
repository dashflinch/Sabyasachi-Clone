import React from 'react'

const Footer = () => {
    return (
        <div className='bg-neutral-900 gap-30 pt-10 pb-20 flex flex-row justify-center'>

            <div >
            <div className='pb-5 text-neutral-600 text-sm font-Alata font-bold'>WHAT'S NEW</div>
            <ul className='text-white text-sm/7 flex flex-col'>
                <list>Sabyasachi at Harrods</list>
                <list>A Calcutta Summer Feast</list>
                <list>Met Gala 2025</list>
                <list>Sabyasachi Jewellery X Neiman Marcus</list>
                <list>25 Years Of Sabyasachi</list>
                <list>Sabyasachi X Printemps Doha</list>
                <list>Sabyasachi X Bergdorf Goodman 2024</list>
                <list>The Sari Edit</list>
                <list>Heritage Bridal 2024</list>
                <list>The Curiosity, Art & Antiquity Project</list>
            </ul>
            </div>

            <div>
            <div className='pb-5 text-neutral-600 text-sm font-Alata font-bold'>WORLD OF SABYASACHI</div>
            <ul className='text-white text-sm/7 flex flex-col'>
                <li>History</li>
                <li>Collaborations</li>
                <li>The Sabyasachi Art Foundation</li>
                <li>Social Initiatives</li>
                <li>Craft Preservation</li>
                <li>Craft Preservation</li>
            </ul>
            </div>

            <div>
            <div className='pb-5 text-neutral-600 text-sm font-Alata font-bold'>CUSTOMER CARE</div>
            <ul className='text-white text-sm/7 flex flex-col'>
                <li>Contact</li>
                <li>Stores</li>
            </ul>
            </div>

            <div>
            <div className='pb-5 text-neutral-600 text-sm font-Alata font-bold'>SOCIAL</div>
            <ul className='text-white text-sm/7 flex flex-col'>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
            </div>
            
            <div>
            <div className='pb-5 text-neutral-600 text-sm font-Alata font-bold'>CORPORATE</div>
            <ul className='text-white text-sm/7 flex flex-col'>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
            </ul>
            </div>
        </div>
    )
}

export default Footer
