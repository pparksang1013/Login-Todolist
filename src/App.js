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
                    <Route path="/" element={<Main />} />
                    <Route
                        path="/signin"
                        element={
                            localStorage.getItem("access_token") ? (
                                <Navigate replace to="/todo" />
                            ) : (
                                <Signin />
                            )
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            localStorage.getItem("access_token") ? (
                                <Navigate replace to="/todo" />
                            ) : (
                                <Signup />
                            )
                        }
                    />
                    <Route
                        path="/todo"
                        element={
                            !localStorage.getItem("access_token") ? (
                                <Navigate replace to="/signin" />
                            ) : (
                                <Todo />
                            )
                        }
                    />
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
