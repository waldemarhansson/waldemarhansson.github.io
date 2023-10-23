import map from "../assets/stills/kartan_01.jpg"


const AboutMe = () => {







  return (
    <div className="about-me-wrapper">


      <section>
        <div className="text-about-me">
          <h1 className="title-text">We are specialized in visual storytelling and content creation.</h1>
          <div className="bread_text">

            We help clients to visualize their story and build engagement for their brand or product.
            Whether you're looking to promote your brand, unveil a compelling documentary,
            or showcase the latest trends in sports and fashion, we have the vision and skills to bring your next project to life.
            We love visual storytelling and we are always striving to be as efficient as possible by improving the production processes.
            Let's get to work.
            <br />
            <br />
            <div className="container-for-map"> <div className="located-text"> We are located in the heart of Stockholm at Linnegatan 4, Östermalm.</div>

              <img className="map" src={map} ></img></div>
            <div className="email">Linnegatan 4 | 114 47 Stockholm | +46 707 31 37 41 <br /> hello@visualstorytelling.se</div>




          </div>

        </div>

        <br />


      </section>

    </div>
  )
}

export default AboutMe;