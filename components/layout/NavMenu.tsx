import { Menu,MenuItem } from "lib/Types"
import MenuComponent from "./MenuComponent"

export default function(props) {
    return (
        <menu className="d-flex flex-row list-style-type-none m-0 p-0 text-white text-white font-size-1 font-leading-2 text-align-center">
            <MenuComponent menu={props.menu}/>
        </menu>
    )
}