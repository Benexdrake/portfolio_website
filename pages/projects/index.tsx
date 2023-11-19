import ProjectCard from "@/components/project/projectCard";
import style from '@/style_modules/project/index.module.css'

export default function Projects()
{

    return (
        <div className={style.container}>
            <div className={style.row}>
                    <ProjectCard route="/github" image="github.png" title="Github" description="Github repositories" />
                    <ProjectCard route="/crunchyroll" image="crunchyroll.png" title="Crunchyroll" description="Scraped Animes from Crunchyroll" />
                    <ProjectCard route="/pokedex" image="pokemon.jpg" title="Pokemon" description="Scraped Pokemon from Pokemon.com" />
            </div>
        </div>
    )
}