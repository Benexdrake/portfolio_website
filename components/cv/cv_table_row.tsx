import { getJourneys } from "@/lib/helper";
import { Fragment } from "react";

export default function CvTableBlock(props: any) {
    const type = props.type;
    const aboutMe = props.aboutMe;
    const title = props.title;

    return (
        <Fragment>
            <hr className="color1 break_line" />
            <div className='d-flex justify-content-center'>
                <h3 className="color3 header3">{title}</h3>
            </div>
            <div className='css-table color1'>
                {getJourneys(aboutMe.journeys, type).map(x => {
                    return (
                        <div key={x.type + '-' + x.title} className='css-table-row' >
                            <div style={{paddingRight:'20px'}}>{x.date}</div>
                            <div className=''>
                                {x.title}
                                <br />
                                {x.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}