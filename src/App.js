import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./scenes/home";
import Nav from "./navigations/Nav";
import CarsScreen from "./scenes/cars";
import AnalysisScreen from "./scenes/analysis";
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
          <Route path="home" element={<Nav />}>
            <Route path="cars" element={<CarsScreen />} />
            <Route path="analysis" element={<AnalysisScreen />} />
            <Route path="community" element={<CommunityScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="termOfService" element={<TermOfServices/>} />
          <Route path="changePassword" element={<ChangePassword/>} />
          <Route path="resetPassword" element={<ResetPassword/>} />
          <Route path="errorPassword" element={<ErrorPassword/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
