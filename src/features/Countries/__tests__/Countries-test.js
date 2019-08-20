import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import renderer from "react-test-renderer";
import Loader from "../../../shared/misc/Loader";
import ErrorMessage from "../../../shared/typography/ErrorMessage";
import Continent from "../shared/Continent";
import Countries, { COUNTRY_LIST_QUERY } from "../Countries";

jest.mock("react-router-dom", () => ({
	Link: p => <a {...p} />,
	withRouter: Component => props => (
		<Component match={{ url: "/" }} {...props} />
	)
}));

describe("Countries", () => {
	it("should render loading when loading", () => {
		const render = renderer.create(
			<MockedProvider mocks={[]} addTypename={false}>
				<Countries />
			</MockedProvider>
		);

		expect(() => render.root.findByType(Loader)).not.toThrow();
	});

	it("should render an error when error", async () => {
		const mock = {
			request: {
				query: COUNTRY_LIST_QUERY
			},
			error: new Error("Uh oh")
		};

		const render = renderer.create(
			<MockedProvider mocks={[mock]} addTypename={false}>
				<Countries />
			</MockedProvider>
		);

		await new Promise(r => setTimeout(r, 0));

		expect(() => render.root.findByType(ErrorMessage)).not.toThrow();
	});

	it("should render a Continent for each continent in data.continents", async () => {
		const mock = {
			request: {
				query: COUNTRY_LIST_QUERY
			},
			result: {
				data: {
					continents: [
						{
							code: "AF",
							name: "Africa",
							countries: [
								{
									languages: [],
									emoji: "🇦🇶",
									code: "IC",
									name: "Ivory Coast",
									native: "Ivory Coast"
								}
							]
						},
						{
							code: "AN",
							name: "Antarctica",
							countries: [
								{
									languages: [],
									emoji: "🇦🇶",
									code: "AQ",
									name: "Antarctica",
									native: "Antarctica"
								}
							]
						}
					]
				}
			}
		};

		const render = renderer.create(
			<MockedProvider mocks={[mock]} addTypename={false}>
				<Countries />
			</MockedProvider>
		);

		await new Promise(resolve => setTimeout(resolve));

		expect(render.root.findAllByType(Continent).length).toBe(2);
	});
});
