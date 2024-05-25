import React, { useState } from 'react'

const VideoList = ({ PlayList, handleOnClick }) => {
    const [SelectedItem, setSelectedItem] = useState({})
    const handleSelectItem = (item) => {
        setSelectedItem(item)
    }

    return (
        <div className="list-group list-group-flush">
            {
                PlayList.map((item, i) => (
                    <div key={i} onClick={() => { handleSelectItem(item) }}>
                        <h5 className='playlist-group'> {item.title} </h5>
                        {SelectedItem.id === item.id && item.videos.length > 0 && item.videos.map((video, j) => (
                            <li key={j} onClick={() => handleOnClick(video)} className="playlist-item list-group-item list-group-item-action">{video.title}</li>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default VideoList