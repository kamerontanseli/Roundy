import React from "react";

const Language = ({ language, comma }) => (
	<span>
		<a href={`https://www.duolingo.com/course/${language.code}/en`}>
			{language.name}
		</a>
		{comma ? ", " : ""}
	</span>
);

export default Language;
