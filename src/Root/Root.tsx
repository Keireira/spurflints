import * as React from 'react'

import BigInput from '../BigInput'
import FormattedEmboss from '../FormattedEmboss'
import RootStyled from './styles'

class Root extends React.PureComponent {
	public state = {
		emboss: '',
	}

	public changeEmboss = (newEmboss: string): void => {
		this.setState({ emboss: newEmboss })
	}

	public render() {
		const { emboss } = this.state

		return (
			<RootStyled>
				<BigInput emboss={emboss} changeEmboss={this.changeEmboss}/>

				<FormattedEmboss emboss={emboss}/>
			</RootStyled>
		)
	}
}

export default Root
