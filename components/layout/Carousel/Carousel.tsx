import CarouselContructor from "./CarouselContructor";

const carouselInteract = (e) => {
    const interactionType = e.target.getAttribute("data-interact")
    const firstItem = e.target.parentElement.parentElement.children[0].children[0];
    let m = firstItem.style.marginLeft.substring(0,firstItem.style.marginLeft.indexOf("%")) || 0;
    m = Number(m);

    if (interactionType == "next") {
        if ((m/-100) != firstItem.parentElement.children.length-1) {
            firstItem.style.marginLeft = (m-100) + "%";
        } else {
            firstItem.style.marginLeft = 0 + "%";
        }
    } else {
        console.log(m)
        if ((m/-100) != 0) {
            firstItem.style.marginLeft = (m+100) + "%";
        } else {
            firstItem.style.marginLeft = (firstItem.parentElement.children.length-1)*-100 + "%";
        }
    }

}

export default function(props) {
    return (
        <div className="carousel border-secondary-absorption shadow-secondary-tint-1-90">
            <CarouselContructor data={props.data}/>
            <div className="carouselControls bg-secondary-absorption text-secondary-albedo p-1">
                <span className="font-tracking-10 text-transform-uppercase font-weight-400 hover-font-weight-600" data-interact="prev" onClick={carouselInteract}>Prev</span><span className="font-tracking-10 text-transform-uppercase font-weight-400 hover-font-weight-600" data-interact="next" onClick={carouselInteract}>Next</span>
            </div>
        </div>
    ) 
}