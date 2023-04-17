import styled from "styled-components";

// SIGN
export const SignInput = styled.input`
    display: block;
    width: 97.2%;
    line-height: 2;
    margin-top: 22px;
    padding: 6px;
    padding-inline-start: 0.8em;
    border: 1px solid rgba(16, 16, 16, 0.2);
    border-radius: 6px;

    &::placeholder {
        color: rgba(16, 16, 16, 0.3);
        font-size: 15px;
    }

    &:focus {
        outline: 1.4px solid#f2a649;
        border: none;
    }
`;

// BUTTON
export const OrangeButton = styled.button`
    font-size: 0.9em;
    border: 1px solid #f2a649;
    border-radius: 20px;
    padding: 0.6em 2em;

    &:disabled {
        border: 1px solid rgba(16, 16, 16, 0.3);
    }

    &:disabled:hover {
        border: 1px solid rgba(16, 16, 16, 0.3);
        background-color: transparent;
        color: rgba(16, 16, 16, 0.3);
    }

    &:hover {
        border: 1px solid #f2a649;
        background-color: #f2a649;
        color: #fff;
    }
`;
