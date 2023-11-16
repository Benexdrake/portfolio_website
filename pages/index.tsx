import AboutMeBlock from "@/components/about/aboutMe"
import Github from "@/components/about/github"
import Skills from "@/components/about/skills"
import AboutMe_Service from "@/services/aboutMe"
import {GetGithubUser, GetLastUpdatedProject} from "@/services/github";
import { GithubUser } from "@/models/githubUser";
import { Project } from "@/models/project";

export default function Home(props:any) 
{
let aboutMe = props.aboutMe;  
let user = props.user;
let project = JSON.parse(props.str);

  return (
    <div className="container">
      <AboutMeBlock aboutMe={aboutMe}/>

      <Skills skills = {aboutMe.skills}/>

      <Github user={user} project={project}/>
    </div>
  )
}

export async function getServerSideProps()
{
  let aboutMe = await AboutMe_Service();
  let user = await GetGithubUser() as GithubUser;
  let project = await GetLastUpdatedProject();

  let str = JSON.stringify(project)

  return {
    props: {
      aboutMe,
      user,
      str
    }
  }

}
