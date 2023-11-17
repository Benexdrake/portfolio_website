import Link from "next/link";

export default function Navbar()
{
    return (

        <nav className="navbar_body">
            <div className="navbar_links">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="about">About</Link></li>
                    <li><Link href="projects">Projects</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                    <li><Link href="impressum">Impressum</Link></li>
                </ul>
            </div>
    </nav>
    )
}