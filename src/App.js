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
import Landing from "./scenes/landing";
import Login from "./scenes/login/login";
import CreateAccount from "./scenes/createAccount";
import TermOfServices from "./scenes/termOfService";
import ChangePassword from "./scenes/changePassword";
import ResetPassword from "./scenes/changePassword/passwordReset";
import ErrorPassword from "./scenes/changePassword/passwordError";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home/:token" element={<Nav />}>
            <Route path="cars/:token" element={<CarsScreen />} />
            <Route
              path="carsRegister/:id:token"
              element={<CarsRegisterScreen />}
            />
            <Route
              path="carsConfirm/:name:vin:token"
              element={<CarsConfirmScreen />}
            />
            <Route path="runs/:token" element={<RunsScreen />} />
            <Route
              path="runsList/:car_id/:token"
              element={<RunsListScreen />}
            />
            <Route
              path="runsUpload/:car:token"
              element={<RunsUploadScreen />}
            />
            <Route path="community/:token" element={<CommunityScreen />} />
            <Route path="settings/:token" element={<SettingsScreen />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="termOfService" element={<TermOfServices />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
          <Route path="errorPassword" element={<ErrorPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
