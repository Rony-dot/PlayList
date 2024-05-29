import React, { useState } from 'react'

const VideoList = ({ PlayList, handleOnClick, handleOnClickCompleted }) => {
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
                            <li key={j} onClick={() => handleOnClick(video)} className="ps-4 handle-overflow playlist-item px-3 py-2 list-group-item list-group-item-action">
                                <div className="row">
                                    <div className="col-md-1">
                                        <div className="form-check">
                                            <input onClick={() => handleOnClickCompleted(video)} className="form-check-input" type="checkbox" value="" id="isCompleted" checked={video.completed ? "true" : ""} />
                                        </div>
                                    </div>
                                    <div className="col-md-11 text-start">
                                        {video.title}
                                    </div>
                                </div>
                                <div className="row mt-1">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-11 text-start">
                                        <i class="bi bi-play-btn"></i>
                                        &nbsp;{video.duration}min
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul >
                ))
            }
        </>
    )
}

export default VideoList