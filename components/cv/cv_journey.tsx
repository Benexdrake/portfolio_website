import { getJourneys } from "@/lib/helper";
import { Fragment } from "react";
import style from '@/style_modules/about/cv_journey.module.css'

export default function CVJourneyBlock(props: any) {
    const type = props.type;
    const aboutMe = props.aboutMe;
    const title = props.title;

    return (
        <Fragment>
            <hr className={style.break_line}/>
                <h3 className={style.header}>{title}</h3>
            <div className={style.table}>
                {getJourneys(aboutMe.journeys, type).map(x => {
                    return (
                        <div key={x.type + '-' + x.title} className={style.table_row} >
                            <div>
                                <p>{x.date}</p>
                            </div>
                                <p>{x.title} - {x.description}</p>
                                
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}