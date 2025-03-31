import map from "../assets/stills/kartan_01.jpg"
import studiophoto from "../assets/Stills/recentStills/studio.jpg"

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

            We help clients visualize their story and build meaningful engagement around their brand or product. In recent years, we’ve found a deep passion for documentary filmmaking—capturing real stories with heart, honesty, and purpose. Whether you're unveiling a compelling documentary, launching a campaign, or showcasing the latest in sports and fashion, we dig deep to truly understand and fulfill your vision.
            Visual storytelling is at the core of what we do, and we're always striving for smarter, more efficient production through continuous process improvement.
            Our services include documentary and commercial film production, still photography, post-production, and concept development.
            Let’s bring your story to life.
            <br />
            <br />
            <div > <div className="located-text"> We are located at Inedalsgatan 13A, Kungsholmen.</div>

              <iframe className="google-maps"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.244995471928!2d18.053647!3d59.336118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d7c1c7b2b0f%3A0xf1606a23dd815e8f!2sInedalsgatan%2013A%2C%20112%2033%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2s!4v1707066383088!5m2!1sen!2s`}


                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onClick={() => window.location.href = mapLocation}
              ></iframe>

            </div>
            <div className="emailWrapper">
              <div className="email"> <b>Waldemar Hansson</b> <br /> +46 707 31 37 41 <br />   <a href={`mailto:${email}`} onClick={openMailProgram} className="email">
                {email}
              </a></div>
              <div className="email"> <b>Adress</b> <br /> Inedalsgatan 13A <br /> 112 33 Stockholm</div>
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