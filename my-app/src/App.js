import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Main from "./components/mainPage/Main";
import LoginPage from "./components/adminPage/LoginPage";
import AdminPage from "./components/loginPage/AdminPage";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import PrivateRoute from "./components/loginPage/PrivateRouteForAdmin";



function App() {
  return (
    <div className="App">
        <header className="header">
            <NavLink className="link" to="/">HOME</NavLink>
            <NavLink className="link" to="/login">LOGIN</NavLink>
            <NavLink className="link" to="/admin">ADMIN</NavLink>
        </header>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path='/admin' element={<PrivateRoute  redirectPath={"/"} children={<AdminPage/>}/>}></Route>
            </Routes>
        </Provider>
    </div>
  );
}

export default App;
