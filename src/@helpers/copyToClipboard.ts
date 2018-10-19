const copyToClipboard = (text: string): boolean => {
	const node = document.createElement('div')
	const range = document.createRange()

	node.innerHTML = text
	node.style.opacity = '0'
	node.style.position = 'fixed'
	document.body.appendChild(node)

	window.getSelection().removeAllRanges()

	range.setStartBefore(node.firstChild)
	range.setEndAfter(node.lastChild)
	window.getSelection().addRange(range)

	const status = document.execCommand('copy')

	node.remove()

	return status
}

export default copyToClipboard
