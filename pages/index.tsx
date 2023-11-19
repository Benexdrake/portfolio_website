import AboutMeBlock from "@/components/about/aboutMe"
import Github from "@/components/about/github"
import Skills from "@/components/about/skills"
import AboutMe_Service from "@/services/aboutMe"
import {GetGithubUser, GetLastUpdatedProject} from "@/services/github";
import { GithubUser } from "@/types/githubUser";
import { AboutMe } from "@/types/aboutMe";
import { Project } from "@/types/project";

import style from '@/style_modules/home/index.module.css'

export default function Home(props:any) 
{
let aboutMe = props.aboutMe as AboutMe;  
let user = props.user;
let project = JSON.parse(props.str);

  return (
    <div className={style.container}>
      <AboutMeBlock aboutMe={aboutMe}/>

      <Skills skills = {aboutMe.skills}/>

      <Github user={user} project={project}/>
    </div>
  )
}

export async function getServerSideProps()
{
  let aboutMe = await AboutMe_Service() as AboutMe;
  let user = await GetGithubUser() as GithubUser;
  let project = await GetLastUpdatedProject() as Project;

  let str = JSON.stringify(project)

  return {
    props: {
      aboutMe,
      user,
      str
    }
  }

}
