import React from 'react'
import Image from 'next/image'
import simbolo from '../public/simbolo-shiny.svg';
import passwordless from '../public/passwordless.svg';
import card from '../public/canto-cards.svg';
import noPhishing from '../public/no-phishing.svg';
import seamless from '../public/seamless-verification.svg';
import one from '../public/one-password.svg';
import auth from '../public/authentication-security.svg';
import company from '../public/campany-phishing-attacks.svg';
import cyber from '../public/cybersecurity-company.svg';
import card2 from '../public/canto-seccao-why-maia.svg';
const WhyMaia = () => {
  return (

    <section id="why-maia" className="why-maia wf-section">
      <div className="main-container w-container">
        <div className="why-wrapper">

          <div data-w-id="e456f2dd-2ae7-5c27-aeab-e8af83c74a62" className="flex vertical center">
            <Image src={simbolo} loading="lazy" alt=" simbolo" className="image" />
            <div className="text-block purple big max-w-1020">


              Maia is an innovative multi-factor authentication mechanism where a user’s password seldom changes, but the password sent to the server is always different. This capability is achieved by our novel Maia-powered architecture.
            </div>


            <div className="text-block small white caps">Model Actuated Infinite Authenticator</div>
          </div>



        </div>
        <div className="spacer _160"></div>


        <div className="flex horizontal gap-40 center">

          <div data-w-id="cb98e6e6-f149-4198-f52a-0b062f42eecc" className="why-card">
            <div>
              <h2 className="purple left">


                Passwordless
                <br></br>
                experience

              </h2>

              <div className="why-card-text">

                Enables passwordless authentication experience. From now on, users can log in to their accounts by just using their username.

              </div>




            </div>
            <div className="w-clearfix">
              <Image src={passwordless} loading="lazy" alt="passwordless" className="why-card-image" /></div>

            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-bottom-left rotate-180" />
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-top-right" /></div>


          <div data-w-id="7a1120f8-ebbf-855b-810d-52ede36afebc" className="why-card">
            <div>
              <h2 className="purple left">


                No more worrying
                <br></br>
                about phishing

              </h2>

              <div className="why-card-text">

                Prevents the consequences of phishing attacks completely.
                <br></br>
                Our technology is powerful and capable of making phishing harmless.

              </div>




            </div>
            <div className="w-clearfix">
              <Image src={noPhishing} loading="lazy" alt="passwordless" className="why-card-image" /></div>

            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-bottom-left rotate-180" />
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-top-right" />
          </div>

          <div data-w-id="1f477f7a-ff46-0b42-db5e-a30259eed754" className="why-card">
            <div>
              <h2 className="purple left">


                Seamless
                <br></br>
                verification

              </h2>

              <div className="why-card-text">

                Has the potential of seamless verification of devices with minimal or no human involvement, for example, IoT devices.

              </div>




            </div>
            <div className="w-clearfix">
              <Image src={seamless} loading="lazy" alt="passwordless" className="why-card-image" /></div>

            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-bottom-left rotate-180" />
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-top-right" /></div></div>
        <div className="spacer _40"></div>

        <div data-w-id="3494567b-14fe-a207-1056-47b828344178" className="text-block small purple">Implicit communication</div>
        <div className="spacer _240"></div>



        <div data-w-id="7bd8d26b-6c34-a869-7ec8-3ea7a054cf51" className="flex horizontal gap-200 max-w-900 no-wrap">
          <Image src={one} loading="lazy" alt="one" className="image-5" />
          <div>

            <h2 className="purple">
              One password
              <br></br>
              for everything
            </h2>
            <div className="why-card-text white ch">
              Liberates the user from the burden of remembering multiple passwords for multiple tools/websites, thus enabling the users to have one password for all.

            </div>
          </div>

        </div>

        <div className="spacer _160"></div>


        <div data-w-id="ed9d4ce3-5707-5803-4041-0d7ce268f726" className="flex horizontal gap-200 max-w-900 no-wrap">

          <Image src={auth} loading="lazy" alt="one" className="image-5" />
          <div>

            <h2 className="purple">
              Authentication
              <br></br>
              & Security
            </h2>
            <div className="why-card-text white ch">
              Complements existing authentication mechanisms and integrates well with them providing added security.
            </div>
          </div>
        </div>

        <div className="spacer _160"></div>

        <div className="flex horizontal gap-40 center">


          <div data-w-id="26d2a2ed-47d2-f888-dbf6-2462abd2d410" className="why-card _590">
            <div>
              <h2 className="purple card">Is your company worried about phishing attacks?</h2>


              <div className="why-card-text ch mobile-14">Maia can create an environment where phishing attacks are harmless.</div>
            </div>
            <div className="w-clearfix">


              <Image src={company} loading="lazy" alt="phishing" className="why-card-image" />
            </div>
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-bottom-left rotate-180" />
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-top-right" />
          </div>


          <div data-w-id="776d008b-76ec-41bd-674b-3b1e32d3a87b" className="why-card _590">
            <div>
              <h2 className="purple card">Is integrating a new cybersecurity technology a challenge in your company?</h2>


              <div className="why-card-text ch mobile-14">Maia complements existing technologies and integrates with them to enhance the security of the company’s IT infrastructure.</div>
            </div>
            <div className="w-clearfix">


              <Image src={cyber} loading="lazy" alt="phishing" className="why-card-image" />
            </div>
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-bottom-left rotate-180" />
            <Image src={card} loading="lazy"
              alt="passwordless" className="corner-top-right" />

          </div>
        </div>
      </div>


      {/* <div className="circle-blur _300 third"></div> */}
      <Image src={card2} loading="lazy" alt="card" className="corner-top-right" />

      <Image src={card2} loading="lazy" alt="card" className="corner-bottom-left rotate-180" />



    </section>





  )
}

export default WhyMaia
