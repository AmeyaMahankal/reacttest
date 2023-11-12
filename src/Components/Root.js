import { Link, Outlet } from "react-router-dom"
import '../Styles/App.css';

export default function Appl() {
    return (
        <>
            <div>
                <Link to="/">Pokedex</Link>

            </div>
            <Outlet />
        </>
    )
}