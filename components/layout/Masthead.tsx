export default function(props) {
    console.log(props.image);
    return (
        <div id="masthead" style={{backgroundImage: `url('` + props.image + `'`}} className="d-flex flex-column gap-1 pb-3 pt-10 text-white">
            <div className="row">
            <h1 className="col-10 offset-1 font-size-5 font-weight-700 hover-font-weight-800 font-leading-4 font-width-151 mt-5 user-select-none">{props.heading}</h1>
            <h2 className="col-10 offset-1 font-size-3 font-leading-2 font-weight-300 hover-font-weight-500 font-width-151 font-weight-300 user-select-none">{props.subheading}</h2>
            </div>
        </div>
    )
}