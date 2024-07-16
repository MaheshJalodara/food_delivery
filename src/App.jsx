import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SplashScreen from './Components/SplashScreen';
import SplashScreen from "./pages/splash-screen";
import Login from "./pages/login";
import Signup from "./pages/signup";
import SucessLogin from "./pages/successlogin";
import TrackScreen from "./pages/tracking-screen";

function App() {
  return (
    <>
      <div className="mobile_view">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/loginsucess" element={<SucessLogin />} />
            <Route path="/trackscreen" element={<TrackScreen />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
