import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useRedirect(path) {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/todo");
        } else {
            navigate(path);
        }
    }, [navigate]);
}

export default useRedirect;
