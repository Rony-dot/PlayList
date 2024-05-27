import React, { useState } from 'react'

const VideoList = ({ PlayList, handleOnClick }) => {
    const [SelectedItem, setSelectedItem] = useState({})
    const handleSelectItem = (item) => {
        if (SelectedItem.id === item.id) {
            return setSelectedItem({})
        }
        setSelectedItem(item)
    }

    return (
        <>
            {
                PlayList.map((item, i) => (
                    <ul key={i} className='list-group list-group-flush'>
                        <h5 onClick={() => { handleSelectItem(item) }} className=' playlist-group px-3 py-2 '><i className={SelectedItem.id === item.id ? "bi bi-caret-down" : "bi bi-caret-right"}></i> {item.title}</h5>
                        {SelectedItem.id === item.id && item.videos.map((video, j) => (
                            <li key={j} onClick={() => handleOnClick(video)} className="handle-overflow playlist-item px-3 py-2 list-group-item list-group-item-action">{video.title} <i className="bi bi-play-circle"></i>
                            </li>
                        ))}
                    </ul >
                ))
            }
        </>
    )
}

export default VideoList