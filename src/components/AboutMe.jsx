import w from "../assets/letter-w.png"

const AboutMe = () =>{







    return(
        <div className="about-me-wrapper">

            <img src={w}></img>
            <section>
  <div className="text-about-me">
    <h1 className="title-text">This is where your vision comes to motion.</h1>
    
      <h2>We produce your needs and dreams.</h2>
      
      <h3>We do stills, film,
      editing, grading, graphics, and audio.</h3> We have everything in-house. We
      deliver your beloved project in all kinds of formats for all kinds of
      futuristic media.
    
    <p>
      On bigger productions, we collaborate with talents we love and trust.
      Waldemar works worldwide both as a DOP and still photographer. Located in
      Stockholm.
    </p>
  </div>

  <br />

  <div className="contact-info">
    <p>
      Be yourself and say hello at{" "}
      <span className="email">waldemar@waldemarhansson.com</span>
    </p>
    <p>Ph +46 707 31 37 41</p>
  </div>

  <br />

  <div className="visit-website">
    <p>You can also visit</p>
    <ul>
      <li>
       <button><a href="https://www.waldemarhansson.se">WALDEMARHANSSON.SE</a></button> 
      </li>
    </ul>
  </div>
</section>

        </div>
    )
}

export default AboutMe;