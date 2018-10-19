import styled from 'styled-components'

export default styled.div`
	margin-top: 8rem;
	font-size: 7rem;
	font-weight: 400;
	line-height: 8rem;
	color: var(--celestial-green);
	font-family: 'Overpass Mono', monospace;
	cursor: pointer;
	padding: 2rem 4rem;
	transition: all 0.2s ease-in-out;
	border-radius: 1rem;
	user-select: none;

	&:hover {
		color: var(--swan-white);
		background-color: var(--purple);
		transform: translateY(-1rem);
	}

	&:active {
		transform: translateY(1rem);
	}
`
