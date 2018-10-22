import { createGlobalStyle } from 'styled-components'

import OverpassMonoRegular from '../assets/fonts/Overpass-Mono/OverpassMono-Regular.woff2'

import RobotoLight from '../assets/fonts/Roboto/Roboto-Light.woff2'
import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.woff2'

export default createGlobalStyle`
	@font-face {
		font-weight: 400;
		font-style: normal;
		font-family: 'Overpass Mono';
		src: url(${OverpassMonoRegular}) format('woff2');
	}

	@font-face {
		font-weight: 300;
		font-style: normal;
		font-family: 'Roboto';
		src: url(${RobotoLight}) format('woff2');
	}

		@font-face {
		font-weight: 400;
		font-style: normal;
		font-family: 'Roboto';
		src: url(${RobotoRegular}) format('woff2');
	}
`
