import CvImageBlock from '@/components/cv/cv_image_block';
import CvContactBlock from '@/components/cv/cv_contact_block';
import CVJourneyBlock from '@/components/cv/cv_journey';
import CvSkillsBlock from '@/components/cv/cv_skills_block';
import AboutMe_Service from '@/services/aboutMe';

import style from '@/style_modules/about/about.module.css'

export default function CV(props: any) {
  const aboutMe = props.aboutMe;
  return (
    <div>
      {aboutMe && (
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.cv_left}>
              <div>
                <CvImageBlock aboutMe={aboutMe} />
                <hr className={style.break_line} />
                <CvContactBlock aboutMe={aboutMe} />
                <hr className={style.break_line} />
                <div>
                  <CvSkillsBlock skills={aboutMe.skills} type="frontend" title="Frontend" />
                  <CvSkillsBlock skills={aboutMe.skills} type="backend" title="Backend" />
                  <CvSkillsBlock skills={aboutMe.skills} type="others" title="Others" />
                </div>
              </div>
            </div>
            <div className={style.cv_right} >
              <h3 className={style.header}>PROFILE</h3>
              {aboutMe.profileText.map((x: string) => { return <p key={x} className={style.profile_text}>{x}</p> })}
              <CVJourneyBlock aboutMe={aboutMe} type="experience" title="EXPERIENCE" />
              <CVJourneyBlock aboutMe={aboutMe} type="education" title="EDUCATION" />
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
