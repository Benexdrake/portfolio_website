import { GithubUser } from "@/models/githubUser"
import { Project } from "@/models/project";
import { getImage } from "@/lib/helper";

export default function Github(props:any)
{

  let user = props.user as GithubUser;
  let project = props.project as Project;

    return (
        <div className="box">
        {user && (
<div>
<h1 className="header1">Github</h1>
<hr className="color3"/>
<br />
<div className="color4" style={{display:'flex', flexWrap:'wrap'}}>
<div>
  <img src={user.avatar} alt="" width={200} style={{padding:'auto', marginRight:'20px'}}/>
</div>
<div>
  <h2 className="color3">{user.name}, {user.location}</h2>
  <p>{user.bio}</p>
  <br />
  <div>
    <div className="css-table">
      <div className="css-table-row">
        <div>Repositories: </div>
        <div>{user.publicRepos}</div>
      </div>
      <div className="css-table-row">
        <div>Followers: </div>
        <div>{user.followers}</div>
      </div>
      <div className="css-table-row">
        <div>Following: </div>
        <div>{user.following}</div>
      </div>
    </div>
  </div>
  <div>
    On Github since {user.createdAt.split('T')[0]}
  </div>
</div>
<div style={{margin:'auto'}}>
<div className="github_project">
<a href={project.cloneUrl} target="_blank" style={{textDecoration:'none'}}>
    <div className="github_project_header">{project.name}</div>
    <div><img src={getImage(project.language)} alt="" className="github_project_image"/></div>
    <div className="github_project_footer"><p>{project.description || 'Open Project'}</p></div></a>
</div>

</div>

</div>
</div>



        )}
      </div>
    )
}