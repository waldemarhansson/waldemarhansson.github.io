import map from "../assets/stills/kartan_01.jpg"

const AboutMe = () => {
  const email = "waldemar@waldemarhansson.com"
  const openMailProgram = () => {
    // You can use a mailto link to open the user's default mail program
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="about-me-wrapper">


      <section>
        <div className="text-about-me">
          <h1 className="title-text">We are specialized in visual storytelling and content creation.</h1>
          <div className="bread_text">

            We help clients to visualize their story and build engagement for their brand or product.
            Whether you're looking to promote your brand, unveil a compelling documentary,
            or showcase the latest trends in sports and fashion, we have the vision and skills to bring your project to life.
            We love visual storytelling and we are always striving to be as efficient as possible by improving the production processes.
            Our Service include film  and stills  production, post production and concept developing.
            Let's get to work.
            <br />
            <br />
            <div className="container-for-map"> <div className="located-text"> We are located in the center of Stockholm at Linnegatan 4, Östermalm.</div>

              <img className="map" src={map} ></img></div>

            <div className="emailWrapper">
              <div className="email"> <b>Waldemar Hansson</b> <br /> +46 707 31 37 41 <br />   <a href={`mailto:${email}`} onClick={openMailProgram} className="email">
                {email}
              </a></div>
              <div className="email"> <b>Adress</b> <br /> Linnegatan 4 <br /> 114 47 Stockholm</div>
              <div className="social-media-wrapper">
                <a href="https://www.instagram.com/waldemarhansson/">
                  <i className="fab fa-instagram"></i>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                </a>

              </div>
            </div>

          </div>

        </div>

        <br />


      </section>

    </div>
  )
}

export default AboutMe;