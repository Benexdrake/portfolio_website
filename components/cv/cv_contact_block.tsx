import { Fragment } from "react";
import style from '@/style_modules/about/cv_contact_block.module.css'

export default function CvContactBlock(props: any) {
    const aboutMe = props.aboutMe;
    return (
        <Fragment>
            <div className={style.table}>
                <div className={style.table_row}>
                    <div className={style.icon}>
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className={style.link}>
                        {aboutMe.tel}
                    </div>
                </div>
                <div className={style.table_row}>
                    <div className={style.icon}>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                        <a href={`mailto:${aboutMe.email}`} className={style.link}>{aboutMe.email}</a>
                    </div>
                </div>
                <div className={style.table_row}>
                    <div className={style.icon}>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div>
                        <a href={aboutMe.linkedin} target="_blank" className={style.link}>Linkedin</a>
                    </div>
                </div>
                <div className={style.table_row}>
                    <div className={style.icon}>
                        <i className="fa-brands fa-github"></i>
                    </div>
                    <div>
                        <a href={aboutMe.github} target="_blank" className={style.link}>Github</a>
                    </div>
                </div>
                <div className={style.table_row}>
                    <div className={style.icon}>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className={style.link}>
                        {aboutMe.location}
                    </div>
                </div>
                <div className={style.table_row}>
                    <div className={style.icon}>
                        <i className="fa-solid fa-language"></i>
                    </div>
                    <div className={style.link}>
                        {aboutMe?.language?.join(', ')}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}