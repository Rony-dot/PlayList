import React from 'react'
import ReactPlayer from 'react-player'


const ViedeoPlayer = ({ video }) => {
    const { id, title, url } = video
    return (
        <>
            <ReactPlayer
                url={url}
                playing={false}
                controls={true}
                width="100%"
                height={"500px"}
            />
            <h4 className='text-light border handle-overflow px-5 py-2' style={{ width: "100%" }}>{title}</h4>
        </>
    )
}

export default ViedeoPlayer