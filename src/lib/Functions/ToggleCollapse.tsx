export default function toggleCollapse(event:Event) {
    const target = event.target;
    const toggleElement = target.parentElement.children[1];

    if (toggleElement.classList.contains('collapsed')) {
        toggleElement.classList.remove('collapsed');
        target.classList.add('expanded');
    } else {
        toggleElement.classList.add('collapsed');
        target.classList.remove('expanded');
    }
    
}