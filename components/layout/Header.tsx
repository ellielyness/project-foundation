import Masthead from "./Masthead";
import Navbar from "./Navbar";

export default function(props) {
    return (
        <div id="header" className="bg-black">
            <Navbar />
            <Masthead heading={props.heading} subheading={props.subheading} />
        </div>
    )
}