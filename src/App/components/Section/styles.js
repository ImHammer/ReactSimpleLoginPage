
import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 5px;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const LoginContent = styled.div`
	width: 100%;
	padding: 5px;
	max-width: 300px;
	border-radius: 6px;
	background-color: var(--secondary-color);
	
	display: flex;
	flex-direction: column;
`

export const LoginHeader = styled.div`
	width: 100%;
	color: black;
	font-size: 135px;
	
	display: flex;
	justify-content: center;
`

export const LoginBody = styled.div`
	width: 100%;
	padding: 5px;
	
	display: flex;
	flex-direction: column;
`

export const InputGroup = styled.div`
	width: 100%;
	padding: 8px;
	
	display: flex;
	flex-direction: column;
`

export const InputLabel = styled.label`
	color: var(--primary-color);
`

export const Input = styled.input`
	width: 90%;
	height: 25px;
	padding: 8px;
	color: black;
	font-weight: bold;
	background-color: white;
	border-radius: 14px;
`

export const Separator = styled.hr`
	width: 93%;
	margin: 10px 0;
	align-self: center;
	border: 0.03rem solid var(--terceary-color);
	border-radius: 1rem;
`

export const LoginButton = styled.button`
	width: 60%;
	height: 30px;
	font-size: 20px;
	color: white;
	background-color: var(--primary-color);
	border-radius: 6px;
	cursor: pointer;
	align-self: center;
`