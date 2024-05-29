import React, { useState } from 'react'

const VideoList = ({ PlayList, handleOnClick, handleOnClickCompleted }) => {
    const [SelectedItem, setSelectedItem] = useState({})
    const handleSelectItem = (item) => {
        if (SelectedItem.id === item.id) {
            return setSelectedItem({})
        }
        setSelectedItem(item)
    }

    const calculateMinuteFromMilis = (milis) => {
        const h = Math.floor(milis / 1000 / 60 / 60);
        const m = Math.floor((milis / 1000 / 60 / 60 - h) * 60);
        const s = Math.floor(((milis / 1000 / 60 / 60 - h) * 60 - m) * 60);

        const seconds = s < 10 ? `0${s}` : `${s}`;
        const minutes = m < 10 ? `0${m}` : `${m}`;
        const hours = h < 10 ? `0${h}` : `${h}`;

        return hours > 0 ? `${hours}h ${minutes}m` : minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`
    }

    const getCompletedVideosCount = (group) => {
        var acc = 0;
        group.videos.forEach(video => { video.completed === true ? acc += 1 : acc += 0; });
        return acc;
    }

    const getTotalVideosCount = (group) => {
        return group.videos.length;
    }

    const getTotalDurration = (group) => {
        var totalDuration = 0;
        group.videos.forEach(video => { totalDuration += video.duration });
        return calculateMinuteFromMilis(totalDuration);
    }


    return (
        <>
            {
                PlayList.map((item, i) => (
                    <ul key={i} className='list-group list-group-flush'>
                        <li className='ps-2 handle-overflow playlist-group mt-1' onClick={() => { handleSelectItem(item) }}>
                            <div className="row p-0 m-0 small">
                                <div className="col-md-10 text-start">
                                    <p className=' py-0 my-0 pt-2 fw-bold'>
                                        Section {i}: {item.title}
                                    </p>
                                    <p className='sub-small py-0 my-0 pb-2'>{getCompletedVideosCount(item)} / {getTotalVideosCount(item)} | {getTotalDurration(item)}</p>
                                </div>
                                <div className="col-md-2  pt-2">
                                    <i className={SelectedItem.id === item.id ? "bi bi-chevron-up " : "bi bi-chevron-down"} />
                                </div>
                            </div>
                        </li>
                        {SelectedItem.id === item.id && item.videos.map((video, j) => (
                            <li key={j} onClick={() => handleOnClick(video)} className="ps-2 handle-overflow playlist-item list-group-item list-group-item-action">
                                <div className="row p-0 m-0 small text-start">
                                    <div className="col-md-1">
                                        <div className="form-check py-0 my-0">
                                            <input onClick={() => handleOnClickCompleted(video)} className="form-check-input" type="checkbox" value="" id="isCompleted" checked={video.completed} />
                                        </div>
                                    </div>
                                    <div className="col-md-11 ">
                                        <p className='py-0 my-0 sub-small'>{video.title}</p>
                                    </div>
                                </div>
                                <div className="row p-0 m-0 mt-1 small">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-11 text-start ">
                                        <p className='p-0 m-0 sub-sub-small'>
                                            <i class="bi bi-play-btn"></i>
                                            &nbsp;{calculateMinuteFromMilis(video.duration)}
                                        </p>
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