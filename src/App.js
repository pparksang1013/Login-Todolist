import { createContext } from "react";
import { Routes, Route } from "react-router-dom";

// ROUTE
import Main from "./router/Main";
import Signup from "./router/Signup";
import Signin from "./router/Signin";
import Todo from "./router/Todo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/*" element={<Todo />} />
            </Routes>
        </div>
    );
}

export default App;
