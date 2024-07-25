
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/maia-logo-white.svg';

import border_img from '../public/canto-hero.svg';



const Hero = () => {
    return (
        <section id="hero" className="hero wf-section">
            <div className="main-container w-container">
                <div className="hero-wrapper">
                    <div>
                        <div className='navbar-hero'>
                            {/* <a href="#hero"
                                className='w-inline-block w--current'> */}
                            {/* <Link href="#hero" className='w-inline-block w--current'>
                                <Image src={logo} alt='maia-logo' width={500} height={300} layout="responsive" />
                            </Link> */}
                            <h2>pahilabs</h2>



                            {/* </a> */}
                            <div className="flex horizontal gap-40 items-center">
                                <a href='#why-maia' className='link-2 white hide-mon'>Why Maia?</a>
                                <a href='#footer' className='link-2 white hide-mon'>Contact Us</a>
                                {/* <a href="https://maia.pahilabs.com/register_client" className="btn  w-button">Register website</a> */}




                            </div>
                        </div>
                        <div className='spacer _60'></div>
                        < h1 data-w-id="5f682bc3-a08d-63d5-a3c5-dce743490c39" className='hero-h1'>Can you imagine a world where phishing becomes harmless?</h1>
                        <h2 data-w-id="fbddb410-44ad-77f8-d548-2ad64594cc37" className="regular">With Maia, make it a reality.</h2>
                        <div className='spacer _20'></div>
                        {/* <div data-w-id="69a01b66-c557-429b-f876-07a3955584e6" className="flex horizontal gap-32 no-vertical">
                            <a href="https://maia.pahilabs.com/download" target='_blank' className="btn w-button">Download</a>
                            <a href='https://maia.pahilabs.com/register' className='btn w-button'>Register User</a>



                        </div> */}
                        <div className='spacer _20'></div>
                        <a href="#founder" className="btn blue w-button">Learn more</a>

                    </div>
                </div>



            </div>
            <div className="absolute topleft">
                <Image src={border_img} loading="lazy" alt=" border" className="hero-corner rotate-180" />
            </div>
            <div className="absolute topright">
                <Image src={border_img} loading="lazy" alt=" border" className="hero-corner rotate--90" />
            </div>
            <div className="absolute bottomright">
                <Image src={border_img} loading="lazy" alt=" border" className="hero-corner " />
            </div>
            <div className="absolute bottomleft">
                <Image src={border_img} loading="lazy" alt=" border" className="hero-corner rotate-90" />
            </div>





        </section>
    )
}

export default Hero

// "use client"

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import logo from '../public/maia-logo-white.svg';
// import border_img from '../public/canto-hero.svg';
// import image1 from '../public/image.png';
// import image2 from '../public/image_copy.png'; // Change the name to avoid syntax issues
// import image3 from '../public/image_copy_2.png'; // Change the name to avoid syntax issues

// const Hero = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const slides = [
//         { src: image1 },
//         { src: image2 },
//         { src: image3 },
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//         }, 5000); // Change slide every 5 seconds
//         return () => clearInterval(interval);
//     }, [slides.length]);

//     return (
//         <section id="hero" className="hero wf-section">
//             <div className="main-container w-container">
//                 <div className="hero-wrapper">
//                     <div className='navbar-hero'>
//                         <h2>pahilabs</h2>
//                         <div className="flex horizontal gap-40 items-center">
//                             <a href='#why-maia' className='link-2 white hide-mon'>Why Maia?</a>
//                             <a href='#footer' className='link-2 white hide-mon'>Contact Us</a>
//                         </div>
//                     </div>
//                     <div className='spacer _60'></div>
//                     <div className="slide-transition">
//                         <Image src={slides[currentSlide].src} alt={`Slide ${currentSlide}`} width={800} height={600} />
//                     </div>
//                     <div className="absolute topleft">
//                         <Image src={border_img} loading="lazy" alt="border" className="hero-corner rotate-180" />
//                     </div>
//                     <div className="absolute topright">
//                         <Image src={border_img} loading="lazy" alt="border" className="hero-corner rotate--90" />
//                     </div>
//                     <div className="absolute bottomright">
//                         <Image src={border_img} loading="lazy" alt="border" className="hero-corner" />
//                     </div>
//                     <div className="absolute bottomleft">
//                         <Image src={border_img} loading="lazy" alt="border" className="hero-corner rotate-90" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Hero;
