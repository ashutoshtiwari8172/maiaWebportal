import React from 'react'
import Image from 'next/image'
import simbolo from '../public/simbolo-shiny.svg';


const WhyMaia = () => {
  return (

    <section id="why-maia" className="why-maia wf-section">
      <div className="main-container w-container">
        <div className="why-wrapper">

          <div data-w-id="e456f2dd-2ae7-5c27-aeab-e8af83c74a62" className="flex vertical center">
            <Image src={simbolo} loading="lazy" alt=" simbolo" className="image" />
            <div className="text-block purple big max-w-1020">


              "Maia is an innovative multi-factor authentication mechanism where a user’s password seldom changes, but the password sent to the server is always different. This capability is achieved by our novel Maia-powered architecture."
            </div>


            <div className="text-block small white caps">Model Actuated Infinite Authenticator</div>
          </div>



        </div>
        <div className="spacer _160"></div>


        <div className="flex horizontal gap-40 center">


        </div>











      </div>








    </section>





  )
}

export default WhyMaia
