import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from '../public/maia-logo-white.svg';
import uc from '../public/uc-logo.svg';
import ucb from '../public/uc-business-logo.svg';
const Footer = () => {
  return (



    <footer id='footer' data-w-id="153a165c-1157-a80d-2a3c-c3c9175e7964" className="footer wf-section">

      <div className="main-container _20 w-container">


        <div className="footer-wrapper">

          <div className="footer-grid clip-50">
            <Link href="#hero" id="w-node-f2677500-7d4f-fb1d-20c2-be55c01bb6c8-c5f01af4" className="w-[135px] w-inline-block">
              <Image src={logo} alt='maia-logo' layout="responsive" id="w-node-_6fba4223-e847-b70e-22ed-91bf71ba0f2b-c5f01af4" className=" logo-maia " />

            </Link>

            <div id="w-node-_0791ec46-bccd-d7ef-1a52-300604e94c1f-c5f01af4">
              <div className="text-block white small left">
                Contact us
                <br />
                <a href="mailto:maia.info@dei.uc.pt" className="link">maia.info@dei.uc.pt</a>
                <br />
                <br />
                © 2024 All rights reserved to Maia.
              </div>
            </div>


            <div id="w-node-b729a855-3513-ad5b-3d6c-c0e51b2ebecd-c5f01af4">
              <div className="text-block white small left">Supported by</div>

              <div className="flex horizontal gap-40 no-wrapp no-vertical top-10">
                <Link href="https://www.uc.pt/" target='_blank'
                  className="w-inline-block">
                  <Image src={uc} alt='uc-logo' layout="responsive"
                    className='image-2' />

                </Link>
                <Link href="https://www.uc.pt/ucbusiness/" target='_blank'
                  className="w-inline-block">
                  <Image src={ucb} alt='uc-logo' layout="responsive"
                    className='image-3' />

                </Link>






              </div>





            </div>























          </div>

























        </div>































      </div>













    </footer>










  )
}

export default Footer
