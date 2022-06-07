import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import AdminPage from "./components/adminPage/AdminPage";
import LoginPage from "./components/loginPage/LoginPage";
import {Provider} from "react-redux";
import {store} from "./redux/store";


function App() {
  return (
    <div className="App">
        <header className="header">
            <NavLink className="link" to="/">HOME</NavLink>
            <NavLink className="link" to="/admin">ADMIN</NavLink>
            <NavLink className="link" to="/login">LOGIN</NavLink>
        </header>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/admin" element={<AdminPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Provider>

    </div>
  );
}

export default App;
