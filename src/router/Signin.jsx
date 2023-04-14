import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENT
import SignInputComp from "../components/SignInputComp";

// API
import { signinAPI } from "../api/postAxios";

// HOOKS
import useRedirect from "../hooks/useRedirect";

function Signin() {
    useRedirect("/signin");
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const [onoff, setOnoff] = useState(true);
    const navigate = useNavigate();

    const signInSubmit = (e) => {
        e.preventDefault();
        signinAPI(inputValue.email, inputValue.password)
            .then((res) => {
                localStorage.setItem("access_token", res.data.access_token);
                navigate("/todo");
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <>
            <SignInputComp
                signtxt={"로그인"}
                inputValue={inputValue}
                setInputValue={setInputValue}
                onoff={onoff}
                setOnoff={setOnoff}
            />
            <form onSubmit={signInSubmit}>
                <button data-testid="signin-button" disabled={onoff}>
                    로그인
                </button>
            </form>
        </>
    );
}

export default Signin;
