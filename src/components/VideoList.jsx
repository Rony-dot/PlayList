import React, { useState } from 'react'

const VideoList = ({ PlayList, handleOnClick, setPlayList }) => {
    const [SelectedItem, setSelectedItem] = useState({})
    const [Completed, setCompleted] = useState(false)
    const [CompletedVideoGroup, setCompletedVideoGroup] = useState({
        "id": -1,
        "title": "group minus -1",
        "videos": [
            {
                "id": -1,
                "title": "video minus -1",
                "url": "#",
                "completed": false,
                "duration": 0
            }
        ]
    })
    const handleOnChange = (e) => {
        const { id, value } = e.target
        // console.log("group id: " + id + ", video value: " + value);
        // find:: the clicked video's group
        const effectedGroup = PlayList.find(group => { return group.id === Number(id) })
        // console.table(effectedGroup)
        // console.log("== effectedGroup.videos ==");
        // console.table(effectedGroup.videos)
        // find:: now the clicked video from that group
        // const effectedVideos = effectedGroup.videos.map(video => video.id === Number(value) ? { ...video, "completed": !video.completed } : video)
        // console.log("== effectedVideos ==");
        // console.table(effectedVideos)
        // update:: update the video's attribute "completed" in that group, and set it to a new object
        setCompletedVideoGroup({ ...effectedGroup, "videos": [...effectedGroup.videos.map(video => video.id === Number(value) ? { ...video, "completed": !video.completed } : video)] })
        // console.log("== completedVideoGroup.videos ==");
        // console.table(CompletedVideoGroup.videos);
        // console.log("== completedVideoGroup ==");
        // console.table(CompletedVideoGroup);
        // console.log(CompletedVideoGroup);

        // update:: update the main Playlist's group, with that new updated group in it
        setPlayList([...PlayList.map(group => group.id === CompletedVideoGroup.id ? CompletedVideoGroup : group)])
        // todo: need to complete, (checkbox click => mark as complete)
        // handleOnClickCompleted(id, value)
    }

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
                            <li key={j} className="ps-2 handle-overflow playlist-item list-group-item list-group-item-action">
                                <div className="row p-0 m-0 small text-start">
                                    <div className="col-md-1">
                                        <div className="form-check py-0 my-0">
                                            <input onChange={handleOnChange} className="form-check-input" type="checkbox" value={video.id} id={item.id} checked={video.completed} />
                                        </div>
                                    </div>
                                    <div className="col-md-11" onClick={() => handleOnClick(video)} >
                                        <p className='py-0 my-0 sub-small'>{video.title}</p>
                                        <p className='m-0 my-1 sub-sub-small'>
                                            <i className="bi bi-play-btn"></i>
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