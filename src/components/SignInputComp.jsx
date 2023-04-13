import { useRef } from "react";
import styled from "styled-components";

// COMPONENT

function SignInputComp({
    signtxt,
    inputValue,
    setInputValue,
    onoff,
    setOnoff,
}) {
    const EMAIL_REF = useRef();
    const PASSWORD_REF = useRef();

    const onChangeEvent = (e) => {
        setInputValue({
            email: EMAIL_REF.current.value,
            password: PASSWORD_REF.current.value,
        });

        if (inputValue.email.includes("@") && inputValue.password.length >= 8) {
            setOnoff(false);
        }
    };

    return (
        <div>
            <h1>{signtxt}</h1>
            <input
                data-testid="email-input"
                ref={EMAIL_REF}
                onChange={onChangeEvent}
            />
            {onoff ? <p>email은 @가 포함되어야 합니다.</p> : ""}
            <input
                data-testid="password-input"
                ref={PASSWORD_REF}
                onChange={onChangeEvent}
            />
            {onoff ? <p>비밀번호는 8글자 이상 입력해주세요.</p> : ""}
        </div>
    );
}

export default SignInputComp;
