import React from 'react'
import Image from 'next/image'
import quote from '../public/aspas.svg';

const Founder = () => {
    return (
        <section id="founder" data-w-id="eff2a7d1-570f-3753-cd76-860b06bb95cc" className="founder wf-section" >
            <div className="main-container w-container">
                <div className="founder-wrapper">

                    <div className="founder-inner-wrapper">
                        <div className="text-block">
                            <span data-w-id="2e54cb1c-a00f-c062-adce-16af9176beec"
                                className="span-slide-in-up">
                                <p> Maia is a disrupting tech in passwordless authentication. Maia's novel architecture</p>
                            </span>




                            <span data-w-id="4e956d46-49a9-6df6-2ed7-5e78f3710d61" className="span-slide-in-up">
                                <p>offers a seamless (stealthy) authorization experience for the users. More over, Maia</p>

                            </span>



                            <span data-w-id="7149af9d-cd37-425f-bf35-46bcf4e9ee74" className="span-slide-in-up"><p>ensures security even if user credentials are compromised; hence there are no</p></span>

                            <span data-w-id="d7767ba3-59ed-1403-d78c-019fc930e65c" className="span-slide-in-up"><p>harmful consequences of user corruption or phishing attacks.</p></span>
                        </div>


                        <div data-w-id="f9bca3fc-72f9-b9c6-234f-3380e3b1fefc" className="text-block small lightblue">Rahul Sharma, Founder</div>
                        <Image src={quote} loading="lazy" alt=" qoute" className="aspas" />






                    </div>


                </div>


            </div>

            <div className="absolute bottom">
                <div data-w-id="a9524c97-e9d0-acf8-23d3-700aa52989f3" className="marquee-wrapper">

                    <div className="marquee-text">
                        Why Maia? · Why Maia? · Why Maia? · Why Maia? · Why Maia? · Why Maia? · Why Maia? · Why Maia? ·
                    </div>


                </div>

            </div>
            <div className="circle-blur _100 first"></div>
            <div className="circle-blur _300 second"></div>


        </section>
    )
}

export default Founder
