import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import renderer from "react-test-renderer";
import Loader from "../../../shared/misc/Loader";
import ErrorMessage from "../../../shared/typography/ErrorMessage";
import Language from '../shared/Language';
import CountryDetail, { COUNTRY_DETAIL_QUERY } from "../CountryDetail";

jest.mock("react-router-dom", () => ({
	Link: p => <a {...p} />
}));

describe("CountryDetail", () => {
	it("should render loading when loading", () => {
		const render = renderer.create(
			<MockedProvider mocks={[]} addTypename={false}>
				<CountryDetail match={{ params: { code: "AO" } }} />
			</MockedProvider>
		);

		expect(() => render.root.findByType(Loader)).not.toThrow();
	});

	it("should render an error when error", async () => {
		const mock = {
			request: {
				query: COUNTRY_DETAIL_QUERY,
				variables: { name: "AO" }
			},
			error: new Error("Uh oh")
		};

		const render = renderer.create(
			<MockedProvider mocks={[mock]} addTypename={false}>
				<CountryDetail match={{ params: { code: "AO" } }} />
			</MockedProvider>
		);

		await new Promise(r => setTimeout(r, 0));

		expect(() => render.root.findByType(ErrorMessage)).not.toThrow();
	});

	it("should render a list of languages for each language in data.country.languages", async () => {
		const mock = {
			request: {
				query: COUNTRY_DETAIL_QUERY,
				variables: { code: "AO" }
			},
			result: {
				data: {
					country: {
						code: "AO",
						name: "Angola",
						native: "Angola",
						phone: "244",
						currency: "AOA",
						emoji: "🇦🇴",
						languages: [
							{
								code: "pt",
								name: "Portuguese",
								native: "Português"
							},
							{
								code: "es",
								name: "Spanish",
								native: "Espanol"
							}
						]
					}
				}
			}
		};

		const render = renderer.create(
			<MockedProvider mocks={[mock]} addTypename={false}>
				<CountryDetail match={{ params: { code: "AO" } }} />
			</MockedProvider>
		);

		await new Promise(resolve => setTimeout(resolve));

		expect(render.root.findAllByType(Language).length).toBe(2);
	});
});
