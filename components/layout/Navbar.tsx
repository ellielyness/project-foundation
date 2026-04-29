import NavMenu from "./NavMenu"
export default function(props) {
    return (
        <nav className="d-flex flex-row justify-space-between p-3 w-100 position-fixed bg-black">
            <h6 id="brand" className="text-secondary-albedo font-weight-400 hover-font-weight-800 font-width-151 cursor-pointer user-select-none font-leading-2">Site Name</h6>
            <NavMenu menu={props.menu} />
        </nav>
    )
}