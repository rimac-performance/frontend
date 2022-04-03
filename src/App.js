import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./scenes/home";
import Nav from "./navigations/Nav";
import CarsScreen from "./scenes/cars";
import CarsRegisterScreen from "./scenes/cars/carsRegister";
import CarsDetailsScreen from "./scenes/cars/carsDetails";
import CarsConfirmScreen from "./scenes/cars/carsConfirm";
import RunsScreen from "./scenes/runs";
import RunsListScreen from "./scenes/runs/runsList";
import RunsUploadScreen from "./scenes/runs/runsUpload";
import SensorEditScreen from "./scenes/analysis/sensorEdit";
import EngAnalysisScreen from "./scenes/analysis/engAnalysis";
import CommunityScreen from "./scenes/community";
import SettingsScreen from "./scenes/settings";
import Landing from "./scenes/landing";
import Login from "./scenes/login/login";
import CreateAccount from "./scenes/createAccount";
import TermOfServices from "./scenes/termOfService";
import ChangePassword from "./scenes/changePassword";
import ResetPassword from "./scenes/changePassword/passwordReset";
import ErrorPassword from "./scenes/changePassword/passwordError";
import AdminManagementScreen from "./scenes/admin";
import AdminNewUserScreen from "./scenes/admin/newUser";
import AdminEditUserScreen from "./scenes/admin/editUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="home" element={<Nav />}>
            <Route path="cars" element={<CarsScreen />} />
            <Route path="carsRegister" element={<CarsRegisterScreen />} />
            <Route
              path="carsDetails/:vin/:model/:year/:color"
              element={<CarsDetailsScreen />}
            />
            <Route
              path="carsConfirm/:vin/:model/:year/:color"
              element={<CarsConfirmScreen />}
            />
            <Route path="runs" element={<RunsScreen />} />
            <Route path="runsList/:car_id" element={<RunsListScreen />} />
            <Route path="runsUpload/:car_id" element={<RunsUploadScreen />} />
            <Route path="sensorEdit" element={<SensorEditScreen />} />
            <Route path="engAnalysis" element={<EngAnalysisScreen />} />
            <Route path="community" element={<CommunityScreen />} />
            <Route path="admin" element={<AdminManagementScreen />} />
            <Route path="admin/newUser" element={<AdminNewUserScreen />} />
            <Route
              path="admin/editUser/:args"
              element={<AdminEditUserScreen />}
            />
            <Route path="settings" element={<SettingsScreen />} />
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
