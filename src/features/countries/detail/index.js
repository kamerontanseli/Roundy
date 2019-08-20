import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Container from "../../../shared/layout/Container";
import Loader from "../../../shared/misc/Loader";
import ErrorMessage from "../../../shared/typography/ErrorMessage";
import PageTitle from "../../../shared/typography/PageTitle";
import Table from "../../../shared/typography/Table";
import Button from "../../../shared/navigation/Button";
import Language from './shared/Language';

export const COUNTRY_DETAIL_QUERY = gql`
	query getCountry($code: String) {
		country(code: $code) {
			code
			name
			native
			phone
			currency
			emoji
			languages {
				code
				name
				native
			}
		}
	}
`;

const CountryDetail = ({ match }) => {
	const { loading, error, data } = useQuery(COUNTRY_DETAIL_QUERY, {
		variables: { code: match.params.code }
	});

	return (
		<Container>
			{loading && <Loader />}
			{data && data.country && (
				<React.Fragment>
					<hgroup>
						<PageTitle>
							{data.country.name} {data.country.emoji}
						</PageTitle>
					</hgroup>
					<Table>
						<tbody>
							<tr>
								<td>Native name</td>
								<td>{data.country.native}</td>
							</tr>
							<tr>
								<td>Phone country code</td>
								<td>+{data.country.phone}</td>
							</tr>
							<tr>
								<td>Currency</td>
								<td>
									<a
										href={`https://www.xe.com/currencyconverter/convert/?Amount=1&From=${data.country.currency}&To=GBP`}
									>
										{data.country.currency}
									</a>
								</td>
							</tr>
							<tr>
								<td>Languages</td>
								<td>
									{data.country.languages.map((language, index, arr) => (
										<Language
											language={language}
											key={language.code}
											comma={index < arr.length - 1}
										/>
									))}
								</td>
							</tr>
						</tbody>
					</Table>
					<Button style={{ marginTop: 30 }} to="/countries">
						Back to all countries
					</Button>
				</React.Fragment>
			)}
			{error && (
				<ErrorMessage>
					An error has occurred. Please try again later.
				</ErrorMessage>
			)}
		</Container>
	);
};
export default CountryDetail;
