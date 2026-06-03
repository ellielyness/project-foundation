import { Menu, MenuItem } from "lib/Types";
import toggleCollapse from "lib/Functions/ToggleCollapse";

function MenuList({ items, collapsed}: {items: MenuItem[]; collapsed?: boolean;}) {
    return (
        <ul className={collapsed ? "menu w-100 collapsed collapse-m" : "menu w-100 expanded collapse-m"}>
            {items.map((item,index) => (
                    <li className="w-100 w-min-8 font-leading-2" key={index}>
                        
                        {item.href ? <a className="d-flex justify-center w-100 hover-font-weight-800" href={item.href}>{item.label}</a> : item.menu ? <a onClick={toggleCollapse} className="d-flex justify-center align-center w-100 cursor-pointer dropdown hover-font-weight-800">{item.label}</a> : item.label}

                        {item.menu ? (
                            <MenuList collapsed={collapsed} items={item.menu.items} />
                        ) : null }

                    </li>
                )
            )}
        </ul>
    )
}

export default function({ menu }: { menu: Menu}) {
    return <MenuList items={menu.items} collapsed={true} />;
}