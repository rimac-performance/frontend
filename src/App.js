import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./scenes/home";
import Nav from "./navigations/Nav";
import CarsScreen from "./scenes/cars";
import CarsRegisterScreen from "./scenes/cars/carsRegister";
import CarsConfirmScreen from "./scenes/cars/carsConfirm";
import RunsScreen from "./scenes/runs";
import RunsListScreen from "./scenes/runs/runsList";
import RunsUploadScreen from "./scenes/runs/runsUpload";
import CommunityScreen from "./scenes/community";
import SettingsScreen from "./scenes/settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route path="cars" element={<CarsScreen />} />
            <Route path="carsRegister/:id:token" element={<CarsRegisterScreen />} />
            <Route path="carsConfirm/:name:vin:token" element={<CarsConfirmScreen />} />
            <Route path="runs" element={<RunsScreen />} />
            <Route path="runsList/:car:token" element={<RunsListScreen />} />
            <Route path="runsUpload/:car:token" element={<RunsUploadScreen />} />
            <Route path="community" element={<CommunityScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
