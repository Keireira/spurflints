import styled from 'styled-components'

export const Title = styled.div`
	width: 100%;

	text-align: center;
	word-wrap: break-word;
	font-size: 4rem;
	line-height: 4.5rem;

	padding: 4rem 2rem;
	font-weight: 400;
`

export const Content = styled.div`
	width: 100%;

	text-align: center;
	word-wrap: break-word;
	font-size: 3.5rem;
	line-height: 4rem;

	padding: 4rem;
	font-weight: 300;
	border-top: 1px solid var(--swan-white);
`

export default styled.div`
	display: flex;
	flex-direction: column;

	min-width: 70rem;
	max-width: 70rem;

	color: var(--swan-white);
	font-family: 'Roboto', sans-serif;
	background-color: var(--summer-sky);

	cursor: pointer;
	overflow: hidden;
	border-radius: 1rem;
	transition: transform 0.15s ease-in-out;

	& + & {
		margin-top: 2rem;
	}

	&:hover {
		transform: translateX(2rem);
	}
`
