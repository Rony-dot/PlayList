import './App.css';
import ViedeoPlayer from './components/ViedeoPlayer';
import VideoList from './components/VideoList';
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import { useEffect, useState } from 'react';
import { getPlayList } from './services/PlayListController'
import NavBar from './components/NavBar';
import "./css/home.css"


function App() {
  // const [Link, setLink] = useState('')
  const [Video, setVideo] = useState({
    "id": 0,
    "title": "Video 0",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  })
  const [PlayList, setPlayList] = useState([])

  useEffect(() => {
    getPlayList()
      .then((response) => {
        setPlayList(response.data)
      }).finally(() => {
      })
  }, [])

  const handleOnClick = (video) => {
    // setLink(video.url)
    setVideo(video)
  }

  return (
    <div className="App">
      <NavBar />
      <div className='row'>
        <div className='col-9 border-end border-5 border-warning'>
          <ViedeoPlayer video={Video} />
        </div>
        <div className='col-3 border-start border-5 border-warning'>
          <VideoList className="col-3" PlayList={PlayList} handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
