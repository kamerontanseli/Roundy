import styled from "styled-components";
import { Link } from "react-router-dom";

const Panel = styled(Link)`
	display: flex;
	align-items: center;
	padding: 20px;
	border-radius: 4px;
	border: 2px solid #ff6346;
	margin-bottom: 20px;
	background-color: #fff7f5;
	text-decoration: none;
	font-weight: 700;
	color: #a71f06;
	transition: all 0.2s ease;

	&:hover {
		background-color: #ff6346;
		color: #fff;
	}
`;

Panel.Title = styled.span`
	flex-grow: 1;
	margin-right: 10px;
`;

Panel.Info = styled.span`
	opacity: 0.7;
	font-size: 0.8em;
`;

export default Panel;
