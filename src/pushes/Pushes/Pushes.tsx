import * as React from 'react'

import { Portal, Push } from '../'
import { PushesProps } from './Pushes.d'
import Root from './styles'

class Pushes extends React.PureComponent<PushesProps> {
	public static defaultProps = {
		pushes: new Array(),
	}

	public render() {
		const { pushes, removePush } = this.props

		return (
			<Portal>
				<Root>
					{pushes.map((push) => (
						<Push key={push.id} id={push.id} title={push.title} removePush={removePush}>
							{ push.body }
						</Push>
					))}
				</Root>
			</Portal>
		)
	}
}

export default Pushes
