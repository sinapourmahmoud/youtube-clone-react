import "./App.css";
import ChannelDetail from "./pages/ChannelDetail";
import Feed from "./pages/Feed";
import SearchFeed from "./pages/SearchFeed";
import VideoDetail from "./pages/VideoDetail";
import { Routes, Route } from "react-router-dom";

import { mainContext } from "./contexts/mainContext";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  let [activeLink, setActiveLink] = useState(true);
  return (
    <mainContext.Provider
      value={{
        activeLink,
        setActiveLink,
      }}
    >
      <div className="bg-black">
        <Header />

        <div>
          <Routes>
            <Route element={<Feed />} path="/" />
            <Route element={<SearchFeed />} path="/search/:id" />
            <Route element={<VideoDetail />} path="/video/:id" />
            <Route element={<ChannelDetail />} path="/channel/:id" />
          </Routes>
        </div>
      </div>
    </mainContext.Provider>
  );
}

export default App;
