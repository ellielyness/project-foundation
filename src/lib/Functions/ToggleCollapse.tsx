export default function toggleCollapse(event:Event) {
    const target = event.target;
    const toggleElement = target.parentElement.children[1];

    if (toggleElement.classList.contains('collapsed')) {
        toggleElement.classList.remove('collapsed');
        toggleElement.parentElement.classList.remove('h-3');
        toggleElement.classList.add('expanded');
        for (const child of toggleElement.children) {
            child.classList.add('h-3');
            child.classList.remove('h-0');
        }
    } else {
        toggleElement.classList.add('collapsed');
        toggleElement.classList.remove('expanded');
        for (const child of toggleElement.children) {
            child.classList.remove('h-3');
            child.classList.add('h-0');
        }

    }
    
}