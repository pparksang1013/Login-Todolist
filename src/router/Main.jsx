import styled from "styled-components";
import { Link } from "react-router-dom";

// Component
// import HeaderComponent from "../components/HeaderComponent";
import MainButtonComp from "../components/MainButtonComp";

const TodoTxt = styled.h1`
    font-size: 3rem;
    word-spacing: 0.4em;
    font-weight: 700;
    font-family: ${(props) => props.font};
`;

function Main() {
    return (
        <div>
            <TodoTxt font={"MuseoModerno"}>Todo list</TodoTxt>
            <Link to="/signup">
                <MainButtonComp btntxt={"회원가입"} testID={"signup-button"} />
            </Link>
            <Link to="/signin">
                <MainButtonComp btntxt={"로그인"} testID={"signin-button"} />
            </Link>
        </div>
    );
}

export default Main;
