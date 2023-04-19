import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// API
import { SIGN_UP_POST_API, SIGN_IN_POST_API } from "../api/signAxios";

function useSign() {
    const [signInfo, setSignInfo] = useState({
        email: "",
        password: "",
    });
    const [bool, setBool] = useState(false);

    const navigate = useNavigate();

    const SIGN_EMAIL = useRef();
    const SIGN_PASSWORD = useRef();

    const sign_click_event = (e, testid) => {
        if (testid === "signup-button") {
            SIGN_UP_POST_API(signInfo.email, signInfo.password)
                .then(() => {
                    navigate("/signin");
                })
                .catch((err) => {
                    alert(err);
                });
        }

        if (testid === "signin-button") {
            SIGN_IN_POST_API(signInfo.email, signInfo.password)
                .then((res) => {
                    localStorage.setItem("access_token", res.data.access_token);
                    navigate("/todo");
                })
                .catch((err) => {
                    alert(err);
                });
        }
    };

    const sign_change_event = () => {
        setSignInfo({
            email: SIGN_EMAIL.current.value,
            password: SIGN_PASSWORD.current.value,
        });

        if (
            signInfo.email.includes("@") &&
            SIGN_PASSWORD.current.value.length >= 8
        ) {
            setBool(false);
        } else {
            setBool(true);
        }
    };
    return {
        sign_click_event,
        sign_change_event,
        SIGN_EMAIL,
        SIGN_PASSWORD,
        bool,
    };
}

export default useSign;
