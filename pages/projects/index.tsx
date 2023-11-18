import ProjectCard from "@/components/project/projectCard";

export default function Projects()
{

    return (
        <div className="container">
            <div className="row" style={{gap:'10px', paddingTop:'10%', textAlign:'center', justifyContent:'center'}}>
                <div className="col-xl-4 col-lg-6">
                    <ProjectCard route="/github" image="github.png" title="Github" description="Github repositories" />
                </div>
                <div className="col-xl-4 col-lg-6">
                    <ProjectCard route="/crunchyroll" image="crunchyroll.png" title="Crunchyroll" description="Scraped Animes from Crunchyroll" />
                </div>
                <div className="col-xl-4 col-lg-6">
                    <ProjectCard route="/pokedex" image="pokemon.jpg" title="Pokemon" description="Scraped Pokemon from Pokemon.com" />
                </div>
            </div>
        </div>
    )
}