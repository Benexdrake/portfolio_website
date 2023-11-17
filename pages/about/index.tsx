import CvImageBlock from '@/components/cv/cv_image_block';
import CvContactBlock from '@/components/cv/cv_contact_block';
import CvTableBlock from '@/components/cv/cv_table_row';
import CvSkillsBlock from '@/components/cv/cv_skills_block';
import AboutMe_Service from '@/services/aboutMe';

export default function CV(props: any) {
  const aboutMe = props.aboutMe;
  return (
    <div>
      {aboutMe && (
        <div className="container">
          <div className="row">
            <div className="cv-left">
              <div>
                <CvImageBlock aboutMe={aboutMe} />
                <hr className="color4 break_line" />
                <div className='header3'>
                  <h3 className="color3">CONTACT INFO</h3>
                </div>
                

                <CvContactBlock aboutMe={aboutMe} />
                <hr className="color4  break_line"/>
                <div>
                  <div className='header3'>
                    <h3 className="color3">SKILLS</h3>
                  </div>
                      <CvSkillsBlock skills={aboutMe.skills} type="frontend" title="Frontend"/>
                      <CvSkillsBlock skills={aboutMe.skills} type="backend" title="Backend" />
                      <CvSkillsBlock skills={aboutMe.skills} type="others" title="Others" />
                </div>
              </div>
            </div>
            <div className="cv-right" >
              
                <h3 className="color3 header3">PROFILE</h3>
              {aboutMe.profileText.map((x: string) => { return <p style={{maxWidth:'600px'}} key={x} className='color1'>{x}</p> })}
              <CvTableBlock aboutMe={aboutMe} type="experience" title="EXPERIENCE" />
              <CvTableBlock aboutMe={aboutMe} type="education" title="EDUCATION" />
              </div>
            </div>
          </div>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const aboutMe = await AboutMe_Service();

  return {
    props: {
      aboutMe
    }
  }
}
