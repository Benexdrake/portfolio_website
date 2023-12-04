import AnimeCard from "@/components/anime/card";
import axios from "axios";

export default function Crunchyroll(props:any)
{
    let animes = props.animes;
    return (
        <div>{animes.map((x:any) => {return <AnimeCard anime={x}/>})}</div>
    )
}

export async function getServerSideProps()
{
    let animes = await axios.get('http://localhost:5235/animes').then(x => {return x.data});

    return {
        props: {animes}
    }
}