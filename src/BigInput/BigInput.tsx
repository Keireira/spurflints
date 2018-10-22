import * as React from 'react'

import { BigInputProps, BigInputState } from './BigInput.d'
import Root from './styles'

const findRestrictedSymbols = (emboss: string): boolean => {
	const regex = new RegExp(/[a-zA-Z\-\s]/g)
	const matched = emboss.match(regex)

	return Array.isArray(matched) ? matched.length === emboss.length : true;
}

class BigInput extends React.PureComponent<BigInputProps, BigInputState> {
	public onChangeHd = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const emboss = event.target.value.replace(/\s\s+/g, ' ')
		const { changeEmboss } = this.props

		const hasNotRestrictedSymbols = findRestrictedSymbols(emboss)
		const hasBigName = emboss.split(' ').length > 2

		if (changeEmboss && hasNotRestrictedSymbols && !hasBigName) {
			changeEmboss(emboss)
		}
	}

	public render() {
		const { emboss } = this.props

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

