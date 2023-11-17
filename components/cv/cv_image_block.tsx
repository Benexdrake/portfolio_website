import { Fragment } from "react";
import Image from 'next/image';

export default function CvImageBlock(props: any) {
    const aboutMe = props.aboutMe;
    return (
        <div style={{textAlign:'center'}}>
            <Image src="/assets/Me.png" width={250} height={250} alt="" className="aboutMe-Image" />
            <div className="d-flex justify-content-center">
                <h2 className="color4 header1">{aboutMe.name}</h2>
            </div>
            <div className="d-flex justify-content-center">
                <h4 className="color3 header3">Fullstack Developer</h4>
            </div>
        </div>
    )
}