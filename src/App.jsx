import "./App.css";
import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Fragment,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import Studio from "./pages/Studio.jsx";
// import { useAuth } from './contexts/AuthContext.jsx';
import AudioPlayer from "./components/audioPlayer/AudioPlayer";
import Auth0ProviderWithHistory from "./components/Authentication/Auth0.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { PlayerProvider } from "./contexts/player/playerContext";

//add new route above NotFound Route

//add * to the path if you need to create nested routes

//log in to view/edit profile, otherwise the profile will be redirected to the homepage

// eslint-disable-next-line
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <HashRouter>
      <Auth0ProviderWithHistory>
        <div className="App">
          <NavBar />
          <Routes>
            {/* <Fragment>
              <PlayerProvider> */}
            <Route path="/" element={<Home />} />
            {/* <Route path='/profile/*' element={isAuthenticated ? <Profile /> : <Navigate to='/' />} /> */}
            <Route path="/profile/*" element={<Profile />} />
            {/* </PlayerProvider>
            </Fragment> */}
            <Route path="/studio/*" element={<Studio />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <AudioPlayer />
        </div>
      </Auth0ProviderWithHistory>
    </HashRouter>
  );
}

export default App;
