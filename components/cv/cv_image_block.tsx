import { Fragment } from "react";
import Image from 'next/image';
import style from '@/style_modules/about/cv_image_block.module.css'

export default function CvImageBlock(props: any) {
    const aboutMe = props.aboutMe;
    return (
        <div className={style.cv_image_block}>
            <Image src="/assets/Me.png" width={250} height={250} alt="" className={style.aboutMe_image}/>
                <h2 className={style.header1}>{aboutMe.name}</h2>
                <h4 className={style.header2}>Fullstack Developer</h4>
        </div>
    )
}