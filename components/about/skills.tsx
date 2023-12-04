import { Skill } from "@/types/aboutMe";
import { getSkills} from "@/lib/helper";
import SkillBlock from "../skills/skillBlock";

import style from '@/style_modules/home/index.module.css'

export default function Skills(props: any) {
  let skills = props.skills as Skill[];

  return (
    <div className={style.box}>
      <h1 className={style.header}>Skills</h1>
      <hr className={style.break_line}/>
      <br />
      <div>
        <SkillBlock skills={getSkills('frontend',skills)} title="Frontend"/>
        <br />
        <SkillBlock skills={getSkills('backend',skills)} title="Backend"/>
        <br />
        <SkillBlock skills={getSkills('others',skills)} title="Others"/>
        </div>
    </div>
  )
}