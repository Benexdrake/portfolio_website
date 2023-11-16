import Link from "next/link";

export default function Navbar()
{
    return (

        <nav className="navbar_body">
            <div className="navbar_links">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="About">About</Link></li>
                    <li><Link href="Projects">Projects</Link></li>
                    <li><Link href="Contact">Contact</Link></li>
                    <li><Link href="Impressum">Impressum</Link></li>
                </ul>
            </div>
    </nav>
    )
}