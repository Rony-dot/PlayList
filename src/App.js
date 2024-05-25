import './App.css';
import ViedeoPlayer from './components/ViedeoPlayer';
import VideoList from './components/VideoList';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import { useEffect, useState } from 'react';
import { getPlayList } from './services/PlayListController'
import NavBar from './components/NavBar';
import "./css/home.css"
import Loader from './components/Loader';


function App() {
  const [Loading, setLoading] = useState(false)
  const [Video, setVideo] = useState({
    "id": 0,
    "title": "Video 0",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  })
  const [PlayList, setPlayList] = useState([])

  useEffect(() => {
    setLoading(true)
    getPlayList()
      .then((response) => {
        setPlayList(response.data)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  const handleOnClick = (video) => {
    // setLink(video.url)
    setVideo(video)
  }

  // if (Loading) return <Loader />
  return (
    <div className="App">
      <NavBar />
      {Loading && <Loader />}
      <div className='row mx-3'>
        <div className='col-3 m-0 p-2'>
          <VideoList className="col-3" PlayList={PlayList} handleOnClick={handleOnClick} />
        </div>
        <div className='col-9 m-0 p-2 '>
          {!Loading && <ViedeoPlayer video={Video} />}
        </div>
      </div>
    </div>
  );
}

export default App;
