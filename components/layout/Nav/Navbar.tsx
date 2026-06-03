import MenuConstructor from "./MenuConstructor"
import toggleCollapse from "lib/Functions/ToggleCollapse"

export default function(props) {
    return (
        <nav className="w-100 position-fixed bg-white text-black p-2">
            <div className="col-10 offset-1">
                <div className="d-flex flex-column flex-s-row text-align-center text-align-m-left justify-space-between align-items-center">
                    <h6 id="brand" className="font-weight-400 hover-font-weight-800 font-width-151 cursor-pointer user-select-none">Site Name</h6>
                    <div className="d-flex nav-menu">
                        <a className="w-100 cursor-pointer py-1 d-m-none d-flex hamburger" onClick={toggleCollapse}></a>
                        <MenuConstructor menu={props.menu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}