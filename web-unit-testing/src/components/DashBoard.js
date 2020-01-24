import React from "react";

const Dashboard = ({ balls, reset, strike, foul }) => {
	return (
		<section>
			<button onClick={() => strike()}>Strike</button>
			<button onClick={() => balls()}>Ball</button>
			<button onClick={() => reset()}>Hit</button>
			<button onClick={() => foul()}>Foul</button>
		</section>
	);
};
export default Dashboard;
