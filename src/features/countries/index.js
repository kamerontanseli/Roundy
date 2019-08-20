import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Container from "../../shared/layout/Container";
import Search from "../../shared/inputs/Search";
import Loader from "../../shared/misc/Loader";
import ErrorMessage from "../../shared/typography/ErrorMessage";
import PageTitle from "../../shared/typography/PageTitle";
import Continent from "./shared/Continent";

export const COUNTRY_LIST_QUERY = gql`
	{
		continents {
			name
			countries {
				code
				name
				native
				emoji
				languages {
					code
				}
			}
		}
	}
`;

const Countries = ({ match }) => {
	const { loading, error, data } = useQuery(COUNTRY_LIST_QUERY);
	const [search, setSearch] = React.useState("");

	return (
		<Container>
			<hgroup>
				<PageTitle>All Countries</PageTitle>
			</hgroup>
			<div>
				<Search
					value={search}
					onChange={e => setSearch(e.currentTarget.value)}
					type="text"
					placeholder="Search by country name"
				/>

				{loading && <Loader />}

				{error && (
					<ErrorMessage>
						An error has occurred. Please try again later.
					</ErrorMessage>
				)}

				{data && Array.isArray(data.continents) &&
					data.continents.map(continent => (
						<Continent
							searchValue={search}
							key={continent.name}
							continent={continent}
						/>
					))}
			</div>
		</Container>
	);
};

export default Countries;
