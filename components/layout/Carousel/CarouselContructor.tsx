import ImageCaption from "../Typography/ImageCaption";

function Wrapper(data) {
    const items = data.data.items;
    console.log(items);
    return (
        <div className="carouselContent">
            {items.map((item,index) => (
                <div key={index} className="carouselItem">
                    <img alt={item.caption} src={item.src} key={index}/>
                    {item.caption &&
                        <ImageCaption bg={data.data.captionBg} color={data.data.captionColor} position="Above" caption={item.caption} />
                    }
                </div>
                    
                )
            )}
        </div>
    )
}

export default function(data) {
    return <Wrapper color={data.color} data={data.data}/>;
}