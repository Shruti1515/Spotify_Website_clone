import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import { Player } from "./components/Player";
import { Display } from "./components/Display";
import { PlayerContext } from "./context/playerContext";

function App() {
  const { audioRef, track } = useContext(PlayerContext); // Context is now working

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      {/* Ensure track.file points to the correct file path */}
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
