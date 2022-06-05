import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import AdminPage from "./components/adminPage/AdminPage";
import LoginPage from "./components/loginPage/LoginPage";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/admin" element={<AdminPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
