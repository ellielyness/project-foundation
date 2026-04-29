export default function() {
    return (
        <nav className="d-flex flex-row justify-space-between p-3 w-100 position-fixed bg-black">
            <h6 id="brand" className="text-secondary-albedo font-weight-400 hover-font-weight-800 font-width-151 cursor-pointer user-select-none font-leading-2">Site Name</h6>
            <ul className="d-flex flex-row text-white list-style-type-none p-0 m-0">
                <li className="w-100 font-leading-2 px-1">Home</li>
                <li className="w-100 font-leading-2 px-1">Blog</li>
                <li className="w-100 font-leading-2 px-1">Contact</li>
            </ul>
        </nav>
    )
}