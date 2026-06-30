export default function(data) {
    return (
        <p className={'caption ' + (data.bg ? data.bg : 'bg-secondary-albedo') + ' ' + (data.color ? data.color : 'text-secondary-absorption') + ' text-transform-uppercase font-tracking-20 font-weight-300 hover-font-weight-600'}>
            {data.position && 
                <span className='font-weight-500 hover-font-weight-900'>{data.position}:</span>
            }
            {data.caption}
        </p>
    )
}