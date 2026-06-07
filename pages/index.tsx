import Header from '../components/layout/Header'
import Grid from '../components/display/Grid'
import Image from '../components/layout/Image'

export default function Page() {
    return (
        <main>
            <Header heading="Lorem Ipsum" subheading="Dolor Sit Amet" />
            <div id="content" className="container">
                <div className="bg-secondary-albedo py-1">
                    <div className="col-10 offset-1">
                        <p id="intro" className="col-12 font-size-1 font-weight-300 text-transform-uppercase font-width-151 my-1 font-tracking-20 hover-font-weight-500 user-select-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-10 offset-1 py-2">
                    <div className='col-12 col-m-6 v-align-center'>
                        <p className='font-size-2 font-leading-1'>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>                    
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
                        <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
                    </div>
                    <div className='col-12 col-m-6'>
                        <Image src="/img/header.jpg"/>
                    </div>
                </div>
            </div>
        </main>
    )
}