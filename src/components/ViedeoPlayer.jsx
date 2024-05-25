import React from 'react'
import ReactPlayer from 'react-player'


const ViedeoPlayer = ({ video }) => {
    const { id, title, url } = video
    return (
        <div>
            <ReactPlayer
                url={url}
                playing={false}
                controls={true}
                width="100%"
                height={"500px"}
            />
            <h4>{title}</h4>
        </div>
    )
}

export default ViedeoPlayer