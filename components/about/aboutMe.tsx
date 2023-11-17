import { AboutMe } from "@/models/aboutMe";

export default function AboutMeBlock(abouttMe:any)
{
    let me = abouttMe.aboutMe as AboutMe;
    
    return (
        <div className="box">
          <h1 className="header1">About</h1>
          <hr className="color3"/>
          <br />
        <div className="box_items">
          <div style={{textAlign:'end'}}>
            <h5 className="color3">Hello I am</h5>
            <h1 className="color4">{me.name}</h1>
            <h3 className="color3">I am a {me.title}</h3>
            
            <p className="motivation-text">I am a motivated and versatile individual, always eager to take a new challenges.
                      With a passion for learning, i am dedicated to delivering high-quality results.
                      With a positive attitude and a growth mindset, i am ready to make a meaningful
                      contribution and achieve great things.</p>
                      <br />
                      <br />
            <div style={{textAlign:'end'}}>
            <a className="button" href="/Lebenslauf.pdf" target="_blank">
            <span></span>
    <span></span>
    <span></span>
    <span></span>
              Download CV</a>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div><img className="about_image" src="Me.png" alt="" />
          
          <div className="icons">
                <a href={me.github} className="icon">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href={me.linkedin} className="icon">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href={"mailto:"+me.email} className="icon">
                <i className="fa-solid fa-square-envelope"></i>
                </a>
            </div>

          </div>
          
        </div>
      </div>
    )
}