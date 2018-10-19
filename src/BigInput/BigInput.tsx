import * as React from 'react'

import { BigInputProps, BigInputState } from './BigInput.d'
import Root from './styles'

class BigInput extends React.PureComponent<BigInputProps, BigInputState> {
	public state = {
		emboss: '',
	}

	public onChangeHd = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({
			emboss: event.target.value
		})
	}

	public render() {
		const { emboss } = this.state

		return (
			<Root
				autoFocus={true}
				autoCapitalize="off"
				autoCorrect="off"
				autoComplete="off"
				spellCheck={false}
				value={emboss}
				placeholder="Custom emboss"
				onChange={this.onChangeHd}
			/>
		)
	}
}

export default BigInput

