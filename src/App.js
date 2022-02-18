import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeScreen from "./scenes/home";
import Nav from "./navigations/Nav";
import CarsScreen from "./scenes/cars";
import AnalysisScreen from "./scenes/analysis";
import CommunityScreen from "./scenes/community";
import SettingsScreen from "./scenes/settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path='cars' element={<CarsScreen />} />
            <Route path='analysis' element={<AnalysisScreen />} />
            <Route path='community' element={<CommunityScreen />} />
            <Route path='settings' element={<SettingsScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
