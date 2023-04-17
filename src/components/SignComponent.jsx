import styled from "styled-components";

// HOOKS
import useSign from "../hooks/useSign";

// STYLE
import { SignInput, OrangeButton } from "../style/CommonStlye";

function SignComponent({ sign_text, testid }) {
    const {
        sign_click_event,
        sign_change_event,
        SIGN_EMAIL,
        SIGN_PASSWORD,
        bool,
    } = useSign();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <SignUpWrapper>
            <h1>{sign_text}</h1>
            <form onSubmit={handleSubmit}>
                <SignInput
                    data-testid="email-input"
                    onChange={sign_change_event}
                    placeholder="email은 @가 포함되어야 합니다."
                    ref={SIGN_EMAIL}
                />
                <SignInput
                    data-testid="password-input"
                    onChange={sign_change_event}
                    type="password"
                    placeholder="비밀번호는 8글자 이상 입력해주세요.
                    "
                    ref={SIGN_PASSWORD}
                />
                <OrangeButton
                    data-testid={testid}
                    onClick={(e) => {
                        sign_click_event(e, testid);
                    }}
                    disabled={bool}
                    borderColor={true}
                >
                    {sign_text}
                </OrangeButton>
            </form>
        </SignUpWrapper>
    );
}

export default SignComponent;

const SignUpWrapper = styled.section`
    width: 26%;
    height: 100vh;
    margin: 0 auto;
    position: relative;

    h1 {
        font-weight: 900;
        font-size: 3rem;
    }

    button {
        position: absolute;
        transform: translateY(70%);
        right: 0;
    }
`;
