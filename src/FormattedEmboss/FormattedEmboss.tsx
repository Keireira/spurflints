import * as React from 'react'

import { copyToClipboard } from '@helpers'
import { FormattedEmbossProps } from './FormattedEmboss.d'
import Root from './styles'

class FormattedEmboss extends React.PureComponent<FormattedEmbossProps> {
	public copyEmbossHd = (): void => {
		const { emboss } = this.props

		copyToClipboard(emboss.toUpperCase())

		this.props.addPush({
			title: 'Copied!',
		})
	}

	public render() {
		const { emboss } = this.props

		return (
			<Root onClick={this.copyEmbossHd}>{ emboss.toUpperCase() }</Root>
		)
	}
}

export default FormattedEmboss
