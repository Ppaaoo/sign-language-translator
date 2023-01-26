import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const NavBar = () => {

    const {user} = useUser()
    return (
        <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <p class="text-xl text-white pr-2 font-semibold">Lost in Translation</p>
                { user !== null &&
                <div class="flex items-center">
                    <div class="py-4 text-white opacity-60 hover:opacity-80 focus:opacity-80 p-2">
                            <NavLink to="/profile">Profile</NavLink>
                    </div>
                    <div class="py-4 text-white opacity-60 hover:opacity-80 focus:opacity-80 p-2">
                            <NavLink to="/translate">Translate</NavLink>
                    </div>
                </div>
                }
            </div>
        </nav>
    )
}
export default NavBar