import React from 'react'
import ReactDOM from 'react-dom'

import { PortalProps } from './Portal.d'

class Portal extends React.PureComponent<PortalProps> {
	private portal = document.querySelector('#portal')

	public render() {
		const { children } = this.props

		return (children) ? ReactDOM.createPortal(children, this.portal) : null
	}
}

export default Portal
