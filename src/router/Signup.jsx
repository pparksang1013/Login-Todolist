import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENT
import SignInputComp from "../components/SignInputComp";

// API
import { signupAPI } from "../api/postAxios";

// HOOKS
import useRedirect from "../hooks/useRedirect";

function Signup() {
    useRedirect("/signup");
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const [onoff, setOnoff] = useState(true);
    const navigate = useNavigate();

    const signUpSubmit = (e) => {
        e.preventDeufault();

        signupAPI(inputValue.email, inputValue.password);
        navigate("/signin");
        return;
    };

    return (
        <>
            <SignInputComp
                signtxt={"회원가입"}
                inputValue={inputValue}
                setInputValue={setInputValue}
                onoff={onoff}
                setOnoff={setOnoff}
            />
            <form onSubmit={signUpSubmit}>
                <button data-testid="signup-button" disabled={onoff}>
                    회원가입
                </button>
            </form>
        </>
    );
}

export default Signup;
