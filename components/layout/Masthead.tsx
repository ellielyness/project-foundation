export default function(props) {
    return (
        <div id="masthead" className="d-flex flex-column gap-1 px-8 pb-3 pt-10 text-white">
            <h1 className="font-size-5 font-leading-4 font-width-151">{props.heading}</h1>
            <h2 className="font-size-3 font-leading-2 font-width-151 font-weight-300">{props.subheading}</h2>
        </div>
    )
}