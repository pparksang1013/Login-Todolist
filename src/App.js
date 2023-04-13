import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ROUTE
import Main from "./router/Main";
import Signup from "./router/Signup";
import Signin from "./router/Signin";
import Todo from "./router/Todo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/todo" element={<Todo />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

// localStorage.getItem("access_token") ? (
//     <Navigate replace to="/todo" />
// ) : (
//     <SignIn />
// )
