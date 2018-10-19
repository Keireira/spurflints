import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Colors, CommonStyles, Fonts, ResetStyles } from '@common'
import Root from './Root';

const StyledRoot = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`

const App = () => (
	<>
		<ResetStyles/>
		<Colors/>
		<Fonts/>
		<CommonStyles/>

		<StyledRoot>
			<Root />
		</StyledRoot>
	</>
)

ReactDOM.render(
	<App/>,
	document.getElementById('root') as HTMLElement
);
