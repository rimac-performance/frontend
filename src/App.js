import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeScreen from "./scenes/home";
import Nav from "./navigations/Nav";

function Todo() {
  return (<div>Todo</div>);
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<HomeScreen />} />
            <Route path='yeet' element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
