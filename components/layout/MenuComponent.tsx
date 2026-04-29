import { Menu, MenuItem } from "lib/Types";
import toggleCollapse from "lib/Functions/ToggleCollapse";

function MenuList({ items, collapsed = false }: { items: MenuItem[]; collapsed?: boolean; }) {
  return (
    <ul className={collapsed ? "collapsed w-100" : "w-100"}>
      {items.map((item, index) => (
        <li className="w-100 w-min-8" key={index}>
          {item.href ? <a className="d-flex justify-center align-center w-100" href={item.href}>{item.label}</a> : item.menu ? <a onClick={toggleCollapse} className="d-flex justify-center align-center w-100 cursor-pointer dropdown">{item.label}</a> : item.label}

          {item.menu ? (
            <MenuList collapsed={true} items={item.menu.items} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function MenuComponent({ menu }: { menu: Menu }) {
  return <MenuList items={menu.items} />;
}