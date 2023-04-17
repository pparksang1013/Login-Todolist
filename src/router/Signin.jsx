// COMPONENT
import SignComponent from "../components/SignComponent";

// HOOKS
import useRedirect from "../hooks/useRedirect";

function Signin() {
    useRedirect("/signin");

    return (
        <>
            <SignComponent sign_text={"로그인"} testid={"signin-button"} />
        </>
    );
}

export default Signin;
