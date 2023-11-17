import { getSkills, getStars } from "@/lib/helper";
import { Skill } from "@/models/aboutMe";
import { Fragment } from "react";

export default function CvSkillsBlock(props:any)
{
    const skills = props.skills;
    const type = props.type;
    const title = props.title;

    return (
        <Fragment>
                        <h4 className="color4 header1">{title}</h4>
                      <div className='css-table' >
                        <div className=''>
                          {getSkills(type, skills).map((x: Skill) => {
                              return (
                                  <div key={x.title + x.type} className="css-table-row">
                                <div className="css-table-cell-left"><strong>{x.title}</strong></div>
                                <div className="stars css-table-cell-right">{getStars(x.stars)}</div>
                              </div>
                            )
                        })}
                        </div>
                      </div>
                        </Fragment>
    );
}