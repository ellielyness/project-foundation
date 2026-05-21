export default function toggleCollapse(event:Event) {
    const target = event.target;
    const toggleElement = target.parentElement.children[1];

    if (toggleElement.classList.contains('d-none')) {
        target.classList.remove('toggled');
        toggleElement.classList.remove('d-none');
    } else {
        toggleElement.classList.add('d-none');
        target.classList.add('toggled');
    }

    console.log('nav toggled');
    
}