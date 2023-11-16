import { getIcon, getStars } from "@/lib/helper";
import { Skill } from "@/models/aboutMe";

export default function SkillBlock(props:any)
{
    let skills = props.skills as Skill[];
    let title = props.title as string;

    return (
        <article key={title} style={{textAlign:'center', margin:'auto'}}>
        <h3 className="header3">{title}</h3>
        <br />
        <div className="skill_block">
          {skills.map(x => {
            if (x.type === title.toLowerCase()) {
              return (
                <div key={x.title} className="skill">
                  <img src={getIcon(x.icon)} alt="" height={50} />
                  <p>{getStars(x.stars)}</p>
                </div>
              )
            }
          })}
        </div>
      </article>
    )
}