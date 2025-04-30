import {headerNavLinks} from '../utilities/data.mjs';
console.log(headerNavLinks);
export default function Nav() {

    const navList = headerNavLinks.map((link) => {
        return (
            <li><a href={link.url}>{link.name}</a></li>
        )
    })


    return (
        <nav className="headerNav">
            <ul>{navList}</ul>
        </nav>
    )
}