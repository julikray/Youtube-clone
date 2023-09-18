import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import Searchpage from "./components/Searchpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';




function App() {


  const [searchResults, setSearchResults] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState('');

  const handleSearch = (videos) => {
    setSearchResults(videos);
    setSelectedVideoId('');
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };



  const [sidebar, toggleSidebar] = useState(false)
  const toggle = () => toggleSidebar(value => !value)



  return (

    <div className="App">


      <Router>
        <Header toggle={toggle} onSearch={handleSearch} />

        <Switch>
          <Route path="/search/:searchTerm" component={Searchpage}>
            <div className="App-page">
              <Sidebar sidebar={sidebar} />
              <Searchpage />
              {selectedVideoId ? (
                <VideoPlayer videoId={selectedVideoId} />
              ) : (
                <VideoList videos={searchResults} onVideoClick={handleVideoClick} />
              )}
            </div>


          </Route>
          <Route path="/">
            <div className="App-page">
              <Sidebar />

              <Video />
            </div>
          </Route>
        </Switch>
      </Router>


    </div>





  );
};


export default App;