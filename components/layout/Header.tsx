import Masthead from "./Masthead";
import Navbar from "./Navbar";
import { Menu,MenuItem } from "lib/Types";

const menu: Menu = {
    label: "Main Menu",
    items: [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            menu: {
                label: "About Menu",
                items: [
                    {
                        label: "Test",
                        href: "/"
                    },
                    {
                        label: "Test 2",
                        href: "/about"
                    }
                ]
            }
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ]
}

export default function(props) {
    return (
        <div id="header" className="bg-black">
            <Navbar menu={menu} />
            <Masthead heading={props.heading} subheading={props.subheading} />
        </div>
    )
}