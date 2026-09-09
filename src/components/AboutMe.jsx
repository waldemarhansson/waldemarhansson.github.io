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
          <h1 className="title-text">I’m Waldemar Hansson, a filmmaker and photographer</h1>
          <div className="bread_text">
            My background in fashion, sports and commercial photography has shaped the way I see and tell stories. Today, I bring that experience into documentary filmmaking, with a focus on authentic stories, real people and genuine moments.
            <br />
            <br />
            I work across documentary, commercial film and photography — from short-form films to larger productions.
            <br />
            <br />
            Services include film production, photography, concept development and post-production.
            <br />
            <br />
            <div id="contact" className="emailWrapper">
              <div className="email"> <b>Waldemar Hansson</b> <br /> +46 707 31 37 41 <br />   <a href={`mailto:${email}`} onClick={openMailProgram} className="email">
                {email}
              </a></div>
              <div className="email"> <b>Adress</b> <br /> Karlbergsvägen 69a <br /> 113 35 Stockholm</div>
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
