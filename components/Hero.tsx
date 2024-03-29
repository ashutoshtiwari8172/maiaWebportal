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
                            <Link href="#hero" className='w-inline-block w--current'>
                                <Image src={logo} alt='maia-logo' width={500} height={300} layout="responsive" />
                            </Link>



                            {/* </a> */}
                            <div className="flex horizontal gap-40 items-center">
                                <a href='#why-maia' className='link-2 white hide-mon'>Why Maia?</a>
                                <a href='#footer' className='link-2 white hide-mon'>Contact Us</a>
                                <a href='/register' className='btn w-button'>Register</a>



                            </div>
                        </div>
                        <div className='spacer _60'></div>
                        < h1 data-w-id="5f682bc3-a08d-63d5-a3c5-dce743490c39" className='hero-h1' style={{
                            opacity: 1,
                            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}>Can you imagine a world where phishing becomes harmless?</h1>
                        <h2 data-w-id="fbddb410-44ad-77f8-d548-2ad64594cc37" className="regular">With Maia, make it a reality.</h2>
                        <div className='spacer _20'></div>
                        <div data-w-id="69a01b66-c557-429b-f876-07a3955584e6" className="flex horizontal gap-32 no-vertical">
                            <a href="/download" className="btn w-button">Download</a>
                            <a href="/register_client" className="btn  w-button">Register your website</a>


                        </div>
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
