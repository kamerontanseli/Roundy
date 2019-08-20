import styled from "styled-components";

const Loader = styled.div`
	border: 8px solid #f3f3f3;
	border-radius: 50%;
	border-top: 8px solid #ff6346;
	width: 60px;
	height: 60px;
	margin: 40px auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Loader;
