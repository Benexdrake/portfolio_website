import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props: any) {
  const image = props.image;
  const title = props.title;
  const description = props.description;
  const route = props.route;

  return (
    <Link href={route} style={{ textDecoration: 'none' }}>

<div className="article-card">
    <div className="content">
      <p className="description">{description}</p>
    </div>
    <img src={`/assets/projects/${image}`} alt="" />
  </div>
    </Link>
  );

}