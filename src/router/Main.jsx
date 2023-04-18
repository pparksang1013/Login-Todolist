import styled from "styled-components";
import { Link } from "react-router-dom";

// STYLE
import { OrangeButton } from "../style/CommonStlye";

function Main() {
    return (
        <MainWrapper>
            <TodoTxt>투두투두</TodoTxt>
            <LinkBox>
                <Link to="/signup">
                    <OrangeButton data-testid="signup-button">
                        회원가입
                    </OrangeButton>
                </Link>
                <Link to="/signin">
                    <OrangeButton data-testid="signin-button">
                        로그인
                    </OrangeButton>
                </Link>
            </LinkBox>
        </MainWrapper>
    );
}

export default Main;

const MainWrapper = styled.section``;

const LinkBox = styled.div`
    width: 300px;
    height: 100px;
    margin: 0 auto;

    a {
        width: 50%;
        text-align: center;
        display: inline-block;
    }
`;

const TodoTxt = styled.h1`
    font-size: 3.2rem;
    word-spacing: 0.4em;
    font-weight: 900;
    text-align: center;
    margin: 220px 0 40px;
    color: #2b2b2b;
    margin-right: 12px;
`;
