import React from "react";
import Container from "../../shared/layout/Container";
import Button from '../../shared/navigation/Button';
import Title from '../../shared/typography/Title';

const NotFound = () => (
	<Container>
		<hgroup>
			<Title>
				404: Page Not Found
			</Title>
		</hgroup>
		<Button to="/">Go Back</Button>
	</Container>
);

export default NotFound;