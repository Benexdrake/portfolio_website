import { Skill } from "@/models/aboutMe";

import { getSkills, getStars } from "@/lib/helper";
import SkillBlock from "../skills/skillBlock";

export default function Skills(props: any) {
  let skills = props.skills as Skill[];


  return (
    <div className="box">
      <h1 className="header4">Skills</h1>
      <hr className="color3"/>
      <br />
      <div className="skills_block">
        <SkillBlock skills={getSkills('frontend',skills)} title="Frontend"/>
        <br />
        <SkillBlock skills={getSkills('backend',skills)} title="Backend"/>
        <br />
        <SkillBlock skills={getSkills('others',skills)} title="Others"/>
       

        </div>
    </div>
  )
}