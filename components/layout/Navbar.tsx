import NavMenu from "./NavMenu"
import toggleNavbar from "lib/Functions/ToggleNavbar"

export default function(props) {
    return (
        <nav className="d-flex flex-column flex-m-row text-align-center text-align-m-left justify-space-between p-3 w-100 position-fixed bg-black">
            <h6 id="brand" className="text-secondary-albedo font-weight-400 hover-font-weight-800 font-width-151 cursor-pointer user-select-none font-leading-2">Site Name</h6>
            <div className="d-flex">
                <a className="w-100 cursor-pointer leading-2 py-1 text-white d-m-none d-flex hamburger toggled" onClick={toggleNavbar}></a>
                <NavMenu menu={props.menu} />
            </div>
            
        </nav>
    )
}