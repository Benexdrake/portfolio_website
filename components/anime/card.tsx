export default function AnimeCard(props:any)
{
    let anime = props.anime;
    console.log(anime)
    return (
        <p>{anime.title}</p>
    )
}