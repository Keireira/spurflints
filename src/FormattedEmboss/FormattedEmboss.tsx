import * as React from 'react'

import { copyToClipboard } from '@helpers'
import { FormattedEmbossProps } from './FormattedEmboss.d'
import Root from './styles'

const formatEmboss = (initialEmboss: string): string => {
	// Alena Dzhukich -> Alena Dzhukich
	if (initialEmboss.length <= 21) {
		return initialEmboss
	}

	const [firstName, lastName] = initialEmboss.split(' ');
	const [first, second] = lastName.split('-');

	// Alena Dzhukich -> A Dzhukich
	if ((lastName && lastName.length) + 2 <= 21) {
		return `${firstName.charAt(0)} ${lastName}`;
	}

	// Alena Dzhukich-Solodova -> Alena Dzhukich
	if ((first && first.length) + firstName.length + 1 <= 21) {
		return `${firstName} ${first}`
	}

	// Alena Dzhukich-Solodova -> Alena Solodova
	if ((second && second.length) + firstName.length + 1 <= 21) {
		return `${firstName} ${second}`
	}

	// Alena Dzhukich-Solodova -> A Dzhukich
	if ((first && first.length) + 2 <= 21) {
		return `${firstName.charAt(0)} ${first}`
	}

	// Alena Dzhukich-Solodova -> A Solodova
	if ((second && second.length) + 2 <= 21) {
		return `${firstName.charAt(0)} ${second}`
	}

	return 'Bad name =('
}

class FormattedEmboss extends React.PureComponent<FormattedEmbossProps> {
	public static propTypes = {
		emboss: '',
	}

	public copyEmbossHd = (): void => {
		const { emboss } = this.props

		copyToClipboard(formatEmboss(emboss).toUpperCase())

		this.props.addPush({
			title: 'Copied',
		})
	}

	public render() {
		const { emboss } = this.props

		return (
			<Root onClick={this.copyEmbossHd}>{ formatEmboss(emboss).toUpperCase() }</Root>
		)
	}
}

export default FormattedEmboss
