import styled from "styled-components";

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;

	td {
		padding: 10px 0;
	}

	tr > td:first-child {
		font-weight: 700;
		padding-right: 10px;
	}
`;

export default Table;
