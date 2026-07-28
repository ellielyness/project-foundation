import Header from '../components/layout/Header'
import Grid from '../components/display/Grid'
import Carousel from '../components/layout/Carousel/Carousel'
import ImageCaption from '../components/layout/Typography/ImageCaption'

const carouselData = {
    // captionBg: "bg-secondary",
    // captionColor: "text-secondary-albedo",
    items: [
        {
            src: "/img/header.jpg",
            caption: "Image 1"
        },
        {
            src: "/img/header.jpg",
            caption: "Image 2"
        },
        {
            src: "/img/header.jpg",
            caption: "Image 3"
        }
    ]
}

export default function Page() {
    return (
        <main>
            <Header heading="Lorem Ipsum" subheading="Dolor Sit Amet" />
            <div id="content" className="container-fullwidth">
                <div className="row bg-secondary-albedo py-1">
                    <p id="intro" className="col-10 offset-1 font-size-1 font-weight-300 text-transform-uppercase font-width-151 my-1 font-tracking-20 hover-font-weight-500 user-select-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="row py-2">
                    <div className='col-10 col-m-5 offset-1'>
                        <p className='font-size-2 font-leading-1'>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>                    
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
                    </div>
                    <div className='col-10 offset-1 offset-m-0 col-m-5 py-2'>
                        <img src="/img/header.jpg" />
                        <ImageCaption caption="This is a test caption to show an example" />
                    </div>
                </div>
                <div className="row bg-secondary-albedo py-2">
                    <div className="col-10 offset-1 col-m-5">
                        <Carousel data={carouselData}/>
                    </div>
                    <div className="col-10 offset-1 offset-m-0 col-m-5">
                        <form>
                            <label htmlFor="input">Test</label>
                            <div className="d-flex gap-1">
                                <input className="my-1 p-1 border-none d-block w-100 font-size-1 font-leading-normal" id="input1" name="input1" placeholder="test"></input>
                            </div>
                            <button className="bg-secondary-absorption text-white font-size-1 font-leading-normal p-1 border-none" type="submit">Test</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </main>
    )
}