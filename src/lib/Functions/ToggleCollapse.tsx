export default function toggleCollapse(event:Event) {
    const btn = event.target;
    const element = btn.parentElement.children[1];
    
    if (element.classList.contains('collapsed')) {
        element.classList.add('expanded');
        element.classList.remove('collapsed');
        btn.classList.add('toggled');
    } else {
        element.classList.remove('expanded');
        element.classList.add('collapsed');
        btn.classList.remove('toggled');
    }

}