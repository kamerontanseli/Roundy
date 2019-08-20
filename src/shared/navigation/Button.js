import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
	display: inline-block;
	padding: 20px 30px;
	border-radius: 4px;
	font-size: 1.24em;
	font-weight: 700;
	text-decoration: none;
	color: #fff;
	background-color: #ff6346;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #ff937e;
	}

	@media screen and (max-width: 480px) {
		font-size: 1em;
		padding: 15px 25px;
	}
`;

export default Button;