import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Fake = ({ className }) => (
	<div className={className}>
		<h2>I'm fake components</h2>
	</div>
);


const Heading = styled.h1`
  font-size: 2rem;
`;

const color = 'white';


const Button = styled.button`
	padding: 5px 10px;
	border-radius: 4px;
	color: ${color};
	font-size: 2rem;
	border: none;
	background: indigo;
`;

const CancelButton = styled(Button)`	
	background: tomato;
`;

const AppWrapper = styled.div`
	header {
		background: teal;
		&:hover {
			background: #bcd1a6;
		}
	}
	
	${Button} {
		margin-bottom: 2rem;
	}
`;

const DoubleFake = styled(Fake)`
	h2 {
		color: red;
	}
`;

class App extends Component {
	render() {
		return (
			<AppWrapper>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<Heading>
						Edit <code>src/App.js</code> and save to reload.
					</Heading>
					<DoubleFake/>
					<Fake/>
					<Button>Save</Button>
					<CancelButton>Cancel</CancelButton>
					<Heading>
						Heading two
					</Heading>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</AppWrapper>
		);
	}
}


export default App;
