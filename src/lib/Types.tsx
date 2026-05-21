export type Menu = {
    label?: string;
    items: MenuItem[];
}

export type MenuItem = {
    label: string;
    href?: string;
    menu?: Menu;
}