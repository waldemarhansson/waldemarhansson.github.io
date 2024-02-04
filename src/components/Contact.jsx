

const Contact = () => {
  const openMailProgram = () => {
    // You can use a mailto link to open the user's default mail program
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="contact-info">

      <span className="email">Linnegatan 4 | 114 47 Stockholm | +46 707 31 37 41 <br /> hello@visualstorytelling.se</span>

    </div>
  )
}
export default Contact;