
import React, { createRef } from 'react'
import * as Styles from './styles'
import { BsPersonLinesFill } from 'react-icons/bs'

export default function Section(){
	
	const authRef = createRef()
	const passRef = createRef()
	
	return (
		<Styles.Container>
			<Styles.LoginContent>
				<Styles.LoginHeader>
					<BsPersonLinesFill/>
				</Styles.LoginHeader>
				<Styles.LoginBody>
					<Styles.InputGroup>
						<Styles.InputLabel>Nome:</Styles.InputLabel>
						<Styles.Input ref={authRef} type="text" placeholder="Usuário" />
					</Styles.InputGroup>
					<Styles.InputGroup>
						<Styles.InputLabel>Senha:</Styles.InputLabel>
						<Styles.Input ref={passRef} type="password" placeholder="Senha" />
					</Styles.InputGroup>
					<Styles.Separator/>
					<Styles.LoginButton>Logar</Styles.LoginButton>
				</Styles.LoginBody>
			</Styles.LoginContent>
		</Styles.Container>
	)
}