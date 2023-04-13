import styled from "styled-components";

function MainButtonComp({ btntxt, testID }) {
    return (
        <button type="button" data-testid={testID}>
            {btntxt}
        </button>
    );
}

export default MainButtonComp;
