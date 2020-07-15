
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	height: 40px;
	background-color: var(--secondary-color);
	
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-weight: bold;
	color: var(--primary-color);
`

export { Container, Title }