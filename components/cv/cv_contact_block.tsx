import { Fragment } from "react";

export default function CvContactBlock(props: any) {
    const aboutMe = props.aboutMe;
    return (
        <Fragment>
            <div className='css-table'>
                <div className='css-table-row'>
                    <div className="cv_icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className='link'>
                        {aboutMe.tel}
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='cv_icon'>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                        <a href={`mailto:${aboutMe.email}`} className="link">{aboutMe.email}</a>
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='cv_icon'>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                        <a href={aboutMe.linkedin} target="_blank" className="link">Linkedin</a>
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='cv_icon'>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div>
                        <a href={aboutMe.github} target="_blank" className="link">Github</a>
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='cv_icon'>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className='link'>
                        {aboutMe.location}
                    </div>
                </div>
                <div className='css-table-row'>
                    <div className='cv_icon'>
                        <i className="fa-solid fa-language"></i>
                    </div>
                    <div className='link'>
                        {aboutMe?.language?.join(', ')}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}