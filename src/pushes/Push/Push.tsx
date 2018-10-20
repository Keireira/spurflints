import * as React from 'react'

import { PushProps } from './Push.d'
import Root, { Content, Title } from './styles'

class Push extends React.PureComponent<PushProps> {
	public static defaultProps = {
		children: '',
		title: '',
	}

	private timerId: number;

	public componentDidMount() {
		this.timerId = window.setTimeout(() => {
			this.props.removePush(this.props.id);
		}, 3000);
	}

	public componentWillUnmount() {
		window.clearInterval(this.timerId);
	}

	public render() {
		const { title, children } = this.props

		return (
			<Root onClick={this.hidePush}>
				{(title) && (
					<Title>{ title }</Title>
				)}

				{(children) && (
					<Content>
						{ children }
					</Content>
				)}
			</Root>
		)
	}

	private hidePush = (): void => {
		window.clearInterval(this.timerId);

		this.props.removePush(this.props.id);
	};
}

export default Push
