import { getSkills, getStars } from "@/lib/helper";
import { Skill } from "@/types/aboutMe";
import { Fragment } from "react";
import style from '@/style_modules/about/cv_skills_block.module.css'

export default function CvSkillsBlock(props: any) {
  const skills = props.skills;
  const type = props.type;
  const title = props.title;

  return (
    <Fragment>
      <h4 className={style.header}>{title}</h4>
      <div className={style.table}>
        {getSkills(type, skills).map((x: Skill) => {
          return (
            <div key={x.title + x.type} className={style.table_row}>
              <div className={style.table_cell_left}><strong>{x.title}</strong></div>
              <div className={style.table_cell_right}>{getStars(x.stars)}</div>
            </div>
          )
        })}
      </div>
    </Fragment>
  );
}