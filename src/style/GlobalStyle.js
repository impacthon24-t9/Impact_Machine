import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WantedSansMedium from "../assets/fonts/WantedSans-Medium.ttf";
import WantedSansSemiBold from "../assets/fonts/WantedSans-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "WantedSans Medium";
		src: url(${WantedSansMedium});
	}
	@font-face {
		font-family: "WantedSans SemiBold";
		src: url(${WantedSansSemiBold});
	}

	${reset}
	:root {
		font-family: "WantedSans Medium", "WantedSans SemiBold"
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		color: ${({ theme }) => theme.background.primary};
		background-color: ${({ theme }) => theme.content.primary};
	}
`;
