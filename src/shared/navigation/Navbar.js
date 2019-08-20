import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Container from "../layout/Container";

const NavigationStyles = styled.ul`
	list-style: none;
	padding: 20px 0;
	margin: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const LogoStyles = styled.img`
	max-width: 50px;
	display: inline-block;
`;

const NavigationBrandStyles = styled.li`
	flex-grow: 1;

	> a {
		padding-left: 0;
	}
`;

const NavigationMenuStyles = styled.li`
	&:last-of-type > a {
		padding-right: 0;
	}
`;

const NavigationLinkStyles = styled(Link)`
	overflow: auto;
	text-decoration: none;
	color: #ff6346;
	font-weight: 500;
	padding: 0 20px;
	display: inline-block;

	&.is-active {
		opacity: 0.45;
	}

	&:hover {
		text-decoration: underline;
	}
`;

const Navbar = ({ location }) => (
	<Container>
		<header>
			<nav>
				<NavigationStyles>
					<NavigationBrandStyles>
						<NavigationLinkStyles to="/">
							<LogoStyles src="/img/illustration.svg" alt="Roundy" />
						</NavigationLinkStyles>
					</NavigationBrandStyles>
					<NavigationMenuStyles>
						<NavigationLinkStyles
							className={location.pathname === "/" ? "is-active" : ""}
							to="/"
						>
							Home
						</NavigationLinkStyles>
					</NavigationMenuStyles>
					<NavigationMenuStyles>
						<NavigationLinkStyles
							className={
								location.pathname.includes("/countries") ? "is-active" : ""
							}
							to="/countries"
						>
							All Countries
						</NavigationLinkStyles>
					</NavigationMenuStyles>
				</NavigationStyles>
			</nav>
		</header>
	</Container>
);

export default withRouter(Navbar);
