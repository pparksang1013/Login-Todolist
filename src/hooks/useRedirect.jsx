import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRedirect(path) {
    const navigate = useNavigate();
    const TOKEN = localStorage.getItem("access_token") ? true : false;

    useEffect(() => {
        if (TOKEN) {
            navigate("/todo");
        } else {
            navigate(path);
        }
    }, [navigate]);
}

export default useRedirect;
