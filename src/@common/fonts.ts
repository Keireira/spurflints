import { createGlobalStyle } from 'styled-components'

import OverpassMonoLight from '../assets/fonts/Overpass-Mono/OverpassMono-Light.woff2'
import OverpassMonoRegular from '../assets/fonts/Overpass-Mono/OverpassMono-Regular.woff2'

import RobotoLight from '../assets/fonts/Roboto/Roboto-Light.woff2'
import RobotoRegular from '../assets/fonts/Roboto/Roboto-Regular.woff2'
import RobotoThin from '../assets/fonts/Roboto/Roboto-Thin.woff2'

export default createGlobalStyle`
	@font-face {
		font-weight: 300;
		font-style: normal;
		font-family: 'Overpass Mono';
		src: url(${OverpassMonoLight}) format('woff2');
	}

	@font-face {
		font-weight: 400;
		font-style: normal;
		font-family: 'Overpass Mono';
		src: url(${OverpassMonoRegular}) format('woff2');
	}

	@font-face {
		font-weight: 200;
		font-style: normal;
		font-family: 'Roboto';
		src: url(${RobotoThin}) format('woff2');
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
