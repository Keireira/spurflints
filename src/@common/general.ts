import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	:root {
		font-size: 0.6vw;

		@media screen and (min-width: 640px) {
			font-size: 0.3vw;
		}

		@media screen and (min-width: 1024px) {
			font-size: 0.25vw;
		}

		@media screen and (min-width: 1680px) {
			font-size: 0.2vw;
		}
	}

	body {
		background-color: var(--swan-white);
	}
`
