// COMPONENT
import SignComponent from "../components/sign/SignComponent";

// HOOKS
import useRedirect from "../hooks/useRedirect";

function Signup() {
    useRedirect("/signup");

    return (
        <>
            <SignComponent sign_text={"회원가입"} testid={"signup-button"} />
        </>
    );
}

export default Signup;
