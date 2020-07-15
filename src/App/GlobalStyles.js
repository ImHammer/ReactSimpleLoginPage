
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	
	:root {
		--primary-color: rgb(90, 219, 83);
		--secondary-color: rgb(242, 242, 242);
		--terceary-color: rgb(217, 217, 217);
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	
	html, body, #root {
		width: 100%;
		height: 100vh;
		background-color: var(--terceary-color);
	}
	
	*, button, input {
		outline: none;
		border: none;
	}
`