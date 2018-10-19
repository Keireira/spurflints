import * as React from 'react'

import BigInput from '../BigInput'
import RootStyled from './styles'

class Root extends React.PureComponent {
	public render() {
		return (
			<RootStyled>
				<BigInput/>
			</RootStyled>
		)
	}
}

export default Root
