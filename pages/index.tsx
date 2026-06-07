import Header from '../components/layout/Header'
import Grid from '../components/display/Grid'
import Carousel from '../components/layout/Carousel/Carousel'

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
                        <p className='caption bg-secondary-albedo text-transform-uppercase font-tracking-20 font-weight-300'><span className='font-weight-500'>Above:</span> This is a test caption to show an example</p>
                    </div>
                </div>
                <div className="row bg-secondary-albedo py-2">
                    <div className="col-10 offset-1 col-m-5">
                        <Carousel />
                    </div>
                </div>
                
            </div>
        </main>
    )
}