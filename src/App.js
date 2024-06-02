import './App.css';
import ViedeoPlayer from './components/ViedeoPlayer';
import VideoList from './components/VideoList';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import { useEffect, useState } from 'react';
import { getPlayList, getCompletedCount, getTotalVideosCount } from './services/PlayListController'
import NavBar from './components/NavBar';
import "./css/home.css"
import Loader from './components/Loader';


function App() {
  const [Loading, setLoading] = useState(false)
  const [Video, setVideo] = useState({
    "id": 0,
    "title": "Video 0",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "completed": false
  })
  const [CompletedVideo, setCompletedVideo] = useState({})
  const [PlayList, setPlayList] = useState([])
  const [CompletedCount, setCompletedCount] = useState(0)
  const [CountTotalVideos, setCountTotalVideos] = useState(0)

  useEffect(() => {
    setLoading(true)
    getPlayList()
      .then((response) => {
        setPlayList(response.data)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    getCompletedCount()
      .then((response) => {
        setCompletedCount(response.data)
      })
  }, [])

  useEffect(() => {
    getTotalVideosCount()
      .then((response) => {
        setCountTotalVideos(response.data)
      })
  }, [])

  const handleOnClick = (video) => {
    // setLink(video.url)
    setVideo(video)
  }

  // Todo: still not completed
  const handleOnClickCompleted = (groupId, videoId) => {
    const something = PlayList.filter(group => group.id === Number(groupId))[0].videos.filter(video => video.id === Number(videoId))[0]
    console.table(something);
    setCompletedVideo({ ...something, "completed": !something.completed })
    console.table(CompletedVideo);
    setPlayList([...PlayList, PlayList.map(group => group.id === Number(groupId) ? { ...group, ...group.videos = [group.videos, ...group.videos.map(video => video.id === Number(videoId) ? something : video)] } : group)])
  }

  // if (Loading) return <Loader />
  return (
    <div className="App">
      <NavBar title={Video.title} CompletedCount={CompletedCount} CountTotalVideos={CountTotalVideos} />
      {Loading && <Loader />}
      <div className='row mx-3'>
        <div className='col-3 m-0 p-2'>
          <VideoList className="col-3" PlayList={PlayList} handleOnClick={handleOnClick} setPlayList={setPlayList} />
        </div>
        <div className='col-9 m-0 p-2 '>
          {!Loading && <ViedeoPlayer video={Video} />}
        </div>
      </div>
    </div>
  );
}

export default App;
