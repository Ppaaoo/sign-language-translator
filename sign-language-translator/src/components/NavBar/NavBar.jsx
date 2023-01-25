import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const NavBar = () => {

    const {user} = useUser()
    return (
        <nav>
            <ul style={{listStyle:'none'}}>
                <li>Lost in Translation</li>
            </ul>

            { user !== null &&
            <ul>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/translate">Translate</NavLink>
                </li>
            </ul>
            }
        </nav>
    )
}
export default NavBar