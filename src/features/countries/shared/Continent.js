import React from "react";
import { withRouter } from "react-router-dom";
import Panel from "../../../shared/navigation/Panel";

export const Country = withRouter(({ match, country }) => (
	<Panel to={`${match.url}/${country.code}`} key={country.code}>
		<Panel.Title>
			{country.emoji} {country.name} ({country.native})
		</Panel.Title>
		<Panel.Info>
			{country.languages
				.map(language => language.code.toUpperCase())
				.join(", ")}
		</Panel.Info>
	</Panel>
));

const Continent = ({ searchValue, continent }) => {
	const countries = continent.countries.filter(country =>
		country.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	return countries.length > 0 ? (
		<div key={continent.name}>
			<h2>{continent.name}</h2>

			{countries.map(country => (
				<Country country={country} key={country.code} />
			))}
		</div>
	) : null;
};

export default Continent;
