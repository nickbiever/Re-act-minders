import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
    	margin: 0;
    	padding: 0;
	}

	body {
		background-color: #1F1F1F;
		color: #565656;
	}
`;

export default GlobalStyle;
