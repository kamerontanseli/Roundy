import React from "react";
import styled from "styled-components";
import Container from "../../shared/layout/Container";
import Button from '../../shared/navigation/Button';
import Title from '../../shared/typography/Title';

const Highlight = styled.mark`
	color: #ff6346;
	background-color: transparent;
`;

const Home = () => (
	<Container>
		<hgroup>
			<Title>
				Welcome to Roundy, <br /> Your{" "}
				<Highlight>complete travel buddy</Highlight>
			</Title>
		</hgroup>
		<Button to="/countries">Get Started</Button>
	</Container>
);

export default Home;
