import * as React from 'react'

import BigInput from '../BigInput'
import FormattedEmboss from '../FormattedEmboss'
import Pushes from '../pushes'
import { Push, RootProps, RootState } from './Root.d'
import RootStyled from './styles'

class Root extends React.PureComponent<RootProps, RootState> {
	public state = {
		emboss: '',
		pushes: new Array(),
	}
	private innerPushId: number = 0

	public changeEmboss = (newEmboss: string): void => {
		this.setState({ emboss: newEmboss })
	}

	public addPush = (newPush: Push): void => {
		this.setState((prevState) => ({
			pushes: [
				...prevState.pushes,
				Object.assign(newPush, { id: this.innerPushId }),
			],
		}))

		console.log('this.innerPushId:', this.innerPushId)

		this.innerPushId = this.innerPushId + 1
	}

	public removePush = (pushId: number): void => {
		this.setState((prevState) => ({
			pushes: prevState.pushes.filter((push) => push.id !== pushId),
		}))
	}

	public render() {
		const { emboss, pushes } = this.state

		return (
			<RootStyled>
				<BigInput emboss={emboss} changeEmboss={this.changeEmboss}/>

				<FormattedEmboss emboss={emboss} addPush={this.addPush}/>

				<Pushes removePush={this.removePush} pushes={pushes}/>
			</RootStyled>
		)
	}
}

export default Root
