import Header from '../components/layout/Header'
import Grid from '../components/display/Grid'

export default function Page() {
    return (
        <main>
            <Header heading="Lorem Ipsum" subheading="Dolor Sit Amet" />
            <div id="content" className="container">
                <div className="bg-secondary-albedo py-1">
                    <div className="col-10 offset-1">
                        <p id="intro" className="col-12 font-size-2 my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                    </div>
                </div>
                <div className="col-10 offset-1 py-2">
                    <p className="col-12 col-m-6">An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="col-12 col-m-6">An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>           
                </div>
            </div>
        </main>
    )
}