import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './Components/Sidenav';
import Fetch from "./Components/Data";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";

function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="App">
            <div class="col-md-2">
              <Sidenav/>
            </div>
            <div className="col-md-10">
            <main>
              <Routes>
                <Route  path="/" element={<Home />}/>
                <Route path="/explore" element={<Explore />} />
                <Route path="/statistics" element={<Statistics />}/>
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;