import React from "react";
import renderer from "react-test-renderer";
import Panel from "../../../../shared/navigation/Panel";
import Continent, { Country } from "../Continent";

jest.mock("react-router-dom", () => ({
	Link: p => <a {...p} />,
	withRouter: Component => props => (
		<Component match={{ url: "/" }} {...props} />
	)
}));

describe("Continent", () => {
	it("should filter countries by searchValue", () => {
		const continent = {
			name: "South America",
			countries: [
				{
					code: "AG",
					name: "Argentina",
					languages: []
				},
				{
					code: "CB",
					name: "Cuba",
					languages: []
				}
			]
		};
		const render = renderer.create(
			<Continent searchValue="arg" continent={continent} />
		);
		expect(render.root.findAllByType(Country).length).toBe(1);
		expect(JSON.stringify(render.toJSON())).toContain("Argentina");
		expect(render.toJSON()).not.toContain("Cuba");
	});
});
